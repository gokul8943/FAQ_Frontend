import React from 'react';

const Feature = () => {
  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Most Trusted Cryptocurrency Platform
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Nisi faucibus ut mauris secutis tristique dolor ullamco. 
            Euismod orci arcu aliquot facere placeat. Nam velit
            elementum tempus faucibus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=500&fit=crop&crop=center" 
                  alt="Mobile cryptocurrency trading app interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=500&fit=crop&crop=center" 
                  alt="Cryptocurrency trading charts and analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=500&fit=crop&crop=center" 
                  alt="Mobile cryptocurrency portfolio management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative version with placeholder cards */}
        <div className="hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="aspect-[4/5] relative flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">Mobile Trading</h3>
                      <p className="text-gray-400 text-sm">
                        Advanced mobile trading platform with real-time charts and analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;