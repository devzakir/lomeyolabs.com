'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
  ServerIcon,
  StarIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import AnimatedSection from '@/components/animation/AnimatedSection'
import Screenshots from '@/components/Screenshots'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'

const product = {
  benefits: [
    {
      icon: ServerIcon,
      title: 'Modern Tech Stack',
      description: 'Built with Laravel, Vue.js, and MySQL for optimal performance and scalability'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'Enterprise-grade security with role-based access control and data encryption'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Complete ATS Features',
      description: 'End-to-end recruitment workflow with customizable pipelines and automation'
    },
    {
      icon: CogIcon,
      title: 'Easy Integration',
      description: 'RESTful API and webhooks for seamless integration with your existing tools'
    }
  ],
  features: {
    core: [
      {
        title: 'Advanced Job Management',
        description: 'Complete control over your recruitment process',
        image: '/products/jobpilot/features-1.png',
        benefits: [
          'Custom application forms',
          'Job board management',
          'Multi-location support',
          'Department organization',
          'Automated job posting',
          'Social media integration'
        ]
      },
      {
        title: 'Candidate Management',
        description: 'Streamlined candidate tracking and evaluation',
        image: '/products/jobpilot/features-2.png',
        benefits: [
          'Advanced search filters',
          'Candidate scoring',
          'Interview scheduling',
          'Assessment tracking',
          'Communication history',
          'Document management'
        ]
      },
      {
        title: 'Team Collaboration',
        description: 'Enhanced team productivity and communication',
        image: '/products/jobpilot/features-3.png',
        benefits: [
          'Team messaging',
          'Interview feedback',
          'Task assignment',
          'Email templates',
          'Activity tracking',
          'Performance metrics'
        ]
      }
    ]
  },
  screenshots: [
    {
      title: 'Dashboard Overview',
      image: 'https://templatecookie.com/storage/image/1709116010_65df0a6a0d900.png'
    },
    {
      title: 'Job Management',
      image: 'https://templatecookie.com/storage/image/1709116010_65df0a6a0d900.png'
    },
    {
      title: 'Candidate Pipeline',
      image: 'https://templatecookie.com/storage/image/1709116010_65df0a6a0d900.png'
    }
  ],
  licenses: [
    {
      name: 'Regular License',
      price: '$49',
      description: 'Perfect for small to medium businesses',
      features: [
        'Single installation',
        '6 months support',
        'Source code access',
        'Bug fixes & updates',
        'Documentation access'
      ],
      recommended: false,
      buttonText: 'Purchase Regular License'
    },
    {
      name: 'Extended License',
      price: '$249',
      description: 'Ideal for large enterprises',
      features: [
        'Multiple installations',
        '12 months support',
        'Source code access',
        'Priority support',
        'Custom modifications',
        'SLA agreement'
      ],
      recommended: true,
      buttonText: 'Purchase Extended License'
    }
  ],
  faqs: {
    'Technical': [
      {
        question: 'What technology stack is used?',
        answer: 'Jobpilot is built with Laravel 10, Vue.js 3, and MySQL, following modern development practices and patterns.'
      },
      {
        question: 'Can I customize the source code?',
        answer: 'Yes, you have full access to the source code and can customize it according to your needs.'
      }
    ],
    'Licensing': [
      {
        question: 'What\'s included in the regular license?',
        answer: 'The regular license includes single installation, 6 months support, and all core features.'
      },
      {
        question: 'Can I upgrade my license later?',
        answer: 'Yes, you can upgrade from regular to extended license by paying the difference.'
      }
    ]
  }
}

// ... rest of the implementation follows similar structure to RecruitX page ... 

export default function JobpilotPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-32 sm:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-primary-700/50 text-white px-3 py-1 rounded-full text-sm">
                    Big Update Released
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Version 3
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                  All-In-One Job Portal Platform
                </h1>
                <p className="text-xl text-primary-100 mb-4">
                  No Addon! All Features in a Single Script
                </p>
                <p className="text-lg text-primary-200 mb-8">
                  Create a powerful job marketplace with Jobpilot's self-hosted solution. Whether you're building a niche job board, developing client solutions, or launching an organizational career portal.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="https://jobpilot.templatecookie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Live Demo
                  </motion.a>
                  <motion.a
                    href="#pricing"
                    className="rounded-xl bg-primary-800 px-8 py-4 text-base font-semibold text-white hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Pricing
                  </motion.a>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src="/jobpilot-preview.jpg"
                  alt="Jobpilot Preview"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-16 bg-white border-b">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">580+</div>
                <div className="text-gray-600">Happy Customers</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="text-4xl font-bold text-primary-600">4.5</div>
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-gray-600">Star Rating</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">80+</div>
                <div className="text-gray-600">Customer Reviews</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="text-4xl font-bold text-primary-600">V3</div>
                  <span className="text-sm px-2 py-1 bg-primary-100 text-primary-600 rounded-full">
                    Latest
                  </span>
                </div>
                <div className="text-gray-600">Current Version</div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Perfect For Section */}
      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold">Perfect For</h2>
              <p className="mt-4 text-lg text-gray-600">Tailored solutions for various business needs</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Entrepreneurs',
                  description: 'Starting job board businesses',
                  icon: BuildingOfficeIcon
                },
                {
                  title: 'Developers',
                  description: 'Building client solutions',
                  icon: CodeBracketIcon
                },
                {
                  title: 'Organizations',
                  description: 'Creating career portals',
                  icon: UserGroupIcon
                },
                {
                  title: 'Educational Institutions',
                  description: 'Managing placement portals',
                  icon: DocumentCheckIcon
                },
                {
                  title: 'Recruitment Agencies',
                  description: 'Needing branded platforms',
                  icon: BuildingOfficeIcon
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <item.icon className="h-12 w-12 text-primary-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold">Connect Job Seekers & Employers</h2>
              <p className="mt-4 text-lg text-gray-600">Comprehensive features for both sides of recruitment</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Job Seekers Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center">For Job Seekers</h3>
                <div className="space-y-4">
                  {[
                    'Beautiful, intuitive dashboard',
                    'Advanced job search with filters',
                    'Company search & filtering',
                    'Professional profile management',
                    'Resume & cover letter submissions',
                    'Real-time employer chat',
                    'Job bookmarking system',
                    'Smart job alerts',
                    'Mobile-responsive experience'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckIcon className="h-5 w-5 text-primary-600" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Employers Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center">For Employers</h3>
                <div className="space-y-4">
                  {[
                    'Streamlined company dashboard',
                    'Efficient job posting & management',
                    'Comprehensive account settings',
                    'Advanced candidate search',
                    'Real-time candidate chat',
                    'Custom application questions',
                    'Candidate bookmarking',
                    'Application tracking system',
                    'Multiple pricing plans'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckIcon className="h-5 w-5 text-primary-600" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Administrative Features & Technical Excellence */}
      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold">Powerful Administrative Features</h2>
              <p className="mt-4 text-lg text-gray-600">Everything you need to manage your job portal effectively</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Management Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-8">Complete Management Solution</h3>
                <div className="space-y-4">
                  {[
                    'Multi-language & currency support',
                    '10+ payment gateways (online & offline)',
                    'GDPR compliance built-in',
                    'Customizable email templates',
                    'Full content management system',
                    'Social media login integration',
                    'Country-based job filtering',
                    'Blog management',
                    'Custom pages & menus',
                    'Comprehensive documentation'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckIcon className="h-5 w-5 text-primary-600" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Excellence */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-8">Technical Excellence</h3>
                <div className="space-y-4">
                  {[
                    'SEO optimized structure',
                    'Fully responsive design',
                    'Clean, documented code',
                    'Regular updates',
                    'Modern Laravel framework',
                    'Easy customization',
                    'API support',
                    'Performance optimized'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckIcon className="h-5 w-5 text-primary-600" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection>
        <section id="pricing" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold">License Options</h2>
              <p className="mt-4 text-lg text-gray-600">Choose the perfect license for your needs</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Regular License */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
              >
                <h3 className="text-2xl font-bold mb-2">Regular License</h3>
                <p className="text-gray-600 mb-4">Perfect for Free Job Boards</p>
                <div className="text-4xl font-bold mb-6">$69</div>
                <div className="space-y-4 mb-8">
                  {[
                    'Full source code',
                    '6 months support',
                    'Single domain use',
                    'Free updates',
                    'Documentation access',
                    'Let users use platform free of charge'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckIcon className="h-5 w-5 text-primary-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="block w-full text-center py-3 px-6 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Purchase Regular License
                </motion.a>
              </motion.div>

              {/* Extended License */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative bg-primary-900 rounded-2xl shadow-lg p-8 text-white"
              >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular Choice
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Extended License</h3>
                <p className="text-primary-200 mb-4">Perfect for Commercial Use</p>
                <div className="text-4xl font-bold mb-6">$199</div>
                <div className="space-y-4 mb-8">
                  {[
                    'Full source code',
                    '6 months support',
                    'Single domain use',
                    'Free updates',
                    'Documentation access',
                    'Monetize your platform',
                    'Charge users for services'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckIcon className="h-5 w-5 text-primary-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="block w-full text-center py-3 px-6 rounded-xl bg-white text-primary-600 font-semibold hover:bg-primary-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Purchase Extended License
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Jobpilot */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold">Why Choose Jobpilot?</h2>
              <p className="mt-4 text-lg text-primary-200">Trusted by 580+ customers worldwide</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'Complete Solution',
                  features: [
                    'No monthly fees',
                    'One-time purchase',
                    'Full source code',
                    'Lifetime free updates',
                    'Regular new features',
                    'Professional support'
                  ]
                },
                {
                  title: 'Built for Growth',
                  features: [
                    'Scalable architecture',
                    'Multiple payment options',
                    'Custom branding',
                    'Full customization',
                    'API integration',
                    'Multi-language support'
                  ]
                },
                {
                  title: 'Enterprise Features',
                  features: [
                    'Advanced ATS',
                    'Custom workflows',
                    'Team collaboration',
                    'Comprehensive reporting',
                    'Email automation',
                    'Location-based jobs'
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                  <div className="space-y-4">
                    {section.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckIcon className="h-5 w-5 text-primary-300" />
                        <span className="text-primary-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Technical Requirements & Documentation */}
      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Technical Requirements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-8">Technical Requirements</h3>
                <div className="space-y-4">
                  {[
                    'PHP 7.4+',
                    'MySQL 5.7+',
                    'Redis (optional)',
                    '2GB RAM minimum',
                    '10GB storage recommended'
                  ].map((req, index) => (
                    <motion.div
                      key={req}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <ServerIcon className="h-5 w-5 text-primary-600" />
                      <span>{req}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Documentation & Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-8">Well-Documented & Supported</h3>
                <div className="space-y-4">
                  {[
                    'Detailed documentation',
                    'Video tutorials',
                    'Installation guides',
                    'Regular updates',
                    'Community support',
                    'Professional assistance'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <DocumentCheckIcon className="h-5 w-5 text-primary-600" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Recent Updates */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold">Recent Updates</h2>
              <p className="mt-4 text-lg text-gray-600">
                <a 
                  href="https://templatecookie.helpcenter.guide/articles/changelog-83c890-86e41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  View full changelog
                </a>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Laravel 10 compatibility',
                'PWA integration',
                'Multiple homepage layouts',
                'Enhanced job search',
                'New payment gateways',
                'Performance optimizations'
              ].map((update, index) => (
                <motion.div
                  key={update}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium text-gray-900">{update}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection>
        <section className="py-24 bg-primary-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Launch Your Job Portal?
              </h2>
              <p className="text-lg text-primary-100 mb-8">
                Transform your job portal vision into reality with Jobpilot. Get started today with our affordable, feature-rich solution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://jobpilot.templatecookie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Live Demo
                </motion.a>
                <motion.a
                  href="#pricing"
                  className="rounded-xl bg-primary-800 px-8 py-4 text-base font-semibold text-white hover:bg-primary-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                </motion.a>
              </div>
              <p className="mt-8 text-sm text-primary-200 italic">
                *Note: Prices shown are introductory and subject to change. Purchase includes 6 months of support and lifetime updates.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
} 