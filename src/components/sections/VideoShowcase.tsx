import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Volume2, Maximize, Clock } from "lucide-react";

export default function VideoShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);

  // Scroll progress for snake motion
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / Math.max(1, maxScroll), 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0.55),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
            See How We Transform Brands
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch our exclusive behind-the-scenes process and discover how we&apos;ve helped 150+ brands achieve extraordinary digital success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative"
        >
          {/* Corner glows */}
          <div className="absolute -inset-6 rounded-3xl pointer-events-none">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(200px_160px_at_30%_20%,rgba(255,77,255,.35),transparent_70%)] blur-[10px]" />
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(220px_170px_at_80%_75%,rgba(0,229,255,.35),transparent_72%)] blur-[10px]" />
          </div>

          {/* Moving Snake Stroke Border (BOLDER) */}
          <div className="absolute -inset-1 rounded-2xl overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="threeColorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A1BFFF" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#A649D2" />
                </linearGradient>
                <filter id="videoGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="videoBigGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="12" result="bigBlur" />
                  <feMerge>
                    <feMergeNode in="bigBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="videoMegaGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="22" result="megaBlur" />
                  <feMerge>
                    <feMergeNode in="megaBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* First snake with gradient */}
              <path
                d="M4,4 H96 A4,4 0 0 1 100,8 V52 A4,4 0 0 1 96,56 H4 A4,4 0 0 1 0,52 V8 A4,4 0 0 1 4,4 Z"
                fill="none"
                stroke="url(#threeColorGradient)"
                strokeWidth="40"              /* thicker mega glow */
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.15 0.85"
                strokeDashoffset={scrollProgress * -3}
                opacity="0.9"
                filter="url(#videoMegaGlow)"
              />
              <path
                d="M4,4 H96 A4,4 0 0 1 100,8 V52 A4,4 0 0 1 96,56 H4 A4,4 0 0 1 0,52 V8 A4,4 0 0 1 4,4 Z"
                fill="none"
                stroke="url(#threeColorGradient)"
                strokeWidth="28"              /* thicker outer glow */
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.15 0.85"
                strokeDashoffset={scrollProgress * -3}
                opacity="1"
                filter="url(#videoBigGlow)"
              />
              <path
                d="M4,4 H96 A4,4 0 0 1 100,8 V52 A4,4 0 0 1 96,56 H4 A4,4 0 0 1 0,52 V8 A4,4 0 0 1 4,4 Z"
                fill="none"
                stroke="url(#threeColorGradient)"
                strokeWidth="16"              /* thicker core */
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.15 0.85"
                strokeDashoffset={scrollProgress * -3}
                opacity="1"
                filter="url(#videoGlow)"
              />

              {/* Second snake with gradient */}
              <path
                d="M4,4 H96 A4,4 0 0 1 100,8 V52 A4,4 0 0 1 96,56 H4 A4,4 0 0 1 0,52 V8 A4,4 0 0 1 4,4 Z"
                fill="none"
                stroke="url(#threeColorGradient)"
                strokeWidth="40"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.15 0.85"
                strokeDashoffset={scrollProgress * 3 + 0.5}
                opacity="0.9"
                filter="url(#videoMegaGlow)"
              />
              <path
                d="M4,4 H96 A4,4 0 0 1 100,8 V52 A4,4 0 0 1 96,56 H4 A4,4 0 0 1 0,52 V8 A4,4 0 0 1 4,4 Z"
                fill="none"
                stroke="url(#threeColorGradient)"
                strokeWidth="28"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.15 0.85"
                strokeDashoffset={scrollProgress * 3 + 0.5}
                opacity="1"
                filter="url(#videoBigGlow)"
              />
              <path
                d="M4,4 H96 A4,4 0 0 1 100,8 V52 A4,4 0 0 1 96,56 H4 A4,4 0 0 1 0,52 V8 A4,4 0 0 1 4,4 Z"
                fill="none"
                stroke="url(#threeColorGradient)"
                strokeWidth="16"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.15 0.85"
                strokeDashoffset={scrollProgress * 3 + 0.5}
                opacity="1"
                filter="url(#videoGlow)"
              />
            </svg>
          </div>

          {/* Video Content */}
          <div className="relative z-10 rounded-2xl overflow-hidden bg-[#0b0e12]/95 shadow-[0_10px_60px_rgba(0,0,0,0.55)]">
            {/* 16:9 box */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <img
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Video"
                className="absolute inset-0 w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45" />

              {/* Center Play button (no gradient) */}
              {!isPlaying && (
                <motion.button
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl border border-white/30 bg-white/10 backdrop-blur-sm"
                    style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.35), inset 0 0 0 rgba(255,255,255,0)" }}
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white ml-0.5 sm:ml-1" fill="currentColor" />
                  </div>
                </motion.button>
              )}

              {/* Bottom overlay - Only show when playing */}
              {isPlaying && (
                <div className="absolute bottom-5 left-5 right-5 text-white pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">The ZenStart Process</h3>
                    <p className="text-thin text-sm">How we transform brands in 90 days</p>
                  </div>
                                      <div className="flex items-center gap-2 text-sm text-thin">
                    <Clock className="w-4 h-4" />
                    8:42
                  </div>
                </div>

                {/* PROGRESS: pure white bar */}
                <div className="mt-3 h-1.5 rounded-full bg-white/25 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-white"
                    style={{ boxShadow: "0 0 10px rgba(255,255,255,0.7)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: "35%" }}
                    transition={{ duration: 2, delay: 0.6 }}
                  />
                </div>

                {/* Controls (no clipping) */}
                <div className="mt-4 flex items-center justify-between px-1 text-white/85">
                  <div className="flex gap-4">
                    <button className="hover:text-white transition-colors">
                      <Play className="w-5 h-5" />
                    </button>
                    <button className="hover:text-white transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="hover:text-white transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}