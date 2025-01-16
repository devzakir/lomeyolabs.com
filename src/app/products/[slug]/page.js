'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tab, Dialog } from '@headlessui/react'
import AnimatedSection from '@/components/animation/AnimatedSection'

import { 
  StarIcon, 
  CheckIcon, 
  CloudArrowDownIcon, 
  CodeBracketIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ArrowDownTrayIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import Testimonials from '@/components/Testimonials'

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
    ],
    screenshots: [
      {
        id: 1,
        title: 'Dashboard Overview',
        url: 'https://templatecookie.com/storage/image/1710224864_65eff5e06cdb1.png'
      },
      {
        id: 2,
        title: 'Task Management',
        url: 'https://templatecookie.com/storage/image/1710224877_65eff5eddffea.png'
      },
      {
        id: 3,
        title: 'Team Collaboration',
        url: 'https://templatecookie.com/storage/image/1709116010_65df0a6a0d900.png'
      }
    ],
    testimonials: [
      {
        id: 1,
        content: "This product has completely transformed how we manage our projects. The interface is intuitive and the features are exactly what we needed.",
        author: "Sarah Johnson",
        role: "Project Manager",
        company: "Tech Solutions Inc"
      },
      {
        id: 2,
        content: "The best project management tool we have used. The support team is incredibly responsive and helpful.",
        author: "Michael Chen",
        role: "CTO",
        company: "StartupX"
      }
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
  const [selectedImage, setSelectedImage] = useState(null)

  // Stats data
  const stats = [
    { id: 1, name: 'Active Users', value: '10,000+', icon: UserGroupIcon },
    { id: 2, name: 'Customer Rating', value: '4.9/5', icon: StarIcon },
    { id: 3, name: 'Updates Released', value: '200+', icon: ChartBarIcon },
    { id: 4, name: 'Support Response', value: '< 24h', icon: ShieldCheckIcon },
  ]

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Use params.slug directly instead of unwrappedParams
        const productId = parseInt(params.slug)
        const foundProduct = products.find(p => p.id === productId)
        setProduct(foundProduct || null)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.slug]) // Update dependency

  if (loading) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>
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
          <div className="border-b border-gray-200">
            <Tab.List className="flex space-x-8">
              {['Overview', 'Technical Details', 'Documentation'].map((tab) => (
                <Tab
                  key={tab}
                  as="div"
                  className={({ selected }) =>
                    classNames(
                      'border-b-2 py-4 text-sm font-medium focus:outline-none cursor-pointer',
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
          </div>
          <Tab.Panels className="mt-8">
            <Tab.Panel className="focus:outline-none">
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

            <Tab.Panel className="focus:outline-none">
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

            <Tab.Panel className="focus:outline-none">
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

      {/* Screenshots Gallery */}
      <section className="relative bg-gray-50 py-24">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Product Screenshots</h2>
            <p className="mt-4 text-lg text-gray-600">Take a closer look at the features and interface</p>
          </div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {product.screenshots.map((screenshot) => (
              <motion.div
                key={screenshot.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="cursor-pointer"
                onClick={() => setSelectedImage(screenshot)}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={screenshot.url}
                    alt={screenshot.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">{screenshot.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900">
        <Testimonials
          title="Trusted by Developers Worldwide"
          subtitle="See what our customers have to say about their experience"
          items={product.testimonials.map(testimonial => ({
            name: testimonial.author,
            role: testimonial.role,
            company: testimonial.company,
            content: testimonial.content,
            image: testimonial.avatar || "https://via.placeholder.com/150"
          }))}
        />
      </section>

      {/* Product Stats */}
      <AnimatedSection>
        <section className="relative py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="flex flex-col items-center text-center p-6"
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="h-8 w-8 text-primary-600 mb-3" />
                  <dt className="text-base text-gray-600">{stat.name}</dt>
                  <dd className="text-2xl font-bold text-gray-900">{stat.value}</dd>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="relative bg-primary-600 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join thousands of developers who trust our products
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50">
                Purchase Now
              </button>
              <button className="rounded-xl bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <Dialog 
        open={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-5xl">
            <div className="relative">
              <Image
                src={selectedImage?.url || ''}
                alt={selectedImage?.title || ''}
                width={1920}
                height={1080}
                className="rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Related Products */}
      <section className="relative bg-gray-50 py-24">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Related Products</h2>
            <p className="mt-4 text-lg text-gray-600">Discover more solutions that might interest you</p>
          </div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {products.slice(0, 3).map(relatedProduct => (
              <Link 
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group block rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600">
                    {relatedProduct.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{relatedProduct.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">{relatedProduct.price}</span>
                    <span className="text-sm font-medium text-primary-600 group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Support */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-50">
              <DocumentTextIcon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides and API references</p>
              <button className="mt-auto text-primary-600 font-medium hover:text-primary-700">
                View Documentation →
              </button>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-50">
              <CloudArrowDownIcon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Updates & Releases</h3>
              <p className="text-gray-600 mb-4">Regular updates and new features</p>
              <button className="mt-auto text-primary-600 font-medium hover:text-primary-700">
                View Changelog →
              </button>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-50">
              <StarIcon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Support</h3>
              <p className="text-gray-600 mb-4">Dedicated support for all your questions</p>
              <button className="mt-auto text-primary-600 font-medium hover:text-primary-700">
                Contact Support →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}