import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 'tech-startup',
      title: 'TechFlow Platform',
      category: 'Web Development',
      description: 'A comprehensive SaaS platform for project management with real-time collaboration features.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      results: {
        metric1: '300% increase in user engagement',
        metric2: '150% faster load times',
        metric3: '95% user satisfaction rate',
      },
    },
    {
      id: 'fashion-brand',
      title: 'Luxe Fashion Brand',
      category: 'Branding & Web',
      description: 'Complete brand redesign and e-commerce platform for a luxury fashion startup.',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Brand Identity', 'E-commerce', 'Photography', 'Marketing'],
      results: {
        metric1: '400% increase in online sales',
        metric2: '250% growth in social following',
        metric3: '85% brand recognition improvement',
      },
    },
    {
      id: 'health-app',
      title: 'WellnessPro App',
      category: 'Mobile & Branding',
      description: 'Mobile health tracking application with personalized wellness recommendations.',
      image: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'AI/ML', 'Health Tech', 'UX Design'],
      results: {
        metric1: '100K+ active users',
        metric2: '4.8/5 app store rating',
        metric3: '70% daily user retention',
      },
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      {/* Neon Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 dark:from-blue-900/10 via-transparent to-purple-200/20 dark:to-purple-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/15 dark:from-blue-900/25 via-transparent to-purple-300/15 dark:to-purple-900/25 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped brands transform their digital presence and achieve remarkable results
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Project Image */}
              <div className="flex-1 relative group">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.values(project.results).map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center p-4 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>

                {/* View Case Study Link */}
                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/portfolio">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full text-gray-900 font-semibold text-lg hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;