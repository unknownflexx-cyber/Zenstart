import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const DESKTOP_SPLINE_URL = "https://prod.spline.design/TkgRSM5nmVR50RMH/scene.splinecode";
// Mobile-only Spline scene (no text). Swapped in below md breakpoint
const MOBILE_SPLINE_URL = "https://prod.spline.design/CA3qkpqAu52rA4ig/scene.splinecode";

const Hero = () => {
  const splineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);




  useEffect(() => {
    // Ensure Spline viewer is loaded
    const loadSpline = async () => {
      try {
        // Check if spline-viewer is already defined
        if (!customElements.get('spline-viewer')) {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://unpkg.com/@splinetool/viewer@1.10.71/build/spline-viewer.js';
          document.head.appendChild(script);
          
          // Wait for script to load
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }
      } catch (error) {
        console.log('Spline loading error:', error);
      }
    };

    loadSpline();

    const mq = window.matchMedia('(max-width: 767px)');
    const handleMatch = () => setIsMobile(mq.matches);
    handleMatch();
    mq.addEventListener ? mq.addEventListener('change', handleMatch) : mq.addListener(handleMatch);

    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handleMatch) : mq.removeListener(handleMatch);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Spline 3D Background */}
      <div 
        ref={splineRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        {isMobile ? (
          // Mobile Spline (no text)
          <spline-viewer
            url={MOBILE_SPLINE_URL}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        ) : (
          // Desktop Spline
          <spline-viewer
            url={DESKTOP_SPLINE_URL}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        )}
        {/* Mobile mask to hide Spline text on small screens */}
        <div className="md:hidden absolute inset-x-0 top-0 h-1/3 pointer-events-none bg-gradient-to-b from-black via-black/80 to-transparent" />
        <div className="md:hidden absolute inset-x-0 bottom-0 h-1/3 pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>




{/* CTA Overlay */}
<div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-80 pb-28 sm:pb-24 md:pb-32 lg:pb-36">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <motion.button
      onClick={() => { window.location.href = `${import.meta.env.BASE_URL}#book`; }}
      className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-gray-900 font-semibold text-sm sm:text-base md:text-lg rounded-full hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(161,191,255,0.6)] hover:shadow-[0_0_60px_rgba(166,73,210,0.4)] relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#A1BFFF] before:via-white before:to-[#A649D2] before:rounded-full before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">Launch Your Mission Now</span>
    </motion.button>
  </motion.div>
</div>



      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;