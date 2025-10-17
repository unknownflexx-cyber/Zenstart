import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
    ],
    Resources: [
      { name: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/_zenstart.net_/', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-100 dark:from-black/50 to-transparent border-t border-gray-200 dark:border-white/10">
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.img
                src={`${import.meta.env.BASE_URL}photos/logo.png`}
                alt="Zen Logo"
                className="w-24 h-24 sm:w-30 sm:h-30 lg:w-40 lg:h-40 rounded-lg object-contain"
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We craft exceptional digital experiences that help new brands launch with confidence and established businesses scale to new heights.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@zenstart.agency</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <a
                  href="https://api.whatsapp.com/send/?phone=18077888126&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +1 8077888126
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>North York, ON Toronto</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div>
              <h3 className="text-white font-semibold mb-2">Stay in the loop</h3>
              <p className="text-gray-400">Get the latest insights and updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full sm:max-w-md lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 text-sm sm:text-base"
              />
              <motion.button
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-r-lg text-gray-900 font-medium hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-200 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div> 
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 ZenStart Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </footer>
    </footer>
  );
};

export default Footer;