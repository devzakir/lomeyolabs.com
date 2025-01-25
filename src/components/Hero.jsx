'use client'

import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const BackgroundAnimation = dynamic(() => import('./3d/BackgroundAnimation'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
})

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Innovative Templates and Software Products for You!
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="mt-6 text-4xl tracking-tight font-bold text-neutral-dark sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block font-heading">Digital Solutions to Help</span>
            <span className="block font-heading bg-gradient-to-r from-primary-600 to-accent-yellow bg-clip-text text-transparent">
              You Grow and Scale Faster!
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="mt-6 max-w-md mx-auto text-lg text-neutral-dark/80 sm:text-xl md:mt-8 md:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            LomeyoLabs crafts amazing self-hosted business applications and figma templates for you!
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="rounded-xl shadow-lg shadow-primary-100">
              <Link
              href="/products"
                className="w-full flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 md:text-lg md:px-10"
              >
                Explore Our Products
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
