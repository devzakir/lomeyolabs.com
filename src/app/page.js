'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoCloud from '@/components/LogoCloud'
import ProductSection from '@/components/ProductSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CompanyStats from '@/components/CompanyStats'

export default function Home() {
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-accent-yellow/10" />
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-200 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
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
              LomeyoLabs is your go-to hub for PHP Scripts, Figma/HTML Templates, Self-hosted Software, and everything in between!
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="rounded-xl shadow-lg shadow-primary-100">
                <a
                  href="/products"
                  className="w-full flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 md:text-lg md:px-10"
                >
                  Explore Our Products
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rest of the sections with staggered animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <LogoCloud />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ProductSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <CompanyStats />
      </motion.div>
    </>
  )
}

