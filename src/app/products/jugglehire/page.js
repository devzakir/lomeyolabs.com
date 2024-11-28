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
  XMarkIcon,
  DocumentCheckIcon,
  ServerIcon,
  LockClosedIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/solid'
import AnimatedSection from '@/components/animation/AnimatedSection'

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
  ],
  benefits: [
    {
      title: "Complete Control",
      description: "Own your data and infrastructure",
      icon: LockClosedIcon
    },
    {
      title: "Unlimited Customization",
      description: "Modify code to match your needs",
      icon: CogIcon
    },
    {
      title: "Data Security",
      description: "Host on your secure servers",
      icon: ShieldCheckIcon
    }
  ],
  features: {
    hiring: [
      {
        title: "Smart Job Posting",
        description: "Create and manage unlimited job postings",
        image: "/images/products/jugglehire/features/job-posting.png"
      },
      // ... more hiring features
    ],
    candidate: [
      {
        title: "Candidate Management",
        description: "Streamlined candidate tracking and evaluation",
        image: "/images/products/jugglehire/features/candidate-management.png"
      },
      // ... more candidate features
    ],
    collaboration: [
      // ... collaboration features
    ]
  },
  stats: [
    { label: "Happy Customers", value: "500+" },
    { label: "Countries", value: "40+" },
    { label: "Source Files", value: "100+" },
    { label: "Updates/Year", value: "12+" }
  ],
  faqs: {
    licensing: [
      {
        question: "What is the difference between Regular and Extended License?",
        answer: "The Regular License is perfect for companies managing their internal hiring process, while the Extended License is ideal for businesses offering recruitment services to clients."
      },
      {
        question: "Can I upgrade my license in the future?",
        answer: "Yes, you can upgrade your license at any time. Contact our sales team for more information."
      }
    ],
    technical: [
      {
        question: "What are the system requirements?",
        answer: "PHP 8.1+, MySQL 5.7+, Node.js 16+, Composer 2.0+"
      },
      {
        question: "How long is the support period?",
        answer: "The support period is one year from the date of purchase."
      }
    ],
    support: [
      {
        question: "What support channels are available?",
        answer: "You can contact our support team via email, phone, or through our online support portal."
      },
      {
        question: "How long is the response time for support requests?",
        answer: "Our support team aims to respond to support requests within 24 hours."
      }
    ]
  },
  licenses: [
    {
      name: 'Regular License',
      price: '$499',
      features: [
        'Perfect for internal hiring teams',
        'Free platform usage',
        'Complete source code',
        'Single domain deployment',
        'Technical documentation',
        'Basic support package',
        '6 months of updates'
      ]
    },
    {
      name: 'Extended License',
      price: '$1,499',
      features: [
        'Ideal for commercial deployment',
        'Charge users for platform access',
        'Complete source code',
        'Single domain deployment',
        'Technical documentation',
        'Priority support package',
        '12 months of updates',
        'Commercial use rights'
      ]
    }
  ]
}

// Add error boundaries for production
const ErrorBoundary = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return children;
  }

  try {
    return children;
  } catch (error) {
    console.error('Error:', error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};

// Using similar structure as the product detail page
export default function JuggleHirePage() {
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
    <ErrorBoundary>
      <div className="bg-white">
        {/* Hero Section with Product Visual */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left"
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  {product.description}
                </p>
              
                {/* Key Benefits */}
                <div className="mt-8 space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <benefit.icon className="h-6 w-6 text-primary-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-10 flex gap-x-6">
                  <Link
                    href="https://demo.jugglehire.com"
                    target="_blank"
                    className="rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500"
                  >
                    Try Live Demo
                  </Link>
                  <a
                    href="#pricing"
                    className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm ring-1 ring-primary-200 hover:bg-gray-50"
                  >
                    View Pricing
                  </a>
                </div>
              </motion.div>

              {/* Right Product Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <Image
                  priority
                  src="/images/products/jugglehire/hero.png"
                  alt="JuggleHire Dashboard"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              
                {/* Stats Overlay */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {product.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Licensing Section with Better Value Props */}
        <AnimatedSection>
          <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <motion.div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Choose Your License
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get started with the perfect license for your business needs
                </p>
              </motion.div>

              <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
                {product.licenses?.map((license, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 hover:shadow-2xl transition-shadow duration-300"
                  >
                    {/* Popular Badge for Extended License */}
                    {license.name === 'Extended License' && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="p-8 sm:p-10">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        {license.name}
                      </h3>
                      <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                        {license.price}
                        <span className="text-lg font-semibold text-gray-600 ml-2">one-time</span>
                      </div>
                      
                      {/* Best For Description */}
                      <p className="mt-4 text-sm text-gray-500">
                        {license.name === 'Regular License' 
                          ? 'Perfect for companies managing their internal hiring process'
                          : 'Ideal for businesses offering recruitment services to clients'}
                      </p>

                      <ul className="mt-8 space-y-4">
                        {license.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckIcon className="h-6 w-6 flex-shrink-0 text-primary-600" />
                            <span className="ml-3 text-base text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <button 
                          aria-label="Purchase Regular License"
                          className={`
                            w-full rounded-xl px-6 py-3 text-base font-semibold shadow-sm
                            ${license.name === 'Extended License'
                              ? 'bg-primary-600 text-white hover:bg-primary-500'
                              : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                            }
                          `}>
                          Purchase License
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features Showcase with Screenshots */}
        <AnimatedSection>
          <section className="py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Everything You Need to Streamline Hiring
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Powerful features designed to make recruitment effortless
                </p>
              </div>

              {/* Feature Categories */}
              {Object.entries(product.features).map(([category, features], categoryIndex) => (
                <div key={category} className="mt-24">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-16">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Features
                  </h3>

                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
                        index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                      }`}
                    >
                      <div className={index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="mt-4 text-gray-600">
                          {feature.description}
                        </p>
                        <ul className="mt-8 space-y-4">
                          {feature.benefits?.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                              <span className="ml-3 text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={800}
                          height={600}
                          className="rounded-xl shadow-xl"
                        />
                        {/* Feature highlight overlay */}
                        <div className="absolute inset-0 rounded-xl ring-1 ring-primary-500/20" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Technical Requirements with Better Visual Hierarchy */}
        <AnimatedSection>
          <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Details
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Everything you need to get started with JuggleHire
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* System Requirements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white p-8 shadow-lg"
                >
                  <ServerIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    System Requirements
                  </h3>
                  <ul className="mt-8 space-y-4">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-lg"
                >
                  <DocumentCheckIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    What's Included
                  </h3>
                  <ul className="mt-8 space-y-4">
                    {product.techSpecs.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Support & Updates */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl bg-white p-8 shadow-lg"
                >
                  <CogIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Support & Updates
                  </h3>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                      Technical documentation
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                      Email support
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                      Regular updates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                      Community access
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Enhanced FAQ Section with Interactivity */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <motion.div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Everything you need to know about JuggleHire Self-Hosted Version
                </p>
              </motion.div>

              <div className="mt-16 max-w-3xl mx-auto">
                <Tab.Group>
                  <Tab.List className="flex space-x-4 rounded-xl bg-gray-50 p-2 mb-8">
                    {['Licensing', 'Technical', 'Support'].map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                          `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                          ${selected
                            ? 'bg-white text-primary-600 shadow'
                            : 'text-gray-600 hover:text-primary-600'
                          }`
                        }
                      >
                        {category}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels>
                    {/* Licensing FAQs */}
                    <Tab.Panel>
                      <div className="space-y-6">
                        {product.faqs.licensing.map((faq, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl bg-gray-50 p-6 hover:bg-gray-100 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900">
                              {faq.question}
                            </h3>
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                          </motion.div>
                        ))}
                      </div>
                    </Tab.Panel>
                    {/* Similar panels for Technical and Support FAQs */}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Enhanced CTA Section with Social Proof */}
        <AnimatedSection>
          <section className="relative bg-gradient-to-b from-primary-600 to-primary-700 py-24">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="mt-4 text-lg text-primary-100">
                  Join hundreds of companies already using JuggleHire
                </p>

                {/* Social Proof */}
                <div className="mt-8 flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-primary-100">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">40+</div>
                    <div className="text-sm text-primary-100">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">4.9/5</div>
                    <div className="text-sm text-primary-100">Customer Rating</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <button className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 transition-colors">
                    Purchase Now
                  </button>
                  <Link
                    href="https://demo.jugglehire.com"
                    target="_blank" 
                    className="rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition-colors"
                  >
                    Try Live Demo
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex justify-center items-center gap-8">
                  <div className="flex items-center text-primary-100">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">Instant Access</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </ErrorBoundary>
  )
}