'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import ProductGrid from './components/ProductGrid'
import ProductHero from './components/ProductHero'

// Sample products data
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
  {
    id: 8,
    name: 'InvoicePro - Billing System',
    description: 'Professional invoicing and billing management system',
    image: 'https://templatecookie.com/storage/image/1709116010_65df0a6a0d900.png',
    price: '$39',
    features: ['Invoice Generation', 'Payment Tracking', 'Client Management', 'Financial Reports'],
    category: 'PHP Scripts'
  },
  {
    id: 9,
    name: 'Dashify Admin Template',
    description: 'Modern admin dashboard UI kit with dark mode',
    image: 'https://templatecookie.com/storage/image/1709115481_65df08597076f.jpg',
    price: '$29',
    features: ['100+ Components', 'Dark Mode', 'Responsive Design', 'Documentation'],
    category: 'Figma Templates'
  },
  {
    id: 10,
    name: 'EduLearn LMS Template',
    description: 'Complete learning management system UI kit',
    image: 'https://templatecookie.com/storage/image/1710224864_65eff5e06cdb1.png',
    price: '$35',
    features: ['Course Pages', 'Student Dashboard', 'Instructor Portal', 'Assessment UI'],
    category: 'Figma Templates'
  },
  {
    id: 11,
    name: 'SaaS Landing UI Kit',
    description: 'Modern SaaS product landing page template',
    image: 'https://templatecookie.com/storage/image/1710224877_65eff5eddffea.png',
    price: '$25',
    features: ['Landing Pages', 'Pricing Tables', 'Feature Sections', 'Blog Templates'],
    category: 'Figma Templates'
  }
]

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  const categories = ['all', 'PHP Scripts', 'Figma Templates']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div>
      <ProductHero />
      
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-lg">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border-gray-200 pl-12 pr-4 py-3 focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-xl border-gray-200 py-3 focus:border-primary focus:ring-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <ProductGrid products={currentProducts} />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === i + 1
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 