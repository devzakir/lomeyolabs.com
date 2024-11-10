'use client'

import Link from 'next/link'
import { StarIcon, TrophyIcon } from '@heroicons/react/24/solid'

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-16 flex justify-center">
          <Link 
            href="https://codecanyon.net/user/lomeyolabs" 
            className="group relative overflow-hidden rounded-xl bg-gray-800/80 backdrop-blur-sm px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-6">
              <TrophyIcon className="h-10 w-10 text-yellow-500" />
              <div>
                <p className="text-lg font-semibold text-white mb-1">Level 6 Author on CodeCanyon</p>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-lg">4.5</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-5 w-5 ${i < 4 ? 'text-yellow-500' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span>(110+ reviews)</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {navigation.main.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-16 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-800/80 pt-8">
          <p className="text-center text-sm text-gray-400 mb-6">
            &copy; {new Date().getFullYear()} LomeyoLabs. All rights reserved.
          </p>
          
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-base mb-3 text-gray-400">
              <span className="font-semibold text-white">LomeyoLabs</span> is proudly crafted by{' '}
              <span className="text-orange-500 font-semibold">Lomeyo, LLC</span>
            </p>
            <p className="text-base text-gray-400">
              We're passionate about building tools that empower businesses, including{' '}
              <a href="https://templatecookie.com" className="text-orange-500 hover:text-orange-400 transition-colors">
                Templatecookie
              </a>{' '}
              for templates and{' '}
              <a href="https://jugglehire.com" className="text-orange-500 hover:text-orange-400 transition-colors">
                JuggleHire
              </a>{' '}
              for recruitment. Welcome to the Lomeyo community!
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}