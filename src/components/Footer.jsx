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
    // Add other social icons here...
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        {/* Codecanyon Profile Highlight */}
        <div className="mb-16 flex justify-center">
          <Link 
            href="https://codecanyon.net/user/lomeyolabs" 
            className="group relative overflow-hidden rounded-xl bg-gray-800 px-8 py-4 transition-transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <TrophyIcon className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-white font-semibold">Level 6 Author on CodeCanyon</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>4.5</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < 4 ? 'text-yellow-500' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span>(110+ reviews)</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3">
          {navigation.main.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:-translate-y-1 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} LomeyoLabs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}