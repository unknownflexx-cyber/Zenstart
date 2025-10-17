import { useScroll, useTransform, useSpring } from 'framer-motion';
import { RefObject } from 'react';

export const useSmoothScroll = (ref: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 1, 1]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 0.9, 1, 1]), springConfig);

  return { y, opacity, scale, scrollYProgress };
};

export const useParallax = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 1, 1]);

  return { y, opacity, scrollYProgress };
};

export const useFadeInUp = (ref: RefObject<HTMLElement>, delay: number = 0) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [50, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 1, 1]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 0.98, 1, 1]), springConfig);

  return { y, opacity, scale, scrollYProgress };
};
