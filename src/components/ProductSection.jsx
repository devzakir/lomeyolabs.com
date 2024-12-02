'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProductCard from './products/ProductCard'
import { MagnifyingGlassIcon, FolderIcon } from '@heroicons/react/24/solid'

const products = [
  {
    id: 1,
    name: 'Taskify - Project Management System',
    description: 'Complete project management solution with team collaboration features',
    image: 'https://templatecookie.com/storage/image/1710224864_65eff5e06cdb1.png',
    price: '$49',
    features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Project Reports'],
    category: 'PHP Scripts'
  },
  {
    id: 2,
    name: 'SchoolSync - School Management',
    description: 'Comprehensive school management system with student portal',
    image: 'https://templatecookie.com/storage/image/1710224877_65eff5eddffea.png',
    price: '$59',
    features: ['Student Management', 'Attendance System', 'Grade Management', 'Online Classes'],
    category: 'PHP Scripts'
  },
  {
    id: 3,
    name: 'InvoicePro - Billing System',
    description: 'Professional invoicing and billing management system',
    image: 'https://templatecookie.com/storage/image/1709116010_65df0a6a0d900.png',
    price: '$39',
    features: ['Invoice Generation', 'Payment Tracking', 'Client Management', 'Financial Reports'],
    category: 'PHP Scripts'
  },
  {
    id: 5,
    name: 'Dashify Admin Template',
    description: 'Modern admin dashboard UI kit with dark mode',
    image: 'https://templatecookie.com/storage/image/1709115481_65df08597076f.jpg',
    price: '$29',
    features: ['100+ Components', 'Dark Mode', 'Responsive Design', 'Documentation'],
    category: 'Figma Templates'
  },
  {
    id: 6,
    name: 'EduLearn LMS Template',
    description: 'Complete learning management system UI kit',
    image: 'https://templatecookie.com/storage/image/1710224864_65eff5e06cdb1.png',
    price: '$35',
    features: ['Course Pages', 'Student Dashboard', 'Instructor Portal', 'Assessment UI'],
    category: 'Figma Templates'
  },
  {
    id: 7,
    name: 'SaaS Landing UI Kit',
    description: 'Modern SaaS product landing page template',
    image: 'https://templatecookie.com/storage/image/1710224877_65eff5eddffea.png',
    price: '$25',
    features: ['Landing Pages', 'Pricing Tables', 'Feature Sections', 'Blog Templates'],
    category: 'Figma Templates'
  },
]

export default function ProductSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/40 via-primary-100/30 to-blue-50/40 py-24 sm:py-32 z-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-primary-100/5 to-primary-200/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold tracking-tight text-dark sm:text-4xl">
            Awesome Line of Problem-Solving Products
          </h2>
          <p className="mt-4 text-lg leading-8 text-dark/80">
            Lomeyo Labs saves you time and resources to build and scale fast!
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variants={item} />
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center space-x-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center"
          >
            <Link className="flex justify-center items-center  px-6 py-3 text-sm font-medium rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors" href="/products">
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              <span className="ml-2">Browse All Products</span>
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center"
          >
            <Link className="flex justify-center items-center  px-6 py-3 text-sm font-medium rounded-xl border border-gray-200 bg-dark text-white hover:bg-gray-700 transition-colors" href="/products/figma-templates">
              <FolderIcon className="h-5 w-5 text-white" />
              <span className="ml-2">UI Bundle for $59</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 