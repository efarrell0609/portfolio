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
const Computers: FC<{ isLandscape?: boolean }> = ({ isLandscape = false }) => {
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

   // No idle animation - only draggable
   const meshRef = useRef<THREE.Mesh>(null);
   
   useFrame((state, delta) => {
      if (mixer.current) {
         mixer.current.update(delta);
      }
      
      if (meshRef.current) {
         // Keep laptop still - no idle animation
         meshRef.current.rotation.y = 0;
      }
   });

   // Responsive positioning and scaling
   const deviceWidth = window.innerWidth;
   const deviceHeight = window.innerHeight;
   const aspectRatio = deviceWidth / deviceHeight;
   
   // Base scale - more conservative approach
   let scale = 0.6;
   if (deviceWidth <= 480) scale = 0.4;
   else if (deviceWidth <= 768) scale = 0.5;
   else if (deviceWidth <= 920) scale = 0.55;
   else if (deviceWidth <= 1024) scale = 0.65;
   else scale = 0.7;
   
   // Y position - centered with adjustments for different screen types
   let yPosition = -0.8;
   
   // Handle ultra-wide screens
   if (aspectRatio > 2.0) {
      scale = scale * 0.8;
      yPosition = -1.0;
   }
   
   // Handle very tall screens
   if (aspectRatio < 0.6) {
      scale = scale * 0.9;
      yPosition = -0.6;
   }
   
   // Specific fix for 920-1025px range on desktop
   if (deviceWidth >= 920 && deviceWidth <= 1025) {
      scale = scale * 0.9;
      yPosition = -0.7;
   }
   
   // Landscape mode adjustments - more conservative
   if (isLandscape && deviceWidth <= 1024) {
      scale = scale * 1.5; // Reduced from 2.8 to 1.5
      yPosition = -0.5;
   }
   
   // Ensure scale doesn't get too extreme
   scale = Math.max(0.3, Math.min(scale, 1.2));
   
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
const ComputersCanvas = ({ isLandscape }: { isLandscape: boolean }) => {
   const deviceWidth = window.innerWidth;
   
   // Responsive camera settings
   let cameraFov = 35;
   let cameraPosition: [number, number, number] = [0, 0, 8];
   
   if (deviceWidth <= 480) {
      cameraFov = 40;
      cameraPosition = [0, 0, 6];
   } else if (deviceWidth <= 768) {
      cameraFov = 38;
      cameraPosition = [0, 0, 7];
   } else if (deviceWidth >= 920 && deviceWidth <= 1025) {
      cameraFov = 36;
      cameraPosition = [0, 0, 7.5];
   }
   
   return (
      <Canvas
         frameloop="always"
         shadows
         camera={{ position: cameraPosition, fov: cameraFov }}
         gl={{ preserveDrawingBuffer: true }}
         style={{ cursor: 'grab' }}
      >
         <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
               enableZoom={false}
               enablePan={false}
               enableRotate={true}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <Computers isLandscape={isLandscape} />
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
         const aspectRatio = width / height;
         
         // More precise device detection - exclude desktop ranges
         const isMobileDevice = width <= 768 || (width <= 1024 && aspectRatio > 1.3);
         const isLandscapeOrientation = width > height;
         
         // Apply landscape layout only to actual mobile devices in landscape
         const shouldUseLandscape = isMobileDevice && isLandscapeOrientation;
         
         setIsMobile(isMobileDevice);
         setIsLandscape(shouldUseLandscape);
      };
      
      checkOrientation();
      window.addEventListener('resize', checkOrientation);
      window.addEventListener('orientationchange', checkOrientation);
      return () => {
         window.removeEventListener('resize', checkOrientation);
         window.removeEventListener('orientationchange', checkOrientation);
      };
   }, []);
   
   return (
      <section className={`relative w-full h-screen mx-auto ${backgroundClass}`}>
         <ParticlesBg />
         <div className={`${styles.paddingX} absolute inset-0 md:top-[80px] top-[100px] max-w-7xl mx-auto`}>
            {/* Main Layout Container */}
            <div className="relative z-10 h-full flex flex-col justify-start pt-20">
               {/* Content Container - Changes to 2-column in landscape */}
               <div className={`h-full ${isLandscape ? 'flex flex-row' : 'flex flex-col'}`}>
                  {/* Left Column - Text Content */}
                  <div className={`${isLandscape ? 'w-1/2' : 'w-full'} flex flex-row items-start gap-5`}>
                     <div className={`flex flex-col justify-center items-center ${isLandscape ? 'mt-2' : 'mt-5 mb-4'}`}>
                        <div 
                           className="w-5 h-5 rounded-full" 
                           style={{ backgroundColor: currentColor }}
                        />
                        <div 
                           className={`w-1 rounded-full ${isLandscape ? 'h-20' : 'sm:h-60 h-32'}`}
                           style={{ 
                              background: `linear-gradient(180deg, ${currentColor} 0%, transparent 100%)`
                           }}
                        />
                     </div>

                     <div className={`${isLandscape ? 'mt-2' : 'mt-0'} flex-1`}>
                        <h1 className={`${isLandscape ? 'text-3xl sm:text-4xl lg:text-5xl font-bold' : styles.heroHeadText} text-gray-900 dark:text-white`}>
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
                        <p className={`${isLandscape ? 'text-base sm:text-lg lg:text-xl' : styles.heroSubText} mt-2 text-black dark:text-gray-300`}>
                           {subtitle}
                        </p>
                     </div>
                  </div>
                  
                  {/* Right Column - 3D Model (only in landscape) */}
                  {isLandscape && show3DModel && (
                     <div className="w-1/2 h-full flex items-center justify-center z-10">
                        <ComputersCanvas isLandscape={isLandscape} />
                     </div>
                  )}
               </div>
            </div>
            
            {/* 3D Model - Centered (only in portrait) */}
            {!isLandscape && show3DModel && (
               <div className="absolute inset-0 z-10">
                  <div className="w-full h-full flex items-center justify-center">
                     <ComputersCanvas isLandscape={isLandscape} />
                  </div>
               </div>
            )}
         </div>
         
         {scrollToId && (
            <div className="absolute bottom-20 md:bottom-8 flex w-full items-center justify-center z-50">
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