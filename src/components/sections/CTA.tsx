import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Cal, { getCalApi } from '@calcom/embed-react';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isOpen, setIsOpen] = useState(false);
  const calRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      calRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  // Auto-open when URL has #book
  useEffect(() => {
    if (location.hash === '#book') {
      setIsOpen(true);
      requestAnimationFrame(() => {
        calRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location]);

  return (
    <section ref={ref} id="book" className="py-24 relative overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}photos/bg.png)` }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Transparent Glassmorphism Effect */}
          <div className="absolute inset-0 bg-white/3 backdrop-blur-lg rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 rounded-3xl" />
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-10 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent leading-tight">
              Ready to Transform
              <br />
              Your Digital Presence?
            </h2>
            
            <p className="text-xl md:text-xl font-light text-thin mb-14 pb-10 max-w-3xl mx-auto leading-relaxed">
              Let's create something extraordinary together. From concept to launch, 
              we'll be your partner in building a digital experience that drives results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 pb-10">
              {!isOpen && (
                <motion.button
                  onClick={handleOpen}
                  className="group px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full text-gray-900 font-semibold text-lg flex items-center space-x-2 hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Discovery Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              )}
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
              </div>
            </motion.div>
            <div ref={calRef} className={`mt-6 transition-[max-height,opacity] duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ maxHeight: isOpen ? 900 : 0 }}>
              {isOpen && (
                <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl p-2 overflow-hidden">
                  <Cal
                    calLink="zenstart/30min"
                    config={{ layout: 'month_view' }}
                    style={{ width: '100%', maxWidth: '100%', height: 'min(900px, 80vh)' }}
                    className="w-full max-w-full"
                  />
                </div>
              )}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;