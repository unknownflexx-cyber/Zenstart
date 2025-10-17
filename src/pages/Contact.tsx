import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@zenstart.agency',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us during business hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'San Francisco, CA',
      description: 'Pacific Time Zone',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM PST',
      description: 'Weekend support available',
    },
  ];

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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8 md:mb-9 pt-8 sm:pt-12 md:pt-16 lg:pt-20 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent drop-shadow-lg filter drop-shadow-[0_0_10px_rgba(161,191,255,0.5)]">
              Let's Create Together
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
              Ready to transform your digital presence? Let's discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h2 className="text-3xl font-thin bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
                  Start Your Project
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-200"
                      >
                        <option value="" className="text-white bg-black font-medium py-2">Select project type</option>
                        <option value="web-development" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">Web Development</option>
                        <option value="branding" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">Branding</option>
                        <option value="marketing" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">Digital Marketing</option>
                        <option value="video" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">Video Production</option>
                        <option value="full-service" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">Full Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-200"
                    >
                      <option value="" className="text-white bg-black font-medium py-2">Select budget range</option>
                      <option value="5k-10k" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">$5,000 - $10,000</option>
                      <option value="10k-25k" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">$10,000 - $25,000</option>
                      <option value="25k-50k" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">$25,000 - $50,000</option>
                      <option value="50k+" className="text-white bg-black hover:bg-gradient-to-r hover:from-[#A1BFFF] hover:to-[#A649D2] hover:text-gray-900 font-medium py-2">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-lg text-gray-900 font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h2 className="text-3xl font-thin bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  We're here to help bring your vision to life. Whether you have a specific project in mind 
                  or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-500 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-[#A1BFFF] to-[#A649D2] rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-white font-thin mb-2">{info.title}</h3>
                    <p className="font-medium mb-1 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">{info.details}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-thin bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
                  Prefer a Different Approach?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="flex-1 px-6 py-3 border border-white/20 rounded-lg text-white font-medium flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule a Call</span>
                  </motion.button>
                  <motion.button
                    className="flex-1 px-6 py-3 border border-white/20 rounded-lg text-white font-medium flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Live Chat</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-200">
              Quick answers to common questions about working with ZenStart
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive brand and web project could take 8-12 weeks. We provide detailed timelines during our discovery phase.',
              },
              {
                question: 'Do you work with startups?',
                answer: 'Absolutely! We love working with startups and new businesses. We offer flexible pricing and payment options to help growing companies access professional design and development services.',
              },
              {
                question: 'What is your design process like?',
                answer: 'Our process is collaborative and transparent. We start with discovery, move through design concepts and revisions, then development and testing. You\'ll be involved at every step with regular check-ins and feedback sessions.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We offer various support packages including maintenance, updates, hosting, and ongoing optimization. We believe in long-term partnerships with our clients.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-thin mb-3">{faq.question}</h3>
                  <motion.div
                    className="w-6 h-6 text-white"
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.div>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedFAQ === index ? 'auto' : 0,
                    opacity: expandedFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </motion.div>
    </div>
  );
};

export default Contact;