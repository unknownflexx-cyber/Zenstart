import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Edit, FileText, Video } from "lucide-react";

// ===== Shared animation =====
const floatAnim = { y: [0, -12, 0] };
const floatTransition = { duration: 3.5, ease: "easeInOut", repeat: Infinity };

const Reveal: React.FC<{ delay?: number; className?: string; children: React.ReactNode }> = ({
  delay = 0,
  className,
  children,
}) => (
  <motion.div
    className={className}
    initial={{ y: 28, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

// ===== Tiny pieces =====
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold tracking-wide bg-[#A1BFFF] text-gray-900 shadow">
    {children}
  </span>
);

const StepNode = ({ id }: { id: string }) => (
  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 z-20">
    <div className="relative w-12 h-12 rounded-full overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-black/80 rounded-full" />
      
      {/* Liquid glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#A1BFFF]/10 via-transparent to-[#A649D2]/10 rounded-full" />
      
      {/* Glass border */}
      <div className="absolute inset-0 rounded-full border border-white/20" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60 animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-white font-bold text-sm">
        {id}
      </div>
      
      {/* Subtle glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-[#A1BFFF]/20 via-transparent to-[#A649D2]/20 rounded-full blur-sm" />
    </div>
  </div>
);

// ===== Visuals matching the reference =====
const FloatingPills = ({
  pills,
}: {
  pills: { text: string; x: number; y: number; delay?: number }[];
}) => (
  <Reveal delay={0.1}>
    <motion.div
      animate={floatAnim}
      transition={floatTransition}
      className="relative w-[22rem] h-[18rem]"
    >
      {/* tight corner glow */}
      <div className="absolute -inset-6 rounded-[1.75rem] pointer-events-none">
        <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(200px_160px_at_30%_20%,rgba(168,85,247,.35),transparent_70%)] blur-[10px]" />
        <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(220px_170px_at_80%_75%,rgba(59,130,246,.35),transparent_72%)] blur-[10px]" />
      </div>

      <div className="absolute inset-0 rounded-[1.5rem] border border-white/15 bg-[#0b0e12]/70 backdrop-blur-md" />
      {pills.map((p, i) => (
        <Reveal key={i} delay={(p.delay ?? 0) + 0.15}>
          <motion.div
            className="absolute px-4 py-2 rounded-full border border-white/25 bg-black/70 text-white text-sm shadow"
            style={{ left: p.x, top: p.y }}
            animate={floatAnim}
            transition={{ ...floatTransition, delay: i * 0.12 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-md" />
            <span className="relative z-10">{p.text}</span>
          </motion.div>
        </Reveal>
      ))}
    </motion.div>
  </Reveal>
);

const EditorMockup = () => (
  <Reveal delay={0.1}>
    <motion.div
      animate={floatAnim}
      transition={floatTransition}
      className="relative w-[26rem]"
    >
      <div className="bg-gray-900/90 backdrop-blur-md border border-white/15 rounded-lg p-4 w-80 shadow-2xl mx-auto">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="bg-purple-600/20 border border-purple-400/30 rounded p-3 mb-4">
          <div className="flex items-center space-x-2 text-white text-sm">
            <FileText className="w-4 h-4" />
            <span>Brand Guidelines</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-white/20 rounded w-full" />
          <div className="h-2 bg-white/20 rounded w-3/4" />
          <div className="h-2 bg-white/20 rounded w-1/2" />
        </div>
      </div>

      <motion.div
        className="absolute -bottom-8 -right-8 bg-gray-800/95 backdrop-blur-sm border border-white/15 rounded-lg p-4 w-64 shadow-xl"
        animate={floatAnim}
        transition={{ ...floatTransition, delay: 0.2 }}
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg grid place-items-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div>
            <div className="text-white font-medium text-sm">Brand Identity 2025</div>
            <div className="text-gray-400 text-xs">Creating the design</div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="h-1 bg-white/20 rounded w-full" />
          <div className="h-1 bg-white/20 rounded w-2/3" />
        </div>
      </motion.div>
    </motion.div>
  </Reveal>
);

const VideoMockup = () => (
  <Reveal delay={0.1}>
    <motion.div
      animate={floatAnim}
      transition={floatTransition}
      className="bg-gray-900/90 backdrop-blur-md border border-white/15 rounded-lg p-4 w-96 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full grid place-items-center">
            <span className="text-white font-bold">Pr</span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full grid place-items-center">
            <span className="text-white font-bold text-sm">Ae</span>
          </div>
        </div>
        <div className="w-6 h-6 bg-white/15 rounded grid place-items-center">
          <Video className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-8 bg-gradient-to-r from-orange-500/50 to-blue-500/50 rounded" />
        <div className="h-6 bg-white/10 rounded" />
      </div>
      <div className="h-32 bg-gradient-to-br from-orange-400 to-blue-500 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </motion.div>
  </Reveal>
);

const ThumbnailMockup = () => (
  <Reveal delay={0.1}>
    <motion.div
      animate={floatAnim}
      transition={floatTransition}
      className="relative w-80 h-48 rounded-xl overflow-hidden shadow-2xl"
    >
      <img
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=640"
        alt="Thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
          PREMIUM
        </div>
        <div className="text-white font-bold text-lg">Professional Video Content</div>
      </div>
      <motion.div
        className="absolute -top-4 -left-4 w-16 h-16 bg-purple-600/80 backdrop-blur-sm rounded-lg grid place-items-center shadow-lg"
        animate={floatAnim}
        transition={{ ...floatTransition, delay: 0.15 }}
      >
        <Edit className="w-8 h-8 text-white" />
      </motion.div>
    </motion.div>
  </Reveal>
);

const AnalyticsMockup = () => (
  <Reveal delay={0.1}>
    <motion.div
      animate={floatAnim}
      transition={floatTransition}
      className="relative w-80 h-80 grid place-items-center"
    >
      <div className="relative w-48 h-48 rounded-full border border-white/20 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm shadow-2xl grid place-items-center">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(200px_200px_at_50%_50%,rgba(147,51,234,.45),transparent_65%)] blur-xl" />
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-2">10x</div>
                          <div className="text-thin text-sm">Growth Achieved</div>
        </div>
      </div>
    </motion.div>
  </Reveal>
);

// ===== Page =====
const Services: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Get the actual height of the services section for proper line travel
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
    }
  }, []);
  
  // Detect mobile to increase travel speed on small screens
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const travelDistance = React.useMemo(() => {
    const base = Math.max(0, sectionHeight - 100);
    return isMobile ? base * 1.2 : base; // faster on mobile
  }, [sectionHeight, isMobile]);
  
  const steps = [
    {
      id: "01",
      tag: "IDEATION",
      title: "Web Development",
      desc:
        "We build responsive, modern websites and web applications tailored to your business needs using cutting-edge technologies.",
      visual: (
        <Reveal delay={0.1}>
          <motion.div
            animate={floatAnim}
            transition={floatTransition}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0"
          >
            <img
              src="/photos/Our Services Photos/Web_build.png"
              alt="Web Development"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Reveal>
      ),
      side: "right",
    },
    {
      id: "02",
      tag: "SCRIPTING",
      title: "Content & Script Writing",
      desc:
        "We create compelling content and scripts that engage your audience and drive conversions using proven frameworks.",
      visual: (
        <Reveal delay={0.1}>
          <motion.div
            animate={floatAnim}
            transition={floatTransition}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0"
          >
            <img
              src="/photos/Our Services Photos/Content_writing.png"
              alt="Content & Script Writing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Reveal>
      ),
      side: "left",
    },
    {
      id: "03",
      tag: "EDITING",
      title: "Pre Production & Setup (Remote)",
      desc:
        "We handle all pre-production planning and remote setup to ensure smooth video production workflows.",
      visual: (
        <Reveal delay={0.1}>
          <motion.div
            animate={floatAnim}
            transition={floatTransition}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0"
          >
            <img
              src="/photos/Our Services Photos/Pre Production & Setup.png"
              alt="Pre Production & Setup"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Reveal>
      ),
      side: "right",
    },
    {
      id: "04",
      tag: "THUMBNAIL",
      title: "Production & Editing ",
      desc:
        "We produce high-quality video content and handle all editing processes to create professional, engaging videos.",
      visual: (
        <Reveal delay={0.1}>
          <motion.div
            animate={floatAnim}
            transition={floatTransition}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0"
          >
            <img
              src="/photos/Our Services Photos/Production and editing.png"
              alt="Production & Editing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Reveal>
      ),
      side: "left",
    },
    {
      id: "05",
      tag: "POST",
      title: "Ad Campain Setup & Launch",
      desc:
        "We set up and launch targeted ad campaigns across multiple platforms to maximize your reach and conversions.",
      visual: (
        <Reveal delay={0.1}>
          <motion.div
            animate={floatAnim}
            transition={floatTransition}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0"
          >
            <img
              src="/photos/Our Services Photos/ad_campaign_and_launch.png"
              alt="Ad Campaign Setup & Launch"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Reveal>
      ),
      side: "right",
    },
    {
      id: "06",
      tag: "MONITOR",
      title: "Monitor, Optimize & Scale",
      desc:
        "We continuously monitor campaign performance, optimize for better results, and scale successful strategies for sustained growth.",
      visual: (
        <Reveal delay={0.1}>
          <motion.div
            animate={floatAnim}
            transition={floatTransition}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0"
          >
            <img
              src="/photos/Our Services Photos/Monitor Optimize and Scale.png"
              alt="Monitor, Optimize & Scale"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Reveal>
      ),
      side: "left",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8 md:mb-9 pt-8 sm:pt-12 md:pt-16 lg:pt-20 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent drop-shadow-lg filter drop-shadow-[0_0_20px_rgba(161,191,255,0.8)] drop-shadow-[0_0_40px_rgba(166,73,210,0.6)]">
              Our Services
            </h1>
            
          </motion.div>
        </div>
      </section>

      {/* Services Process Section */}
      <section ref={sectionRef} className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
        {/* backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0.5),transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative">
          {/* Left spine - Visible on all screens */}
          <div className="pointer-events-none absolute left-14 md:left-1/2 md:-translate-x-1/2 md:ml-0 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-white/20" />
            
            {/* Traveling light */}
            <motion.div
              className="absolute w-[1px] h-16 sm:h-20 md:h-24 rounded-full left-[calc(50%+0.5px)] -translate-x-1/2"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, travelDistance])
              }}
            >
              {/* Main glow core */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#A1BFFF] via-white to-[#A649D2] rounded-full opacity-80" />
              
              {/* Outer glow layers */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#A1BFFF]/35 via-white/25 to-[#A649D2]/35 rounded-full blur-sm" />
              <div className="absolute -inset-2 bg-gradient-to-b from-[#A1BFFF]/15 via-white/12 to-[#A649D2]/15 rounded-full blur-sm" />
              <div className="absolute -inset-3 bg-gradient-to-b from-[#A1BFFF]/8 via-white/6 to-[#A649D2]/8 rounded-full blur-md" />
              
              {/* Pulsing effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#A1BFFF] via-white to-[#A649D2] rounded-full animate-pulse opacity-25" />
            </motion.div>
          </div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 px-4 sm:px-6">
            {steps.map((s) => (
              <div key={s.id} className="relative">
                <StepNode id={s.id} />

                <div className="max-w-6xl mx-auto">
                  <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                    {/* Text content */}
                    <div className={`text-center md:text-left max-w-[19rem] sm:max-w-[24rem] mx-auto md:max-w-none md:mx-0 ${s.side === "left" ? "md:order-2" : "md:order-1"}`}>
                      <Reveal delay={0.05}>
                        <div>
                          <Tag>{s.tag}</Tag>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mt-4">
                            {s.title}
                          </h3>
                          <p className="text-thin mt-3 leading-relaxed text-[13px] sm:text-sm">
                            {s.desc}
                          </p>
                        </div>
                      </Reveal>
                    </div>

                    {/* Visual */}
                    <div className={`mt-6 md:mt-0 flex justify-center ${s.side === "left" ? "md:order-1 md:justify-start" : "md:order-2 md:justify-end"}`}>
                      {s.visual}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
