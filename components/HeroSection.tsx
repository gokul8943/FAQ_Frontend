"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-slate-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 left-32 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-32 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-60 right-24 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-1200"></div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M100 100 L300 100 L300 200 L500 200" stroke="#00bcd4" strokeWidth="2"/>
          <path d="M200 300 L400 300 L400 150 L600 150" stroke="#2196f3" strokeWidth="1"/>
          <path d="M50 400 L250 400 L250 500 L450 500" stroke="#00bcd4" strokeWidth="2"/>
          <path d="M700 200 L900 200 L900 350 L1100 350" stroke="#2196f3" strokeWidth="1"/>
          <path d="M800 450 L1000 450 L1000 300 L1150 300" stroke="#00bcd4" strokeWidth="2"/>
          <circle cx="300" cy="100" r="4" fill="#2196f3"/>
          <circle cx="400" cy="300" r="3" fill="#00bcd4"/>
          <circle cx="250" cy="400" r="4" fill="#2196f3"/>
          <circle cx="900" cy="200" r="3" fill="#00bcd4"/>
          <rect x="295" y="195" width="10" height="10" fill="#2196f3" transform="rotate(45 300 200)"/>
          <rect x="395" y="145" width="8" height="8" fill="#00bcd4" transform="rotate(45 400 150)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Ultrices ut etiam vulputate ante congue
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  jaktehn na
                </span>
                <span className="text-blue-400 ml-2">
                  Lorem Ipsum
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Learn More
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-blue-400/25"
              >
                <Play size={20} fill="currentColor" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Right Content - Bitcoin Visualization */}
          <div className="relative flex items-center justify-center">
            {/* Outer Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute w-80 h-80 border border-blue-400/20 rounded-full animate-reverse-spin"></div>
              <div className="absolute w-64 h-64 border border-cyan-300/25 rounded-full animate-spin-slow"></div>
            </div>

            {/* Bitcoin Icon */}
            <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <div className="w-40 h-40 bg-slate-800 rounded-full flex items-center justify-center border-4 border-blue-400">
                <svg className="w-20 h-20 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z"/>
                  <path d="M17.45 11.35c.235-1.576-.965-2.424-2.606-2.988l.533-2.136-1.302-.325-.518 2.08c-.342-.085-.693-.166-1.043-.245l.522-2.092-1.302-.324-.533 2.135c-.284-.065-.563-.128-.833-.196l.002-.007-1.796-.448-.346 1.388s.965.221.945.235c.527.131.622.479.606.755l-.608 2.44c.036.009.084.022.135.042l-.137-.034-.852 3.418c-.065.16-.229.4-.599.31.013.019-.945-.236-.945-.236L8.85 16.27l1.697.424c.315.079.623.162.926.239l-.538 2.16 1.302.326.533-2.139c.355.096.698.185 1.034.269l-.532 2.129 1.302.325.538-2.156c2.218.42 3.888.251 4.59-1.756.566-1.611-.028-2.541-1.194-3.151.849-.195 1.488-.753 1.659-1.902z"/>
                  <path d="M15.172 14.137c-.402 1.614-3.124.742-4.008.523l.715-2.868c.884.22 3.717.656 3.293 2.345zm.402-4.25c-.367 1.469-2.634.723-3.367.54l.649-2.601c.733.183 3.101.524 2.718 2.061z" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-float">
                $42,580.21
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-float-delay">
                +2.45%
              </div>
              <div className="absolute top-1/2 -right-12 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium shadow-lg animate-pulse">
                ↗ BTC
              </div>
            </div>

            {/* Data Points */}
            <div className="absolute top-20 left-20 text-cyan-400 text-sm font-mono animate-fade-in-out">
              01010101
            </div>
            <div className="absolute bottom-32 right-16 text-blue-400 text-sm font-mono animate-fade-in-out delay-1000">
              11001010
            </div>
            <div className="absolute top-32 right-32 text-cyan-300 text-sm font-mono animate-fade-in-out delay-500">
              10110011
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1s;
        }
        .animate-fade-in-out {
          animation: fade-in-out 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;