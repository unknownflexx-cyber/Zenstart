import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'video', name: 'Video' },
  ];

  const projects = [
    {
      id: 'tech-startup',
      title: 'TechFlow Platform',
      category: 'Web Development',
      type: 'web',
      description: 'A comprehensive SaaS platform for project management with real-time collaboration features.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      year: '2024',
      client: 'TechFlow Inc.',
      results: ['300% increase in user engagement', '150% faster load times', '95% user satisfaction rate'],
    },
    {
      id: 'fashion-brand',
      title: 'Luxe Fashion Brand',
      category: 'Branding & E-commerce',
      type: 'branding',
      description: 'Complete brand redesign and e-commerce platform for a luxury fashion startup.',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Brand Identity', 'E-commerce', 'Photography', 'Shopify'],
      year: '2024',
      client: 'Luxe Fashion Co.',
      results: ['400% increase in online sales', '250% growth in social following', '85% brand recognition improvement'],
    },
    {
      id: 'health-app',
      title: 'WellnessPro App',
      category: 'Mobile App & Branding',
      type: 'web',
      description: 'Mobile health tracking application with personalized wellness recommendations.',
      image: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'AI/ML', 'Health Tech', 'UX Design'],
      year: '2023',
      client: 'WellnessPro LLC',
      results: ['100K+ active users', '4.8/5 app store rating', '70% daily user retention'],
    },
    {
      id: 'restaurant-chain',
      title: 'Urban Eats Marketing',
      category: 'Digital Marketing Campaign',
      type: 'marketing',
      description: 'Multi-channel marketing campaign for a growing restaurant chain.',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'SEO', 'PPC', 'Content Marketing'],
      year: '2023',
      client: 'Urban Eats',
      results: ['200% increase in foot traffic', '180% boost in online orders', '90% improvement in brand awareness'],
    },
    {
      id: 'startup-video',
      title: 'InnovateTech Explainer',
      category: 'Video Production',
      type: 'video',
      description: 'Animated explainer video series for a B2B technology startup.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['2D Animation', 'Explainer Video', 'Motion Graphics', 'Storytelling'],
      year: '2023',
      client: 'InnovateTech Solutions',
      results: ['500K+ video views', '65% increase in demo requests', '40% improvement in conversion rate'],
    },
    {
      id: 'fintech-platform',
      title: 'FinanceFlow Dashboard',
      category: 'Web Application',
      type: 'web',
      description: 'Advanced financial dashboard with real-time analytics and reporting tools.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Real-time Data', 'FinTech'],
      year: '2024',
      client: 'FinanceFlow Corp',
      results: ['250% faster data processing', '90% reduction in report generation time', '99.9% uptime achieved'],
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        
        <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-9 pt-20 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent drop-shadow-lg filter drop-shadow-[0_0_10px_rgba(161,191,255,0.5)]">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto pb-7">
              Discover our latest projects and see how we've helped brands transform their digital presence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-gray-900 shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                layout
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 dark:group-hover:from-white group-hover:to-gray-700 dark:group-hover:to-gray-300 transition-all duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-400">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Case Study Link */}
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/photos/bg.png)' }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Transparent Glassmorphism Effect */}
            <div className="absolute inset-0 bg-white/3 backdrop-blur-lg rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 rounded-3xl" />
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent leading-tight">
                Ready to Create Your
                <br />
                Success Story?
              </h2>
              
              <p className="text-xl md:text-2xl font-light text-thin mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your project and join our portfolio of successful brands.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Link to="/contact">
                  <motion.button
                    className="group px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full text-gray-900 font-semibold text-lg flex items-center space-x-2 hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </motion.div>
    </div>
  );
};

export default Portfolio;