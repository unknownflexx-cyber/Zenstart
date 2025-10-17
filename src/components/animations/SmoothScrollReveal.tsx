import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SmoothScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export const SmoothScrollReveal: React.FC<SmoothScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  once = true,
  amount = 0.2,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [distance, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 1, 1]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 0.9, 1, 1]), springConfig);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return { y: -y };
      case 'down':
        return { y };
      case 'left':
        return { x: -y };
      case 'right':
        return { x: y };
      default:
        return { y: -y };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        scale,
        ...getTransform(),
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered reveal for multiple items
interface StaggeredRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  className = '',
  staggerDelay = 0.2,
  direction = 'up',
  distance = 50,
  duration = 0.8,
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <SmoothScrollReveal
          key={index}
          delay={index * staggerDelay}
          direction={direction}
          distance={distance}
          duration={duration}
        >
          {child}
        </SmoothScrollReveal>
      ))}
    </div>
  );
};

// Parallax effect component
interface ParallaxRevealProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export const ParallaxReveal: React.FC<ParallaxRevealProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], direction === 'up' ? [100, -100] : [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrollReveal;
