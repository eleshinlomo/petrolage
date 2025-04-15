
import AboutPage from "./aboutUs/popover";


const Hero = () => {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-gray-900 opacity-95"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-300 bg-blue-900/50 rounded-full mb-4 border border-blue-800">
                  The Future is African
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Petrolage <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Group</span> Why Africa ?
                </h1>
                <p className="text-xl text-blue-100 max-w-lg opacity-90">
                  Africa is the world&apos;s next economic powerhouse with unmatched resources, 
                  demographic advantage, and rapid digital transformation.
                </p>
              </div>
  
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
                  <div className="text-blue-400 text-3xl mb-3">54</div>
                  <h3 className="text-white font-medium mb-2">Countries</h3>
                  <p className="text-blue-100 text-sm opacity-80">
                    United under the AfCFTA, the world&apos;s largest free trade area
                  </p>
                </div>
                
                <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
                  <div className="text-blue-400 text-3xl mb-3">1.4B+</div>
                  <h3 className="text-white font-medium mb-2">People</h3>
                  <p className="text-blue-100 text-sm opacity-80">
                    Youngest population with 60% under 25 years
                  </p>
                </div>
              </div>
  
              <div className="flex flex-wrap gap-4">
                <a href='/#services'>
                <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                  Explore Opportunities
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                </a>
              <AboutPage />
              </div>
            </div>
  
            {/* Right side - Stats cards */}
            <div className="grid grid-cols-2 gap-5 z-10">
              <div className="col-span-2 bg-gray-800/60 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-900/50 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Economic Growth</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">▹</span>
                    <span>24+ nations to grow 5% in 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">▹</span>
                    <span>$1.5T GDP potential from digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">▹</span>
                    <span>3.3M+ green jobs coming</span>
                  </li>
                </ul>
              </div>
  
              <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-white mb-2">30%</div>
                <h3 className="text-blue-200 font-medium">Global Minerals</h3>
                <p className="text-sm text-blue-100 opacity-80 mt-2">Cobalt, platinum, gold and more</p>
              </div>
  
              <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <h3 className="text-blue-200 font-medium">Under 25</h3>
                <p className="text-sm text-blue-100 opacity-80 mt-2">World&apos;s youngest population</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Floating elements */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    );
  };
  
  export default Hero;