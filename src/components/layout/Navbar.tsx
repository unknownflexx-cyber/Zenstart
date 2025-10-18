import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const location = useLocation();

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-20 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
            <motion.img
              src={`${import.meta.env.BASE_URL}photos/logo.png`}
              alt="Zen Logo"
              className="w-24 h-24 sm:w-30 sm:h-30 lg:w-40 lg:h-40 rounded-lg object-contain"
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                    layoutId="activeNav"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <motion.button
            onClick={() => (window.location.href = `${import.meta.env.BASE_URL}#book`)}
            className="hidden lg:inline-flex px-6 py-2 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-gray-900 font-medium hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-200 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          {/* Mobile menu button + CTA */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.button
              onClick={() => {
                setIsOpen(false);
                window.location.href = `${import.meta.env.BASE_URL}#book`;
              }}
              className="px-3 py-1.5 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-gray-900 text-sm font-medium rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-white bg-white/10 rounded-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 rounded-lg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button onClick={() => { setIsOpen(false); window.location.href = `${import.meta.env.BASE_URL}#book`; }} className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-gray-900 font-medium rounded-lg">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;