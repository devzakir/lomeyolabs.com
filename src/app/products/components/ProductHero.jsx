'use client'

import { motion } from 'framer-motion'

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-24">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-heading font-bold tracking-tight text-dark sm:text-5xl">
            Digital Products for Modern Businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-dark/80">
            From PHP scripts to UI templates, find the perfect solution for your next project. 
            All our products come with lifetime updates and dedicated support.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 