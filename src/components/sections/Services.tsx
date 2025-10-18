import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Edit, FileText } from "lucide-react";

// Type definitions
interface FloatingElement {
  text: string;
  x: number;
  y: number;
  delay?: number;
}

interface FloatingIcon {
  icon: "instagram" | "youtube" | "tiktok";
  x: number;
  y: number;
}

interface CenterElement {
  text: string;
  subtitle: string;
}

interface Service {
  id: string;
  tag: string;
  title: string;
  description: string;
  side: "left" | "right";
  mockup: "floating-pills" | "editor" | "video" | "thumbnail" | "analytics";
  floatingElements?: FloatingElement[];
  centerElement?: CenterElement;
  floatingIcons?: FloatingIcon[];
}

// ---------- helpers ----------
const FloatWrapper: React.FC<{ delay?: number; className?: string; children: React.ReactNode }> = ({
  delay = 0,
  className = "",
  children,
}) => (
  <motion.div
    className={className}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, delay }}
    style={{
      willChange: "transform",
      transform: "translateZ(0)",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      contain: "layout paint",
    }}
  >
    {children}
  </motion.div>
);

const Reveal: React.FC<{ delay?: number; className?: string; children: React.ReactNode }> = ({
  delay = 0,
  className,
  children,
}) => (
  <motion.div
    className={className}
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    style={{ willChange: "transform", transform: "translateZ(0)" }}
  >
    {children}
  </motion.div>
);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 20%", "end 80%"] });

  const services: Service[] = useMemo(
    () =>
      [
        {
          id: "01",
          tag: "WEBSITE DESIGN",
          title: "Website Design",
          description:
            "We create stunning, high-performance websites and web applications that drive real business results using cutting-edge technologies.",
          side: "left",
          mockup: "floating-pills",
          floatingElements: [
            { text: "React", x: 100, y: -60, delay: 0 },
            { text: "Next.js", x: 280, y: -20, delay: 0.1 },
            { text: "Node.js", x: 80, y: 40, delay: 0.2 },
            { text: "TypeScript", x: 260, y: 80, delay: 0.3 },
          ],
        },
        {
          id: "02",
          tag: "CONTENT WRITING",
          title: "Brand Design",
          description:
            "Complete brand identity systems that capture your essence and resonate with your target audience through strategic design.",
          side: "right",
          mockup: "editor",
        },
        {
          id: "03",
          tag: "PRODUCTION",
          title: "Digital Marketing",
          description:
            "Strategic marketing campaigns that drive growth and build lasting relationships with your customers across all digital channels.",
          side: "left",
          mockup: "video",
        },
        {
          id: "04",
          tag: "EDITING",
          title: "EDITING",
          description:
            "Compelling video content that tells your story and engages your audience across all platforms with professional quality.",
          side: "right",
          mockup: "thumbnail",
        },
        {
          id: "05",
          tag: "POST",
          title: "Launch & Scale",
          description:
            "Complete project launch with ongoing optimization and support to ensure continued success and growth.",
          side: "left",
          mockup: "analytics",
          centerElement: { text: "10x", subtitle: "Growth Achieved" },
          floatingIcons: [
            { icon: "instagram", x: -80, y: -60 },
            { icon: "youtube", x: 80, y: -40 },
            { icon: "tiktok", x: -60, y: 80 },
          ],
        },
      ],
    []
  );

  // ===== spine + node geometry (NO SCROLL LISTENER) =====
  const spineRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  nodeRefs.current = useMemo(() => Array(services.length).fill(null), [services.length]);

  const [nodeYs, setNodeYs] = useState<number[]>([]);
  const [spineHeight, setSpineHeight] = useState(0);

  useLayoutEffect(() => {
    let raf = 0;

    const compute = () => {
      const c = spineRef.current;
      if (!c) return;
      const cRect = c.getBoundingClientRect();
      const h = Math.max(1, Math.round(cRect.height));
      const ys = nodeRefs.current.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return r.top - cRect.top + r.height / 2;
      });
      // only update if meaningfully changed (avoid re-renders)
      const changed =
        h !== spineHeight ||
        ys.length !== nodeYs.length ||
        ys.some((v, i) => Math.abs(v - (nodeYs[i] ?? -9999)) > 0.5);

      if (changed) {
        setSpineHeight(h);
        setNodeYs(ys);
      }
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute); // batch into a single paint
    };

    schedule(); // initial after mount
    // recompute on resize / font/layout changes
    const ro = new ResizeObserver(schedule);
    ro.observe(document.documentElement);

    // also recompute once more after images/fonts settle
    const t = setTimeout(schedule, 120);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      ro.disconnect();
    };
  }, [nodeYs, spineHeight]);

  const pathD = useMemo(() => {
    if (nodeYs.length < 2) return "";
    let d = `M 12 ${nodeYs[0].toFixed(2)}`;
    for (let i = 1; i < nodeYs.length; i++) d += ` L 12 ${nodeYs[i].toFixed(2)}`;
    return d;
  }, [nodeYs]);

  // traveller using % of path (stable vs px)
  const travel = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // ===== floating bits (animate WRAPPER, keep blur on inner) =====
  const FloatingPill: React.FC<{ text: string; x: number; y: number; delay?: number; index?: number }> = ({
    text,
    x,
    y,
    delay = 0,
    index = 0,
  }) => {

    return (
      <Reveal delay={delay}>
        <FloatWrapper delay={index ? index * 0.15 : 0}>
          <div
            className="absolute px-4 py-2 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg"
            style={{ left: x, top: y, zIndex: 10, transform: "translateZ(0)", willChange: "transform" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-md pointer-events-none" />
            <span className="relative z-10">{text}</span>
          </div>
        </FloatWrapper>
      </Reveal>
    );
  };

  const EditorMockup = () => (
    <Reveal delay={0.1}>
      <FloatWrapper>
        {/* inner keeps the blur/shadows; wrapper handles transform */}
        <div className="relative w-[26rem]" style={{ transform: "translateZ(0)" }}>
          <div className="bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 w-80 shadow-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="bg-purple-600/20 border border-purple-500/30 rounded p-3 mb-4">
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

          <FloatWrapper delay={0.2} className="absolute -bottom-8 -right-8">
            <div className="bg-gray-800/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 w-64 shadow-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
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
            </div>
          </FloatWrapper>
        </div>
      </FloatWrapper>
    </Reveal>
  );

  const VideoMockup = () => (
    <Reveal delay={0.1}>
      <FloatWrapper>
        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 w-96 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Pr</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Ae</span>
              </div>
            </div>
            <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
              <Play className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-8 bg-gradient-to-r from-orange-500/50 to-blue-500/50 rounded" />
            <div className="h-6 bg-white/10 rounded" />
          </div>
          <div className="h-32 bg-gradient-to-br from-orange-400 to-blue-500 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </FloatWrapper>
    </Reveal>
  );

  const ThumbnailMockup = () => (
    <Reveal delay={0.1}>
      <FloatWrapper>
        <div className="relative w-80 h-48 rounded-lg shadow-2xl">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
              PREMIUM
            </div>
            <div className="text-white font-bold text-lg">Professional Video Content</div>
          </div>
          <FloatWrapper delay={0.15} className="absolute -top-4 -left-4">
            <div className="w-16 h-16 bg-purple-600/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
              <Edit className="w-8 h-8 text-white" />
            </div>
          </FloatWrapper>
        </div>
      </FloatWrapper>
    </Reveal>
  );

  const AnalyticsMockup: React.FC<{
    centerElement: { text: string; subtitle: string };
    floatingIcons: { icon: "instagram" | "youtube" | "tiktok"; x: number; y: number }[];
  }> = ({ centerElement, floatingIcons }) => {
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    return (
      <Reveal delay={0.1}>
        <FloatWrapper>
          <div className="relative w-80 h-80 flex items-center justify-center">
            <motion.div
              className="w-48 h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-full flex flex-col items-center justify-center relative shadow-2xl"
              style={{ rotate, willChange: "transform", transform: "translateZ(0)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full blur-xl" />
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-white mb-2">{centerElement.text}</div>
                <div className="text-thin text-sm">{centerElement.subtitle}</div>
              </div>
            </motion.div>

            {floatingIcons.map((item, i) => (
              <FloatWrapper key={i} delay={i * 0.15}>
                <div
                  className="absolute w-16 h-16 bg-gray-900/90 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
                >
                  {item.icon === "instagram" && (
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">IG</span>
                    </div>
                  )}
                  {item.icon === "youtube" && (
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-current" />
                    </div>
                  )}
                  {item.icon === "tiktok" && (
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">TT</span>
                    </div>
                  )}
                </div>
              </FloatWrapper>
            ))}
          </div>
        </FloatWrapper>
      </Reveal>
    );
  };

  const FloatingPillsContainer = ({ elements }: { elements: FloatingElement[] }) => (
    <Reveal delay={0.1}>
      <FloatWrapper>
        <div className="relative w-96 h-80 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-3xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl pointer-events-none" />
            {elements.map((el: FloatingElement, idx: number) => (
              <FloatingPill key={idx} text={el.text} x={el.x} y={el.y} delay={el.delay} index={idx} />
            ))}
          </div>
        </div>
      </FloatWrapper>
    </Reveal>
  );

  // ====== UI ======
  return (
    <section ref={sectionRef} className="py-24 relative bg-black overflow-visible">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-blue-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-visible">
        {/* Center spine + connectors + traveler */}
        <div ref={spineRef} className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-24 z-10">
          <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 24 ${Math.max(1, spineHeight)}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="conn" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <line x1="12" y1="0" x2="12" y2={spineHeight} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

            {pathD && (
              <>
                <path d={pathD} stroke="url(#conn)" strokeOpacity="0.45" strokeWidth="12" filter="url(#glow)" fill="none" />
                <path d={pathD} stroke="url(#conn)" strokeWidth="3" fill="none" />
                <motion.path
                  d={pathD}
                  stroke="#fff"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  style={{ pathLength: 1, pathOffset: travel }}
                  strokeDasharray="0.08 0.92"
                  filter="url(#glow)"
                  opacity={0.95}
                />
              </>
            )}
          </svg>
        </div>

        <Reveal>
                      <h2 className="text-5xl md:text-6xl font-light mb-20 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent text-center">
              Our Strategy To Get
              <br />
              You Results With Digital
            </h2>
        </Reveal>

        <div className="space-y-32 overflow-visible">
          {services.map((service, i) => (
            <div key={service.id} className="relative overflow-visible">
              {/* Number badge (tracked) */}
              <div ref={(el) => (nodeRefs.current[i] = el)} className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-20">
                <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-md" />
                <span className="block h-6 w-[2px] mx-auto rounded-full bg-gradient-to-b from-blue-500/0 via-blue-400/60 to-blue-400/0 blur-[1px]" />
                <div className="w-16 h-16 bg-gray-800/90 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {service.id}
                </div>
                <span className="block h-6 w-[2px] mx-auto rounded-full bg-gradient-to-b from-purple-400/0 via-purple-400/60 to-purple-400/0 blur-[1px]" />
              </div>

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-visible ${service.side === "right" ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Text */}
                <div className={`${service.side === "right" ? "lg:col-start-2" : ""} overflow-visible`}>
                  <Reveal delay={0.1}>
                    <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg mb-6">{service.tag}</div>
                    <h3 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">{service.title}</h3>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-xl">{service.description}</p>
                  </Reveal>
                </div>

                {/* Visuals */}
                <div className={`flex justify-center overflow-visible ${service.side === "right" ? "lg:col-start-1" : ""}`}>
                  {service.mockup === "floating-pills" && service.floatingElements && (
                    <FloatingPillsContainer elements={service.floatingElements} />
                  )}
                  {service.mockup === "editor" && <EditorMockup />}
                  {service.mockup === "video" && <VideoMockup />}
                  {service.mockup === "thumbnail" && <ThumbnailMockup />}
                  {service.mockup === "analytics" &&
                    service.centerElement &&
                    service.floatingIcons && (
                      <AnalyticsMockup
                        centerElement={service.centerElement}
                        floatingIcons={service.floatingIcons}
                      />
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center mt-20">
            <motion.button
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
