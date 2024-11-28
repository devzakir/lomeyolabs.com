'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tab, Dialog } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon, 
  CheckIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ArrowDownTrayIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  CogIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalendarIcon,
  EnvelopeIcon,
  XMarkIcon
} from '@heroicons/react/24/solid'

// Product data
const product = {
  name: 'JuggleHire - Self-Hosted Recruitment Platform',
  description: 'Complete recruitment and applicant tracking system for modern hiring teams',
  price: '$299',
  image: 'https://jugglehire.com/images/hero.png',
  features: [
    'Applicant Tracking',
    'Career Portal',
    'Team Collaboration',
    'Interview Scheduling',
    'Custom Hiring Pipeline',
    'Email Templates'
  ],
  category: 'PHP Scripts',
  longDescription: `JuggleHire is a powerful self-hosted recruitment platform that helps companies streamline their hiring process. Built with Laravel and Vue.js, it offers complete control over your recruitment data with enterprise-grade features.`,
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
      'Installation guide',
      'Email templates',
      'Career portal theme'
    ]
  },
  highlights: [
    'Easy one-click installation',
    'REST API included',
    'Multi-language support',
    'White-label solution',
    'Lifetime updates',
    'Premium support'
  ],
  screenshots: [
    {
      id: 1,
      title: 'Dashboard Overview',
      url: 'https://jugglehire.com/images/features/dashboard.png'
    },
    {
      id: 2,
      title: 'Candidate Pipeline',
      url: 'https://jugglehire.com/images/features/pipeline.png'
    },
    {
      id: 3,
      title: 'Career Portal',
      url: 'https://jugglehire.com/images/features/career-portal.png'
    }
  ],
  testimonials: [
    {
      id: 1,
      content: "JuggleHire has transformed our recruitment process. The self-hosted version gives us complete control over our data while maintaining all the premium features.",
      author: "David Chen",
      role: "Head of HR",
      company: "TechCorp Inc"
    },
    {
      id: 2,
      content: "The best recruitment software we've used. Installation was smooth, and the support team is incredibly responsive.",
      author: "Sarah Williams",
      role: "Talent Acquisition Manager",
      company: "GrowthStart"
    }
  ]
}

// Using similar structure as the product detail page
export default function JuggleHireLanding() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Stats data
  const stats = [
    { id: 1, name: 'Active Installations', value: '500+', icon: CloudArrowUpIcon },
    { id: 2, name: 'Customer Rating', value: '4.9/5', icon: StarIcon },
    { id: 3, name: 'Job Postings', value: '50K+', icon: ChartBarIcon },
    { id: 4, name: 'Support Response', value: '< 24h', icon: ShieldCheckIcon },
  ]

  // Key features with icons
  const keyFeatures = [
    {
      icon: BuildingOfficeIcon,
      title: 'Career Portal',
      description: 'Branded job board to showcase your opportunities'
    },
    {
      icon: UsersIcon,
      title: 'Team Collaboration',
      description: 'Collaborate with hiring teams seamlessly'
    },
    {
      icon: CogIcon,
      title: 'Custom Workflow',
      description: 'Customize hiring stages and workflows'
    }
  ]

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
              Self-Hosted Recruitment Platform
            </span>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-neutral-dark sm:text-5xl lg:text-6xl">
              Hire Better with
              <span className="block text-primary-600">Complete Control</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-dark/80 max-w-3xl mx-auto">
              Transform your recruitment process with JuggleHire's self-hosted solution. 
              Own your data while leveraging enterprise-grade hiring features.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                Purchase for {product.price}
              </button>
              <Link 
                href="https://demo.jugglehire.com" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-neutral-light text-neutral-dark hover:bg-primary-50 transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Try Live Demo
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-2xl">
              <Image
                src={product.image}
                alt="JuggleHire Dashboard"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Features Section - Similar to WhyChooseUs component */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight text-dark sm:text-4xl">
              Enterprise-Grade Features
            </h2>
            <p className="mt-4 text-lg leading-8 text-dark/80">
              Everything you need to streamline your recruitment process
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Custom Career Portal',
                description: 'Branded job board with custom domain support and SEO optimization',
                icon: BuildingOfficeIcon
              },
              {
                title: 'Smart ATS',
                description: 'Advanced applicant tracking with custom pipelines and automated workflows',
                icon: UsersIcon
              },
              {
                title: 'Team Collaboration',
                description: 'Real-time collaboration with team members, comments, and notifications',
                icon: UserGroupIcon
              },
              {
                title: 'Interview Scheduling',
                description: 'Automated interview scheduling with calendar integration',
                icon: CalendarIcon
              },
              {
                title: 'Email Templates',
                description: 'Customizable email templates for every stage of recruitment',
                icon: EnvelopeIcon
              },
              {
                title: 'Analytics & Reports',
                description: 'Comprehensive hiring analytics and custom report generation',
                icon: ChartBarIcon
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, rotateY: -30 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-lg bg-white/80 p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-dark">{feature.title}</h3>
                <p className="mt-2 text-md text-dark/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit.svg')]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See JuggleHire in Action
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Modern interface designed for efficient recruitment
            </p>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {product.screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="cursor-pointer"
                onClick={() => setSelectedImage(screenshot)}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-800">
                  <Image
                    src={screenshot.url}
                    alt={screenshot.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-400">{screenshot.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Using similar structure to Testimonials component */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Hiring Teams Worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what our customers have to say about JuggleHire
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {product.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-900">{testimonial.content}</p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative bg-gray-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* System Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Requirements</h3>
              <ul className="space-y-4">
                {product.techSpecs.requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <ul className="space-y-4">
                {product.techSpecs.includes.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Get started with JuggleHire Self-Hosted Version today
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50">
                Purchase Now - {product.price}
              </button>
              <Link
                href="https://demo.jugglehire.com"
                target="_blank" 
                className="rounded-xl bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400"
              >
                Try Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Dialog */}
      <Dialog 
        open={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                {selectedImage && (
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              
              {selectedImage && (
                <div className="mt-4 text-center">
                  <Dialog.Title className="text-lg font-medium text-white">
                    {selectedImage.title}
                  </Dialog.Title>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

      {/* FAQ Section */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about JuggleHire Self-Hosted Version
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 max-w-2xl space-y-8"
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
            {[
              {
                question: "What's included in the self-hosted version?",
                answer: "You get the complete source code, database schema, installation guide, API documentation, and email templates. Plus, you'll receive lifetime updates and premium support."
              },
              {
                question: "Do you offer installation support?",
                answer: "Yes, our team provides comprehensive installation support to ensure your JuggleHire instance is up and running smoothly."
              },
              {
                question: "Can I customize the career portal?",
                answer: "Absolutely! The career portal is fully customizable to match your brand identity, including colors, logos, and layout."
              },
              {
                question: "Is there a demo available?",
                answer: "Yes, you can try our live demo at demo.jugglehire.com to explore all features before making a purchase."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="rounded-2xl bg-gray-50 p-8"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}