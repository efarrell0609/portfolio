import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Html, useProgress } from '@react-three/drei';
import { type FC, useEffect, useState, Suspense } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

// Styles object
const styles = {
   paddingX: 'sm:px-16 px-6',
   paddingY: 'sm:py-16 py-6',
   padding: 'sm:px-16 px-6 sm:py-16 py-10',
   heroHeadText:
    'font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2',
   heroSubText:
    'font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]',
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

// 3D Computer Component
const Computers: FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
   const computer = useGLTF('/desktop_pc/scene.gltf');

   return (
      <mesh>
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
             object={computer.scene}
             scale={isMobile?0.7:0.75}
             position={isMobile?[0, -2.5, -2.2]:[0, -2.75, -1.5]}
             rotation={[-0.01, -0.2, -0.1]}
          />
      </mesh>
   );
};

// Computers Canvas Component
const ComputersCanvas = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false);

   useEffect(()=>{
      const mediaQuery = window.matchMedia('(max-width:500px)');
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event:MediaQueryListEvent)=>{
         setIsMobile(event.matches);
      };

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return (()=>mediaQuery.removeEventListener('change', handleMediaQueryChange));
   }, []);

   return (
      <Canvas
         frameloop="demand"
         shadows
         camera={{ position: [20, 3, 5], fov: 25 }}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
               enableZoom={false}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile}/>
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
   backgroundClass = "bg-gray-50 dark:bg-neutral-800",
   scrollToId,
   show3DModel = true
}) => {
   const { currentColor } = useSettings();
   
   return (
      <section className={`relative w-full h-screen mx-auto ${backgroundClass}`}>
         <div className={`${styles.paddingX} absolute inset-0 md:top-[140px] top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5 pb-1`}>
            <div className="flex flex-col justify-center items-center mt-5 mb-8">
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

                         <div className="mt-0">
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
                <p className={`${styles.heroSubText} mt-2 text-gray-600 dark:text-gray-300`}>
                   {subtitle}
                </p>
             </div>
         </div>
         
         {show3DModel && <ComputersCanvas />}
         
         {scrollToId && (
            <div className="absolute bottom-8 flex w-full items-center justify-center">
               <a href={`#${scrollToId}`}>
                  <div className="h-[64px] w-[35px] rounded-3xl border-4 flex justify-center items-start p-2 border-gray-300 dark:border-gray-600">
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
               </a>
            </div>
         )}
      </section>
   );
};

export default HeroSection; 