"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Miller",
      role: "Crypto Trader",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris consectetur consequat lorem ipsum dolor sit amet consectetur adipiscing elit consectetur lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 2,
      name: "Lorem Ipsum dolor",
      role: "Lorem ipsum dolor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris consectetur consequat lorem ipsum dolor sit amet consectetur adipiscing elit consectetur lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 3,
      name: "Lorem Ipsum dolor",
      role: "Lorem ipsum dolor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris consectetur consequat lorem ipsum dolor sit amet consectetur adipiscing elit consectetur lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 4,
      name: "Lorem Ipsum dolor",
      role: "Lorem ipsum dolor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris consectetur consequat lorem ipsum dolor sit amet consectetur adipiscing elit consectetur lorem ipsum dolor sit amet consectetur."
    },
    {
      id: 5,
      name: "Lorem ipsum",
      role: "Lorem ipsum",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris consectetur consequat lorem ipsum dolor sit amet consectetur adipiscing elit consectetur lorem ipsum dolor sit amet consectetur."
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentSlide}`}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transform hover:scale-105 ${
                index === 1 ? 'lg:scale-105 lg:shadow-xl lg:shadow-blue-500/20' : ''
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed text-base">
                "{testimonial.text}"
              </p>

              {/* Quote Icon */}
              <div className="flex justify-end mt-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-400">500K+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-400">4.9</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-400">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;