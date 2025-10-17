import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import VideoShowcase from '../components/sections/VideoShowcase';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <VideoShowcase />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;