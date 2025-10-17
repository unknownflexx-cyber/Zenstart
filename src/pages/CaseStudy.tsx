import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Target, TrendingUp, Award } from 'lucide-react';

const CaseStudy = () => {
  const { caseId } = useParams();

  // This would typically come from a data source or API
  const caseStudyData = {
    'tech-startup': {
      title: 'TechFlow Platform',
      subtitle: 'Revolutionizing Project Management with Real-Time Collaboration',
      client: 'TechFlow Inc.',
      industry: 'SaaS Technology',
      duration: '4 months',
      year: '2024',
      heroImage: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200',
      challenge: 'TechFlow needed a comprehensive project management platform that could handle complex workflows while maintaining simplicity for end users. The existing solutions in the market were either too complex or lacked the real-time collaboration features their target audience demanded.',
      solution: 'We designed and developed a modern SaaS platform with intuitive user experience, real-time collaboration features, and advanced project tracking capabilities. The platform was built using React, Node.js, and WebSocket technology for seamless real-time updates.',
      results: [
        { metric: '300%', description: 'Increase in user engagement' },
        { metric: '150%', description: 'Faster load times' },
        { metric: '95%', description: 'User satisfaction rate' },
        { metric: '50K+', description: 'Active users in first 6 months' },
      ],
      services: ['Web Development', 'UI/UX Design', 'Brand Identity', 'Digital Strategy'],
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'AWS', 'Docker'],
      testimonial: {
        text: "ZenStart transformed our vision into reality. The platform they built exceeded our expectations and has become the foundation of our business success.",
        author: "John Smith",
        position: "CEO, TechFlow Inc.",
      },
      images: [
        'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    // Add other case studies here...
  };

  const caseStudy = caseStudyData[caseId as keyof typeof caseStudyData];

  if (!caseStudy) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-400">The case study you're looking for doesn't exist.</p>
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
        <div className="absolute inset-0">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05010E] via-[#05010E]/80 to-[#05010E]/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                Case Study
              </span>
              <span className="text-gray-400">{caseStudy.year}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light mb-6 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              {caseStudy.subtitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Client</div>
                <div className="text-white font-medium">{caseStudy.client}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Industry</div>
                <div className="text-white font-medium">{caseStudy.industry}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Duration</div>
                <div className="text-white font-medium">{caseStudy.duration}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Year</div>
                <div className="text-white font-medium">{caseStudy.year}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">The Challenge</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">Our Solution</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">Results</h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The impact of our work speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                  {result.metric}
                </div>
                <div className="text-gray-400 font-medium">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3 className="text-2xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">Services Provided</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.services.map((service, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-2xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">Technologies Used</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {caseStudy.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-400">
              A closer look at the final product
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {caseStudy.images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </motion.div>
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
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
              "{caseStudy.testimonial.text}"
            </blockquote>
            <div>
              <div className="text-white font-semibold text-lg mb-1">
                {caseStudy.testimonial.author}
              </div>
              <div className="text-purple-400">
                {caseStudy.testimonial.position}
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
            transition={{ duration: 0.8, delay: 2 }}
          >
            <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
              Ready for Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together and achieve results like these.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full text-gray-900 font-semibold text-lg hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
      </motion.div>
    </div>
  );
};

export default CaseStudy;