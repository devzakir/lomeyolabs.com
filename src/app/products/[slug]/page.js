'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
import { 
  StarIcon, 
  CheckIcon, 
  CloudArrowDownIcon, 
  CodeBracketIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

// Product data
const products = [
  {
    id: 1,
    name: 'Taskify - Project Management System',
    description: 'Complete project management solution with team collaboration features',
    image: 'https://templatecookie.com/storage/image/1710224864_65eff5e06cdb1.png',
    price: '$49',
    features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Project Reports'],
    category: 'PHP Scripts',
    longDescription: `A comprehensive project management system built with Laravel and Vue.js. Perfect for teams of all sizes looking to streamline their project workflows.`,
    techSpecs: {
      requirements: [
        'PHP 8.1+',
        'MySQL 5.7+',
        'Node.js 16+',
        'Composer 2.0+'
      ],
      includes: [
        'Source code',
        'Database schema',
        'API documentation',
        'Installation guide'
      ]
    },
    highlights: [
      'Easy installation wizard',
      'REST API included',
      'Multi-language support',
      'Regular updates'
    ]
  }
  // Add more products as needed
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(params.slug))
    setProduct(foundProduct)
    setLoading(false)
  }, [params.slug])

  if (loading || !product) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
    </div>
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-neutral-dark sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-xl text-neutral-dark/80 max-w-3xl mx-auto">
              {product.description}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                Purchase for {product.price}
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-neutral-light text-neutral-dark hover:bg-primary-50 transition-colors">
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Live Preview
              </button>
            </div>
          </motion.div>

          {/* Product Preview */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-2xl">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Tab.Group>
          <Tab.List className="flex space-x-8 border-b border-gray-200">
            {['Overview', 'Technical Details', 'Documentation'].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    'border-b-2 py-4 text-sm font-medium focus:outline-none',
                    selected
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-neutral-dark">Product Overview</h3>
                <p className="text-neutral-dark/80">{product.longDescription}</p>
                
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-neutral-dark mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-neutral-dark/80">
                          <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-neutral-dark mb-4">Highlights</h4>
                    <ul className="space-y-3">
                      {product.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-neutral-dark/80">
                          <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-neutral-dark">Technical Requirements</h3>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-neutral-dark mb-4">System Requirements</h4>
                    <ul className="space-y-3">
                      {product.techSpecs.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-neutral-dark/80">
                          <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-neutral-dark mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {product.techSpecs.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-neutral-dark/80">
                          <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-neutral-dark">Documentation</h3>
                <p className="text-neutral-dark/80">Access our comprehensive documentation to get started quickly:</p>
                
                <div className="mt-8 grid grid-cols-1 gap-6">
                  {['Installation Guide', 'Configuration Guide', 'API Documentation', 'User Manual'].map((doc, index) => (
                    <div key={index} className="flex items-center p-4 bg-neutral-50 rounded-lg">
                      <DocumentTextIcon className="h-6 w-6 text-primary-600 mr-3" />
                      <span className="text-neutral-dark">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
} 