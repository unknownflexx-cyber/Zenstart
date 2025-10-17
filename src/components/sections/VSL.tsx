import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Volume2, Maximize, Clock } from 'lucide-react';

const VSL = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate snake movement based on scroll position
  const snakePosition = (scrollY * 0.5) % 360;

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 dark:from-purple-900/20 via-transparent to-blue-200/30 dark:to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300/20 dark:from-purple-900/30 via-transparent to-blue-300/20 dark:to-blue-900/30 animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
            See How We Transform Brands
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch our exclusive behind-the-scenes process and discover how we've helped 150+ brands 
            achieve extraordinary digital success
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Video Container with Glowing Edge Lighting */}
          <div className="relative group">
            {/* Orange Beam Snake - Top Left */}
            <motion.div 
              className="absolute -inset-4 rounded-3xl"
              style={{
                background: `conic-gradient(from ${snakePosition}deg, 
                  transparent 0deg,
                  transparent 315deg,
                  #FF6A00 335deg,
                  #FF8C42 345deg,
                  #FFAA00 355deg,
                  #FF6A00 5deg,
                  #FF4500 15deg,
                  transparent 35deg,
                  transparent 360deg)`,
                filter: 'blur(12px) brightness(1.5)',
                boxShadow: '0 0 40px #FF6A00, inset 0 0 40px #FF6A00',
              }}
            />
            
            {/* Orange Beam Snake - Inner Layer */}
            <motion.div 
              className="absolute -inset-3 rounded-2xl"
              style={{
                background: `conic-gradient(from ${snakePosition}deg, 
                  transparent 0deg,
                  transparent 320deg,
                  #FF6A00 340deg,
                  #FFAA00 350deg,
                  #FF6A00 360deg,
                  #FF4500 10deg,
                  transparent 30deg,
                  transparent 360deg)`,
                filter: 'blur(8px) brightness(1.3)',
                boxShadow: '0 0 30px #FF6A00',
              }}
            />
            
            {/* Blue Beam Snake - Bottom Right */}
            <motion.div 
              className="absolute -inset-4 rounded-3xl"
              style={{
                background: `conic-gradient(from ${snakePosition + 180}deg, 
                  transparent 0deg,
                  transparent 135deg,
                  #00CFFF 150deg,
                  #42D4FF 165deg,
                  #00AAFF 180deg,
                  #00CFFF 195deg,
                  #26C6DA 210deg,
                  transparent 225deg,
                  transparent 360deg)`,
                filter: 'blur(12px) brightness(1.5)',
                boxShadow: '0 0 40px #00CFFF, inset 0 0 40px #00CFFF',
              }}
            />
            
            {/* Blue Beam Snake - Inner Layer */}
            <motion.div 
              className="absolute -inset-2 rounded-2xl"
              style={{
                background: `conic-gradient(from ${snakePosition + 180}deg, 
                  transparent 0deg,
                  transparent 140deg,
                  #00CFFF 155deg,
                  #00AAFF 170deg,
                  #00CFFF 185deg,
                  #42D4FF 200deg,
                  transparent 215deg,
                  transparent 360deg)`,
                filter: 'blur(6px) brightness(1.8)',
                boxShadow: '0 0 20px #00CFFF',
              }}
            />
            
            {/* Main Video Container */}
            <div className="relative bg-gray-900/98 dark:bg-black/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
              {/* Snake Glow Border Effects */}
              {/* Orange Snake Beam */}
              <motion.div 
                className="absolute -inset-1 rounded-2xl"
                style={{
                  background: `conic-gradient(from ${snakePosition}deg, 
                    transparent 0deg,
                    transparent 340deg,
                    rgba(255, 106, 0, 0.8) 350deg,
                    rgba(255, 140, 66, 1) 355deg,
                    rgba(255, 170, 0, 0.9) 360deg,
                    rgba(255, 106, 0, 0.8) 5deg,
                    rgba(255, 69, 0, 0.6) 10deg,
                    transparent 20deg,
                    transparent 360deg)`,
                  filter: 'blur(8px)',
                  boxShadow: '0 0 20px rgba(255, 106, 0, 0.6), inset 0 0 20px rgba(255, 106, 0, 0.3)',
                }}
              />
              
              {/* Blue Snake Beam */}
              <motion.div 
                className="absolute -inset-1 rounded-2xl"
                style={{
                  background: `conic-gradient(from ${snakePosition + 180}deg, 
                    transparent 0deg,
                    transparent 160deg,
                    rgba(0, 207, 255, 0.8) 170deg,
                    rgba(66, 212, 255, 1) 175deg,
                    rgba(0, 170, 255, 0.9) 180deg,
                    rgba(0, 207, 255, 0.8) 185deg,
                    rgba(38, 198, 218, 0.6) 190deg,
                    transparent 200deg,
                    transparent 360deg)`,
                  filter: 'blur(8px)',
                  boxShadow: '0 0 20px rgba(0, 207, 255, 0.6), inset 0 0 20px rgba(0, 207, 255, 0.3)',
                }}
              />
              
              {/* Outer Glow Layer */}
              <motion.div 
                className="absolute -inset-2 rounded-2xl"
                style={{
                  background: `conic-gradient(from ${snakePosition}deg, 
                    transparent 0deg,
                    transparent 345deg,
                    rgba(255, 106, 0, 0.4) 355deg,
                    rgba(255, 106, 0, 0.2) 5deg,
                    transparent 15deg,
                    transparent 165deg,
                    rgba(0, 207, 255, 0.4) 175deg,
                    rgba(0, 207, 255, 0.2) 185deg,
                    transparent 195deg,
                    transparent 360deg)`,
                  filter: 'blur(12px)',
                  boxShadow: '0 0 30px rgba(255, 106, 0, 0.3), 0 0 30px rgba(0, 207, 255, 0.3)',
                }}
              />
              
              {/* Inner Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
              
              {/* Video Aspect Ratio Container */}
              <div className="aspect-video relative">
                {/* Video Thumbnail/Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover opacity-60"
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                  
                  {/* Play Button */}
                  <motion.button
                    className="absolute inset-0 flex items-center justify-center group/play"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-r from-[#FF6A00] to-[#00CFFF] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
                      style={{
                        boxShadow: '0 0 30px #FF6A00, 0 0 60px #00CFFF, inset 0 0 20px rgba(255,255,255,0.2)',
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.button>
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h3 className="text-xl font-bold mb-1">The ZenStart Process</h3>
                        <p className="text-thin text-sm">How we transform brands in 90 days</p>
                      </div>
                                              <div className="flex items-center space-x-2 text-sm text-thin">
                        <Clock className="w-4 h-4" />
                        <span>8:42</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-thin">
                    <div className="flex items-center space-x-4">
                      <motion.button
                        className="hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Volume2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                    
                    <motion.button
                      className="hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Maximize className="w-5 h-5" />
                    </motion.button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FF6A00] to-[#00CFFF] rounded-full"
                      style={{
                        boxShadow: '0 0 10px #FF6A00, 0 0 20px #00CFFF',
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: "35%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '150+', label: 'Success Stories' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '300%', label: 'Average ROI Increase' },
              { number: '90', label: 'Days to Transform' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSL;