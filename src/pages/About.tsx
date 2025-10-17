import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Lightbulb, 
  Heart, 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  Globe, 
  BarChart,
  Linkedin,
  Twitter,
  TrendingUp,
  Users,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import './laura.css';

// Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 mr-3 text-white animate-spin-slow" />
            <span className="text-thin text-lg tracking-widest uppercase">Digital Excellence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-none">
            <span className="bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent animate-gradient-x">
              About Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent animate-gradient-x">
              Agency
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-thin max-w-3xl mx-auto mb-12 leading-relaxed">
            We craft digital experiences that transcend expectations, blending innovation with artistry to create solutions that drive real business growth.
          </p>
          
          <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#A1BFFF]/25">
            <span className="mr-2">Discover Our Journey</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#A649D2] via-white to-[#A1BFFF] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

// Story Component
const Story = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-xl text-thin max-w-3xl mx-auto leading-relaxed">
            Born from a passion for digital innovation, we've been transforming businesses through cutting-edge technology and creative excellence since our inception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">The Beginning</h3>
            <p className="text-lg text-thin leading-relaxed">
              What started as a small team of passionate developers and designers has evolved into a full-service digital agency that partners with forward-thinking companies to create exceptional digital experiences.
            </p>
            <p className="text-lg text-thin leading-relaxed">
              Our journey began with a simple belief: that great design and powerful technology should work hand in hand to solve real business challenges and create meaningful connections between brands and their audiences.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#A1BFFF]/10 to-[#A649D2]/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-2">150+</div>
                  <div className="text-white/70">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-2">98%</div>
                  <div className="text-white/70">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-white/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-white/70">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#A1BFFF] to-[#A649D2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
            <p className="text-white/70 leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#A1BFFF] to-[#A649D2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
            <p className="text-white/70 leading-relaxed">
              To be the leading digital agency that transforms how businesses connect with their customers through innovative technology and exceptional design.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#A1BFFF] to-[#A649D2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Values</h4>
            <p className="text-white/70 leading-relaxed">
              Innovation, integrity, and collaboration guide everything we do. We believe in building lasting relationships and delivering excellence in every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and scalable architectures.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful aesthetics with intuitive functionality.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed optimization and performance tuning to ensure lightning-fast user experiences.',
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies that align with your business objectives.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Data-driven insights and analytics implementation to measure and optimize performance.',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of digital services designed to elevate your brand and accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A1BFFF]/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-[#A1BFFF] to-[#A649D2] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-[#A1BFFF] group-hover:via-white group-hover:to-[#A649D2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A1BFFF]/20 via-white/20 to-[#A649D2]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Component
const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const teamMembers = [
    {
      name: 'Yomi Denzel',
      role: 'E-Commerce 2.0',
      image: '/photos/team/team1.png',
      bio: 'Leading expert in modern e-commerce strategies and digital transformation.',
    },
    {
      name: 'Timothée Moiroux',
      role: 'Investissement Immo',
      image: '/photos/team/team2.png',
      bio: 'It was in high school then a student Timothée understood the false freedom offered by studies and a full-time professional career in parallel with his medical studies.',
    },
    {
      name: 'David Sequiera',
      role: 'Closing',
      image: '/photos/team/team3.png',
      bio: 'Specialist in sales closing techniques and conversion optimization.',
    },
    {
      name: 'Manuel Ravier',
      role: 'Investissement immobilier',
      image: '/photos/team/team4.png',
      bio: 'Real estate investment strategist with proven track record.',
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A1BFFF]/5 via-transparent to-[#A649D2]/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#A1BFFF]/3 to-[#A649D2]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#A649D2]/3 to-[#A1BFFF]/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
              Meet Our Team
            </span>
            <br />
            
          </h2>
        </div>

        {/* Team Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Team Cards */}
          <div className="flex justify-center items-center gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-10"
              >
                <div className={`relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 ${
                  'w-64 h-80 group-hover:w-80 group-hover:h-96'
                }`}>
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 rounded-2xl [background:radial-gradient(70%_45%_at_50%_0%,rgba(161,191,255,0.15)_0%,rgba(166,73,210,0.1)_35%,transparent_70%)]" />
                  <div className="absolute inset-y-0 left-0 w-8 rounded-l-2xl bg-gradient-to-r from-black/20 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-8 rounded-r-2xl bg-gradient-to-l from-black/20 to-transparent" />
                  
                  {/* Full Card Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Color Gradient Overlay Under Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Glass Blurry Effect on Hover */}
                  <div className="absolute inset-0 backdrop-blur-md bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Name and Role - Bottom by default, moves to top on hover */}
                    <div className="absolute bottom-6 left-6 group-hover:relative group-hover:bottom-auto group-hover:left-auto group-hover:text-left group-hover:mb-4 transition-all duration-700 ease-out">
                      <h3 className="text-xl font-thin mb-2 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
                         {member.name}
                       </h3>
                       <p className="text-sm font-thin text-white/70">
                         {member.role}
                       </p>
                     </div>
                     
                     {/* Description Text - Below name and role */}
                    <div className="flex-1 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-sm font-thin leading-relaxed text-left max-w-xs">
                        {member.bio}
                      </p>
                    </div>
                    
                    {/* Expand Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicator */}
          
        </div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: TrendingUp,
      value: 300,
      suffix: '%',
      label: 'Average ROI Increase',
      description: 'Our clients see significant returns on their digital investments',
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Trusted by startups to Fortune 500 companies',
    },
    {
      icon: Award,
      value: 25,
      suffix: '+',
      label: 'Industry Awards',
      description: 'Recognition for our innovative work and client success',
    },
    {
      icon: Clock,
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'Reliable, scalable solutions you can count on',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.value) {
            currentValue = stat.value;
            clearInterval(timer);
          }
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#A1BFFF]/5 to-[#A649D2]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#A649D2]/5 to-[#A1BFFF]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
              Proven Results
            </span>
            </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment to excellence and the success of our partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
                key={index}
              className="group text-center relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#A1BFFF] to-[#A649D2] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-black" />
              </div>

              <div className="text-5xl font-light mb-2">
                <span className="bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
                  {Math.round(animatedValues[index])}{stat.suffix}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-[#A1BFFF] group-hover:via-white group-hover:to-[#A649D2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {stat.label}
              </h3>

              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {stat.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A1BFFF]/10 via-white/10 to-[#A649D2]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
            ))}
          </div>
        </div>
      </section>
  );
};



// Main App Component
function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Story />
      <Services />
      {/* <Team /> */}
      <Stats />
      
    </div>
  );
}

export default App;