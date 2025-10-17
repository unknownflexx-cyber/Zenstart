import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // This would typically come from a data source or API
  const serviceData = {
    'web-development': {
      title: 'Web Development',
      subtitle: 'Custom websites and applications built for performance and growth',
      description: 'We create stunning, high-performance websites and web applications that not only look amazing but drive real business results. Our development process combines cutting-edge technology with user-centered design to deliver exceptional digital experiences.',
      features: [
        'Custom React & Next.js Applications',
        'E-commerce & SaaS Platforms',
        'Progressive Web Apps (PWAs)',
        'API Development & Integration',
        'Performance Optimization',
        'Mobile-First Responsive Design',
        'SEO-Optimized Architecture',
        'Content Management Systems',
      ],
      process: [
        {
          step: 'Discovery & Planning',
          description: 'We analyze your requirements, target audience, and business goals to create a comprehensive development strategy.',
        },
        {
          step: 'Design & Prototyping',
          description: 'Our designers create wireframes and interactive prototypes to visualize the user experience.',
        },
        {
          step: 'Development & Testing',
          description: 'Our developers build your application using best practices and conduct thorough testing.',
        },
        {
          step: 'Launch & Optimization',
          description: 'We deploy your application and provide ongoing optimization and support.',
        },
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Vercel', 'Tailwind CSS'],
      testimonial: {
        text: "ZenStart delivered exactly what we needed - a fast, beautiful website that converts visitors into customers. Their technical expertise is outstanding.",
        author: "Sarah Johnson",
        position: "CEO, TechFlow Solutions",
        rating: 5,
      },
    },
    // Add other services here...
  };

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

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
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-light mb-6 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12">
                {service.subtitle}
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                            <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
              What We Deliver
            </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">150+</div>
                      <div className="text-lg">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
                          <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
              Our Process
            </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures your project is delivered on time and exceeds expectations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We leverage the latest technologies to build robust, scalable solutions
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
                >
                  <span className="text-white font-medium text-sm">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="flex justify-center mb-6">
                {[...Array(service.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                "{service.testimonial.text}"
              </blockquote>
              <div>
                <div className="text-white font-semibold text-lg mb-1">
                  {service.testimonial.author}
                </div>
                <div className="text-purple-400">
                  {service.testimonial.position}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full text-gray-900 font-semibold text-lg hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-lg flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;