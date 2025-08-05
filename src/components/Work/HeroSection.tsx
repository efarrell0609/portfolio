import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Html, useProgress } from '@react-three/drei';
import { type FC, useEffect, useState, Suspense, useRef } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import * as THREE from 'three';
import ParticlesBg from '@/components/ParticlesBg';

// Styles object
const styles = {
   paddingX: 'sm:px-16 px-6',
   paddingY: 'sm:py-16 py-6',
   padding: 'sm:px-16 px-6 sm:py-16 py-10',
   heroHeadText:
    'font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[32px] lg:leading-[98px] mt-2',
   heroSubText:
    'font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[14px] lg:leading-[40px]',
   sectionHeadText:
    'font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]',
   sectionSubText:
    'sm:text-[18px] text-[14px] uppercase tracking-wider',
};

// Canvas Loader Component
const CanvasLoader = () => {
   const { progress } = useProgress();
   return (
      <Html>
         <span className="canvas-load"></span>
         <p
            style={{
               fontSize: 14,
               color: '#f1f1f1',
               fontWeight: 800,
               marginTop: 40,
            }}
         >
            {progress.toFixed(2)}%
         </p>
      </Html>
   );
};

// 3D Laptop Component
const Computers: FC = () => {
   const laptop = useGLTF('/laptop_with_code/scene.gltf');
   const { animations } = laptop;
   const mixer = useRef<THREE.AnimationMixer | null>(null);
   const actionRef = useRef<THREE.AnimationAction | null>(null);
   const animationStarted = useRef(false);
   const [isSmallHeight, setIsSmallHeight] = useState(false);
   const [isVerySmallHeight, setIsVerySmallHeight] = useState(false);

   useEffect(() => {
      const checkHeight = () => {
         const height = window.innerHeight;
         setIsSmallHeight(height < 900);
         setIsVerySmallHeight(height < 700);
      };
      
      checkHeight();
      window.addEventListener('resize', checkHeight);
      
      return () => window.removeEventListener('resize', checkHeight);
   }, []);

   useEffect(() => {
      if (animations && animations.length > 0 && !animationStarted.current) {
         mixer.current = new THREE.AnimationMixer(laptop.scene);
         
         // Try to find the specific animation by name
         const animationClip = animations.find(anim => anim.name === 'Animation') || animations[0];
         
         const action = mixer.current.clipAction(animationClip);
         actionRef.current = action;
         
         // Force the model to start in closed state and play immediately
         action.time = 0;
         action.setLoop(THREE.LoopOnce, 1);
         action.clampWhenFinished = true;
         action.play();
         animationStarted.current = true;
      }
   }, [animations, laptop.scene]);

   useFrame((state, delta) => {
      if (mixer.current) {
         mixer.current.update(delta);
      }
   });

   // Add rotation animation with drag support
   const meshRef = useRef<THREE.Mesh>(null);
   const [isDragging, setIsDragging] = useState(false);
   const [dragRotation, setDragRotation] = useState(0);
   
   useFrame((state) => {
      if (meshRef.current) {
         if (isDragging) {
            // Use drag rotation
            meshRef.current.rotation.y = dragRotation;
         } else {
            // Gentle idle rotation animation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
         }
      }
   });

   // Simple, consistent positioning that works everywhere
   const deviceWidth = window.innerWidth;
   const deviceHeight = window.innerHeight;
   
   // Simple scale based on screen width
   let scale = 0.7;
   if (deviceWidth <= 480) scale = 0.5;
   else if (deviceWidth <= 768) scale = 0.6;
   else scale = 0.7;
   
   // Simple Y position - always centered vertically
   const yPosition = -1.0;
   
   const position = [0, yPosition, 0];

   return (
      <mesh ref={meshRef}>
         <hemisphereLight intensity={0.15} groundColor="black" />
         <pointLight intensity={10} position={[0, -0.2, 0]} />
         <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={2000}
            castShadow
            shadow-mapSize={1024}
         />
         <primitive
            object={laptop.scene}
            scale={scale}
            position={position}
            rotation={[0, 0, 0]}
         />
      </mesh>
   );
};

// Computers Canvas Component
const ComputersCanvas = () => {
   const [isDragging, setIsDragging] = useState(false);
   const [dragRotation, setDragRotation] = useState(0);

   return (
      <Canvas
         frameloop="always"
         shadows
         camera={{ position: [0, 0, 8], fov: 35 }}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
               enableZoom={false}
               enablePan={false}
               enableRotate={true}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
               maxAzimuthAngle={Math.PI / 2}
               minAzimuthAngle={-Math.PI / 2}
               onStart={() => setIsDragging(true)}
               onEnd={() => {
                  setIsDragging(false);
                  setDragRotation(0);
               }}
            />
            <Computers />
         </Suspense>
         <Preload all />
      </Canvas>
   );
};

interface HeroSectionProps {
   title: string;
   subtitle: string;
   highlightWord?: string;
   backgroundClass?: string;
   scrollToId?: string;
   show3DModel?: boolean;
}

// Main Hero Component
const HeroSection: FC<HeroSectionProps> = ({ 
   title, 
   subtitle, 
   highlightWord, 
   backgroundClass = "bg-transparent",
   scrollToId,
   show3DModel = true
}) => {
   const { currentColor } = useSettings();
   const [isLandscape, setIsLandscape] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkOrientation = () => {
         const width = window.innerWidth;
         const height = window.innerHeight;
         const isMobileDevice = width <= 640;
         const isLandscapeOrientation = width > height;
         
         setIsMobile(isMobileDevice);
         setIsLandscape(isMobileDevice && isLandscapeOrientation);
      };
      
      checkOrientation();
      window.addEventListener('resize', checkOrientation);
      return () => window.removeEventListener('resize', checkOrientation);
   }, []);
   
   return (
      <section className={`relative w-full h-screen mx-auto ${backgroundClass}`}>
         <ParticlesBg />
         <div className={`${styles.paddingX} absolute inset-0 md:top-[80px] top-[100px] max-w-7xl mx-auto`}>
            {/* Text Content - Left aligned towards the top */}
            <div className="relative z-10 h-full flex flex-col justify-start pt-20">
               <div className="flex flex-row items-start gap-5">
                  <div className="flex flex-col justify-center items-center mt-5 mb-4">
                     <div 
                        className="w-5 h-5 rounded-full" 
                        style={{ backgroundColor: currentColor }}
                     />
                     <div 
                        className="w-1 sm:h-60 h-32 rounded-full" 
                        style={{ 
                           background: `linear-gradient(180deg, ${currentColor} 0%, transparent 100%)`
                        }}
                     />
                  </div>

                  <div className="mt-0 flex-1">
                     <h1 className={`${styles.heroHeadText} text-gray-900 dark:text-white`}>
                        {title.split(' ').map((word, index) => (
                           <span key={index}>
                              {word === highlightWord ? (
                                 <span style={{ color: currentColor }}>{word}</span>
                              ) : (
                                 word
                              )}
                              {index < title.split(' ').length - 1 ? ' ' : ''}
                           </span>
                        ))}
                     </h1>
                     <p className={`${styles.heroSubText} mt-2 text-black dark:text-gray-300`}>
                        {subtitle}
                     </p>
                  </div>
               </div>
            </div>
            
            {/* 3D Model - Interactive and properly positioned */}
            {show3DModel && (
               <div className="absolute inset-0">
                  <div className="w-full h-full flex items-center justify-center">
                     <div className={`w-full h-full flex items-center justify-center ${isLandscape ? 'w-1/2 ml-auto' : ''}`}>
                        <ComputersCanvas />
                     </div>
                  </div>
               </div>
            )}
         </div>
         
         {scrollToId && (
            <div className="absolute bottom-20 md:bottom-8 flex w-full items-center justify-center">
               <button 
                  onClick={() => {
                     const element = document.getElementById(scrollToId);
                     if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                     }
                  }}
                  className="cursor-pointer"
               >
                  <div className="h-[64px] w-[35px] rounded-3xl border-4 flex justify-center items-start p-2 border-black dark:border-white">
                     <motion.div
                        animate={{ y: [0, 24, 0] }}
                        transition={{
                           duration: 1.5,
                           repeat: Infinity,
                           repeatType: 'loop',
                        }}
                        className="w-3 h-3 rounded-full mb-1"
                        style={{ backgroundColor: currentColor }}
                     />
                  </div>
               </button>
            </div>
         )}
      </section>
   );
};

export default HeroSection; 