'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { StarIcon, TrophyIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const navigation = {
  products: [
    { name: 'All Products', href: '/products' },
    { name: 'Templates', href: '/templates' },
    { name: 'Scripts', href: '/scripts' },
    { name: 'UI Kits', href: '/ui-kits' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' },
    { name: 'Changelog', href: '/changelog' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
  ]
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="relative overflow-hidden">
      {/* Brand-colored Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-dark" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 via-transparent to-primary-800/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12">
        {/* Achievement Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Link 
            href="https://codecanyon.net/user/lomeyolabs" 
            className="group block max-w-2xl mx-auto relative overflow-hidden rounded-2xl bg-dark-light/30 backdrop-blur-sm border border-primary-400/20 hover:border-primary-400/40 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-8">
              <div className="flex items-center gap-6">
                <div className="relative shrink-0">
                  <TrophyIcon className="h-12 w-12 text-primary-300" />
                  <div className="absolute inset-0 animate-ping-slow opacity-50">
                    <TrophyIcon className="h-12 w-12 text-primary-300" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white mb-2">Level 6 Author on CodeCanyon</p>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-lg">4.5</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`h-5 w-5 ${i < 4 ? 'text-primary-300' : 'text-white/30'}`} />
                      ))}
                    </div>
                    <span>(110+ reviews)</span>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-6 w-6 text-primary-300/50 group-hover:text-primary-300 transition-colors ml-auto" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Navigation Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          {Object.entries(navigation).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-6 capitalize">{category}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-white/70 hover:text-primary-300 transition-colors inline-flex items-center group"
                    >
                      {item.name}
                      <ArrowUpRightIcon className="h-4 w-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary-400/20 pt-12"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-white/80">
              <span className="font-semibold text-white">LomeyoLabs</span> is proudly crafted by{' '}
              <span className="text-primary-300 font-semibold">Lomeyo, LLC</span>
            </p>
            <p className="text-white/70">
              We&apos;re passionate about building tools that empower businesses, including{' '}
              <a href="https://templatecookie.com" className="text-primary-300 hover:text-primary-200 transition-colors font-medium">
                Templatecookie
              </a>{' '}
              for templates and{' '}
              <a href="https://jugglehire.com" className="text-primary-300 hover:text-primary-200 transition-colors font-medium">
                JuggleHire
              </a>{' '}
              for recruitment. Welcome to the Lomeyo community!
            </p>
            <p className="text-sm text-white/60">
              &copy; {currentYear} Lomeyo, LLC. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}