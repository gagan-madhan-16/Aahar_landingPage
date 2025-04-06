import React from 'react';
import { Download, Utensils, Share2, Heart, Timer } from 'lucide-react';

function App() {
  const apkDownloadUrl = "https://github.com/aarav0180/Aahar-app/releases/download/v1.0.0/app-release.apk";
  const githubRepoUrl = "https://github.com/aarav0180/Aahar-app";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488375634201-36100022eb19?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Bubbles Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-300 opacity-20"
              style={{
                width: `${100 + Math.random() * 100}px`,
                height: `${100 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(30px)"
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="z-10 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Utensils className="w-12 h-12 text-amber-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Aahar
          </h1>
          <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">
            Share Food, Share Hope
          </h3>

          <br /><br />
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our mission to reduce food waste and feed those in need. Connect excess food with people who need it most.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-4">
              <Share2 className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Share Excess Food</h3>
              <p className="text-gray-600 text-sm">Easily share information about surplus food</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Timer className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Quick Collection</h3>
              <p className="text-gray-600 text-sm">Fast response from nearby NGOs</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Heart className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Make an Impact</h3>
              <p className="text-gray-600 text-sm">Help feed communities in need</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={apkDownloadUrl}
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-full
                       font-semibold text-lg shadow-lg hover:bg-amber-600 transform hover:scale-105
                       transition-all duration-200 ease-in-out"
            >
              <Download className="w-6 h-6 mr-2" />
              Download Our App
            </a>

            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-gray-400 text-gray-800 rounded-full
                         font-semibold text-lg shadow-md hover:bg-gray-100 transform hover:scale-105
                         transition-all duration-200 ease-in-out"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.996.108-.775.42-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.137 3 .403 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12Z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Available for both Android and IOS devices
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center w-full text-gray-500">
          {/* <p>© 2025 Aahar. Making a difference, one meal at a time.</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
