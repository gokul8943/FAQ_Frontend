"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

const CryptoFAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What is your favorite template from BRIX Templates?",
      answer: "Vivat tempor eu molestie at. Prits placerat egestas lectus magna sit cursus ut amet dictum sit amet risus lorem ipsum lorem enim ipsum lorem ipsum lorem turpis at lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem."
    },
    {
      id: 1,
      question: "What is your favorite template from BRIX Templates?",
      answer: "Our platform offers comprehensive cryptocurrency trading tools with advanced security features, real-time market data, and institutional-grade infrastructure to ensure safe and efficient trading experiences."
    },
    {
      id: 2,
      question: "What is your favorite template from BRIX Templates?",
      answer: "We support over 100+ cryptocurrencies including Bitcoin, Ethereum, and all major altcoins. Our platform continuously adds new tokens based on market demand and security audits."
    },
    {
      id: 3,
      question: "What is your favorite template from BRIX Templates?",
      answer: "Yes, we offer 24/7 customer support through multiple channels including live chat, email, and phone support. Our dedicated team is always ready to assist you with any questions or issues."
    }
  ];

  const toggleQuestion = (questionId:any) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 lg:p-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Most Trusted Cryptocurrency Platform
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Nec faucibus ut mauris eaculis tristique dolor ullamco. 
              Euismod orci arcu aliquot facere placeat. Nam velit
              elementum tempus et sed porta.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-slate-700/30 backdrop-blur-sm rounded-2xl border border-slate-600/30 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/20 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {openQuestion === faq.id ? (
                        <Minus className="w-5 h-5 text-blue-400 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                      )}
                    </div>
                    <h3 className="text-white font-medium text-lg lg:text-xl pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openQuestion === faq.id ? 'rotate-180 text-blue-400' : 'group-hover:text-blue-400'
                    }`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openQuestion === faq.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="pl-12 pr-8">
                      <p className="text-gray-300 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoFAQSection;