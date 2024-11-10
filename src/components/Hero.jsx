'use client'

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { FolderOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Launch Your Business{' '}
              <span className="text-blue-600">Faster</span> with Ready-Made Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Premium software solutions and templates crafted for small businesses. 
              Get your online presence up and running in minutes, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-102"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Browse Products
                <ArrowRightIcon className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} width={20} height={20} />
              </button>
              
              <button className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-all duration-300">
                View Demo
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FolderOpenIcon className="h-5 w-5" />
                <span>Ready to Deploy</span>
              </div>
              <div className="flex items-center gap-2">
                <CodeBracketIcon className="h-5 w-5" />
                <span>Clean Code</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-xl bg-white shadow-xl overflow-hidden">
              <img 
                src="/api/placeholder/800/450" 
                alt="Product Preview" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card decoration */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-48">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FolderOpenIcon className="text-blue-600" width={20} height={20} />
                </div>
                <div>
                  <p className="font-medium">Quick Setup</p>
                  <p className="text-sm text-gray-600">Ready in 5 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;