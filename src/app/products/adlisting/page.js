'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import {
  CheckIcon,
  ShieldCheckIcon,
  CogIcon,
  DocumentCheckIcon,
  ServerIcon,
  StarIcon,
  CodeBracketIcon,
  UserGroupIcon,
  UserIcon, 
  BuildingOfficeIcon, 
  SparklesIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import AnimatedSection from '@/components/animation/AnimatedSection'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import TechnicalSpecs from '@/components/TechnicalSpecs'
import CompanyStats from '@/components/CompanyStats'

const product = {
  name: 'Adlisting - Classified Ads PHP Script',
  shortName: 'Adlisting',
  category: 'PHP Scripts',
  description: 'Create a powerful classified ads marketplace with Adlisting\'s feature-rich PHP script. Built for performance, security, and scalability with modern features and extensive customization options.',
  price: 'From $59',
  image: '/products/adlisting/adlisting.png',
  benefits: [
    {
      icon: 'MoneyIcon',
      title: 'Make Money',
      description: 'Maximize earnings with subscription plans, featured listings, and multiple payment gateways'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Friendly Support',
      description: 'Dedicated support team to help you every step of the way'
    },
    {
      icon: 'PaintBrushIcon',
      title: 'Premium Customization',
      description: 'Extensive customization options for colors, layouts, and features'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Secure by Default',
      description: 'Built-in security features including email verification and Google reCAPTCHA'
    }
  ],
  features: {
    core: [
      {
        title: 'Category Custom Fields',
        description: 'Create unique fields for different listing categories',
        image: '/products/adlisting/features-1.png',
        benefits: [
          'Custom field types',
          'Category-specific fields',
          'Field group management',
          'Required/optional fields',
          'Sorting capabilities',
          'Field validation'
        ]
      },
      {
        title: 'Advanced Location Features',
        description: 'Powerful location-based listing management',
        image: '/products/adlisting/features-2.png',
        benefits: [
          'Google Maps integration',
          'Mapbox support',
          'Location search',
          'Radius filtering',
          'Multiple countries support',
          'City/state management'
        ]
      },
      {
        title: 'Subscription & Membership',
        description: 'Flexible monetization options',
        image: '/products/adlisting/features-3.png',
        benefits: [
          'Monthly/yearly plans',
          'Custom duration plans',
          'Featured listing limits',
          'Premium badges',
          'Plan management',
          'Subscription analytics'
        ]
      }
    ]
  },
  licenses: [
    {
      name: 'Regular License',
      description: 'Perfect for Free Classified Sites',
      price: '$59',
      features: [
        'Full source code',
        '6 months support',
        'Single domain use',
        'Free updates',
        'Documentation access',
        'Let users use platform free of charge'
      ],
      buttonText: 'Purchase Regular License',
      href: 'https://go.templatecookie.com/adlisting-regular'
    },
    {
      name: 'Extended License',
      description: 'Perfect for Commercial Use',
      price: '$149',
      features: [
        'Full source code',
        '6 months support',
        'Single domain use',
        'Free updates',
        'Documentation access',
        'Monetize your platform',
        'Charge users for services'
      ],
      buttonText: 'Purchase Extended License',
      href: 'https://go.templatecookie.com/adlisting-extended',
      recommended: true
    }
  ],
  faqs: {
    'Technical': [
      {
        question: 'What technology stack is used?',
        answer: 'Adlisting is built with Laravel, uses MySQL for database, and incorporates modern frontend technologies for optimal performance.'
      },
      {
        question: 'What are the server requirements?',
        answer: 'The script requires PHP 7.4+, MySQL 5.7+, and standard Laravel server requirements.'
      },
      {
        question: 'Is the code well documented?',
        answer: 'Yes, the script comes with comprehensive documentation including installation guides and feature explanations.'
      }
    ],
    'Features': [
      {
        question: 'What payment gateways are supported?',
        answer: 'Supports 8+ payment gateways including PayPal, Stripe, Razorpay, Flutterwave, Mollie, and more.'
      },
      {
        question: 'Can I customize the theme?',
        answer: 'Yes, extensive theme customization options are available including colors, layouts, and components.'
      },
      {
        question: 'Is multi-language supported?',
        answer: 'Yes, the script supports multiple languages and currencies with easy management.'
      }
    ]
  },
  perfectFor: [
    {
      title: 'Entrepreneurs',
      description: 'Starting classified businesses',
      icon: BuildingOfficeIcon
    },
    {
      title: 'Developers',
      description: 'Building client solutions',
      icon: CodeBracketIcon
    },
    {
      title: 'Organizations',
      description: 'Creating marketplace platforms',
      icon: UserGroupIcon
    }
  ],
  features: {
    sellers: {
      title: 'For Sellers',
      features: [
        'Easy listing management',
        'Multiple image upload',
        'Featured listing options',
        'Real-time messaging',
        'Profile management',
        'Analytics dashboard',
        'Review management',
        'Social sharing',
        'Mobile-responsive experience'
      ]
    },
    buyers: {
      title: 'For Buyers',
      features: [
        'Advanced search filters',
        'Saved searches',
        'Favorite listings',
        'Direct messaging',
        'Review system',
        'Location-based search',
        'Category filtering',
        'Price comparison',
        'Mobile-friendly interface'
      ]
    }
  },
  administrativeFeatures: {
    title: 'Complete Management Solution',
    features: [
      'Multi-language & currency support',
      '8+ payment gateways',
      'Custom field management',
      'User role management',
      'Content management system',
      'Social media integration',
      'Location management',
      'Review moderation',
      'Custom pages & menus',
      'Comprehensive documentation'
    ]
  },
  recentUpdates: [
    'Added cookie policy modal',
    'Custom field in ads filter system',
    'Chat blocking functionality',
    'Pay-per-ads post option',
    'Multiple homepage layouts',
    'Performance optimizations'
  ],
  technicalSpecs: {
    title: 'Technical Requirements & Support',
    subtitle: 'Everything you need to get started with Adlisting',
    requirements: [
      'PHP 7.4+',
      'MySQL 5.7+',
      'Laravel requirements',
      '2GB RAM minimum',
      '1vCPU minimum',
      '10GB storage recommended'
    ],
    includes: [
      'Detailed documentation',
      'Installation guides',
      'Regular updates',
      'Community support',
      'Professional assistance',
      'Feature tutorials'
    ]
  },
  technicalExcellence: {
    title: 'Technical Excellence',
    features: [
      'Laravel-based architecture',
      'Mobile-friendly responsive design',
      'Clean & documented code',
      'Regular feature updates',
      'SEO optimized structure',
      'High performance',
      'Multiple admin support',
      'Database backup system'
    ]
  },
  whyChooseFeatures: {
    sections: [
      {
        title: 'Complete Solution',
        features: [
          'One-time purchase',
          'Full source code',
          'Lifetime updates',
          'Regular new features',
          'Professional support',
          'Multi-language support'
        ]
      },
      {
        title: 'Built for Growth',
        features: [
          'Scalable architecture',
          'Multiple payment options',
          'Custom branding options',
          'Full customization',
          'Theme customization',
          'Category management'
        ]
      },
      {
        title: 'Enterprise Features',
        features: [
          'Role-based permissions',
          'Multiple admin support',
          'Advanced analytics',
          'Payment gateway integration',
          'Custom field system',
          'Location-based listings'
        ]
      }
    ]
  }
}


export default function AdlistingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">
            {/* Version Tags */}
            <div className="flex gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-primary-800/60 px-4 py-1.5 text-sm font-medium text-primary-200">
                PHP Script
              </span>
              <span className="inline-flex items-center rounded-full bg-primary-800/60 px-4 py-1.5 text-sm font-medium text-primary-200">
                Version 4
              </span>
            </div>

            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {product.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-200 font-medium mb-4">
              No Addon! All Features in a Single Script
            </h2>
            <p className="text-lg text-primary-200/80 mb-12 max-w-2xl">
              {product.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <motion.a 
                href="https://adlisting.templatecookie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Live Demo
              </motion.a>
              <motion.a 
                href="#pricing"
                className="inline-flex items-center rounded-xl bg-primary-800/60 backdrop-blur-sm border border-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-primary-800/80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.a>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16 relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[16/12] relative">
              <Image
                src={product.image}
                alt="Adlisting Preview"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        </div>
      </section>

      {/* Stats Section */}
      <CompanyStats />

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
              {product.perfectFor.map((item, index) => (
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

      {/* Connect Sellers & Buyers Section */}
      <AnimatedSection>
        <section className="py-24 bg-primary-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-800 text-primary-200 text-sm font-medium mb-4">
                Two Powerful Platforms in One
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect Sellers & Buyers
              </h2>
              <p className="text-xl text-primary-200 max-w-3xl mx-auto">
                A seamless experience for both sides of the listing platform.
              </p>
            </motion.div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Seller Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Card Content */}
                <div className="relative rounded-2xl bg-gradient-to-r from-primary-800 to-primary-900 p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500">
                      <UserIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {product.features.sellers.title}
                    </h3>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {product.features.sellers.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-sky-400" />
                        <p className="text-lg text-sky-100">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Buyers Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Card Content */}
                <div className="relative rounded-2xl bg-gradient-to-r from-primary-900 to-primary-800 p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-rose-500 to-purple-500">
                      <BuildingOfficeIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {product.features.buyers.title}
                    </h3>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {product.features.buyers.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-rose-400" />
                        <p className="text-lg text-rose-100">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
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
              {[product.administrativeFeatures, product.technicalExcellence].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-sm"
                >
                  <h3 className="text-2xl font-bold mb-8">{section.title}</h3>
                  <div className="space-y-4">
                    {section.features.map((feature, index) => (
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
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <Pricing 
        title="License Options"
        subtitle="Choose the perfect license for your business needs"
        licenses={product.licenses}
      />

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
              <h2 className="text-3xl font-bold">Why Choose {product.shortName}?</h2>
              <p className="mt-4 text-lg text-primary-200">Trusted by 180+ customers worldwide</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {product.whyChooseFeatures.sections.map((section, index) => (
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

      {/* Technical Specifications Section */}
      <TechnicalSpecs 
        title={product.technicalSpecs.title}
        subtitle={product.technicalSpecs.subtitle}
        requirements={product.technicalSpecs.requirements}
        includes={product.technicalSpecs.includes}
      />

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
              {product.recentUpdates.map((update, index) => (
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

      {/* Final CTA Section */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary-600/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              {/* Trust Metrics */}
              <div className="flex justify-center gap-8 mb-12">
                {[
                  { number: '180+', label: 'Happy Customers' },
                  { number: '4.4/5', label: 'Customer Rating' },
                  { number: '9-5 GMT+6', label: 'Customer Support Hours' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{metric.number}</div>
                    <div className="text-sm text-primary-200">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Launch Your Classified Ads Portal?
                </h2>
                <p className="text-xl text-primary-100 mb-12">
                  Transform your classified ads portal vision into reality with Adlisting. 
                  Get started today with our affordable, feature-rich solution.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <motion.a
                    href="https://adlisting.templatecookie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg shadow-primary-900/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Live Demo
                  </motion.a>
                  <motion.a
                    href="#pricing"
                    className="rounded-xl bg-primary-700 px-8 py-4 text-lg font-semibold text-white hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-900/20 border border-primary-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Pricing
                  </motion.a>
                </div>

                {/* Trust Badges */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  {[
                    { icon: ShieldCheckIcon, text: 'Secure Payment' },
                    { icon: ClockIcon, text: '6 Months Support' },
                    { icon: SparklesIcon, text: 'Lifetime Updates' }
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-primary-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <badge.icon className="h-5 w-5 mr-2" />
                      <span className="text-sm">{badge.text}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-sm text-primary-300 italic max-w-2xl mx-auto">
                  *Note: Prices shown are introductory and subject to change. 
                  Purchase includes 6 months of support and lifetime updates.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <FAQ 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Jobpilot"
          categories={product.faqs}
        />
      </AnimatedSection>
    </div>
  )
}
