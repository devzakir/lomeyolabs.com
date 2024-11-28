'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
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
  id: 12,
  name: 'RecruitX - Self-Hosted Recruitment System',
  description: 'Transform your hiring process with RecruitX\'s powerful self-hosted recruitment solution. Get complete control over your data, unlimited customization options, and the freedom to build your perfect hiring workflow.',
  image: '/products/recruitx/hero.png',
  price: 'From $499',
  category: 'PHP Scripts',
  targetAudience: [
    'Businesses seeking complete control over their recruitment process',
    'Developers building custom solutions for clients',
    'Entrepreneurs starting their own recruitment platform',
    'Organizations with specific data security requirements'
  ],
  benefits: [
    {
      icon: ShieldCheckIcon,
      title: 'Complete Control & Ownership',
      description: 'Full source code access, host on your own servers, maintain 100% data sovereignty'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Enterprise-Grade Features',
      description: 'Collaborative hiring tools, custom forms, advanced screening, and automated workflows'
    },
    {
      icon: CogIcon,
      title: 'Technical Freedom',
      description: 'Modify source code, integrate with existing systems, implement custom security'
    }
  ],
  features: {
    core: [
      {
        title: 'Streamlined Hiring Process',
        description: 'Everything you need for efficient recruitment in one place',
        image: '/products/recruitx/hiring.png',
        benefits: [
          'Easy job posting and management',
          'Custom application forms',
          'Advanced candidate filtering',
          'Collaborative hiring pipeline',
          'Interview scheduling',
          'Team communication tools',
          'Email integration',
          'Career page builder'
        ]
      },
      {
        title: 'Smart Candidate Management',
        description: 'Centralize and automate your candidate processing',
        image: '/products/recruitx/candidates.png',
        benefits: [
          'Centralized candidate profiles',
          'Automatic application processing',
          'Custom evaluation criteria',
          'Team feedback collection',
          'Interview scheduling',
          'Status tracking',
          'Automated communications',
          'Talent pool building'
        ]
      },
      {
        title: 'Professional Employer Branding',
        description: 'Build a strong employer brand to attract top talent',
        image: '/products/recruitx/branding.png',
        benefits: [
          'Customizable career pages',
          'Branded email communications',
          'Custom domain support',
          'Social media integration',
          'Mobile-responsive design',
          'Company culture showcase',
          'Job preview customization'
        ]
      }
    ]
  },
  whyChoose: [
    {
      icon: ShieldCheckIcon,
      title: 'Data Security & Privacy',
      items: [
        'Keep sensitive recruitment data on your servers',
        'Implement your security protocols',
        'Ensure compliance with local regulations',
        'Maintain complete data sovereignty'
      ]
    },
    {
      icon: CogIcon,
      title: 'Customization Freedom',
      items: [
        'Modify any feature to match your workflow',
        'Add custom integrations',
        'Create unique candidate experiences',
        'Build specialized assessment tools',
        'Implement custom reporting'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'Cost-Effective Scaling',
      items: [
        'No per-user fees',
        'Scale without additional costs',
        'Add unlimited jobs and candidates',
        'Grow your team without restrictions'
      ]
    }
  ],
  techSpecs: {
    requirements: [
      'PHP 7.4+',
      'MySQL 5.7+',
      'Redis (optional)',
      'Minimum 2GB RAM',
      '10GB storage (recommended)'
    ],
    includes: [
      'Complete source code',
      'Technical documentation',
      'API documentation',
      'Installation guide',
      'Video tutorials',
      'Code comments',
      'Best practices guide',
      'Security recommendations'
    ]
  },
  support: {
    resources: [
      'Detailed installation guide',
      'Technical documentation',
      'API documentation',
      'Video tutorials',
      'Code comments',
      'Best practices guide',
      'Security recommendations'
    ],
    options: [
      'Basic email support',
      'Community forums',
      'Documentation access',
      'Optional premium support',
      'Custom development services'
    ]
  },
  faq: [
    {
      question: 'Can I modify the source code?',
      answer: 'Yes, both licenses include full source code access and modification rights.'
    },
    {
      question: 'What support is included?',
      answer: 'Both licenses include basic technical support and documentation access.'
    },
    {
      question: 'Can I resell the platform?',
      answer: 'The Extended License allows commercial use and charging users.'
    },
    {
      question: 'Are updates included?',
      answer: 'Regular License includes 6 months of updates, Extended includes 12 months.'
    },
    {
      question: 'Can I host multiple instances?',
      answer: 'Each license covers one domain. Additional licenses needed for multiple instances.'
    }
  ],
  selfHostBenefits: [
    {
      icon: LockClosedIcon,
      title: 'Complete Control & Ownership',
      items: [
        'Full source code access',
        'Host on your own servers',
        'Maintain 100% data sovereignty',
        'Customize every aspect of the platform',
        'Scale without restrictions'
      ]
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Enterprise-Grade Features',
      items: [
        'Collaborative hiring tools',
        'Custom application forms',
        'Advanced candidate screening',
        'Automated workflow management',
        'Branded career pages',
        'Team collaboration tools',
        'Interview scheduling',
        'Email integration',
        'Custom domain support'
      ]
    },
    {
      icon: CogIcon,
      title: 'Technical Freedom',
      items: [
        'Modify the source code to match your needs',
        'Integrate with your existing systems',
        'Implement custom security measures',
        'Add new features as needed',
        'Control your update schedule'
      ]
    }
  ],
  screenshots: [
    {
      image: '/products/recruitx/screenshot1.png',
      title: 'Streamlined Hiring Process',
      description: 'Everything you need for efficient recruitment in one place'
    },
    {
      image: '/products/recruitx/screenshot2.png',
      title: 'Smart Candidate Management',
      description: 'Centralize and automate your candidate processing'
    },
    {
      image: '/products/recruitx/screenshot3.png',
      title: 'Professional Employer Branding',
      description: 'Build a strong employer brand to attract top talent'
    }
  ],
  testimonials: [
    {
      avatar: '/products/recruitx/testimonial1.jpg',
      name: 'John Doe',
      role: 'HR Manager at Tech Corp',
      rating: 4.9,
      content: 'RecruitX has revolutionized our hiring process. It\'s easy to use and has helped us save time and resources.'
    },
    {
      avatar: '/products/recruitx/testimonial2.jpg',
      name: 'Jane Smith',
      role: 'Recruitment Consultant at HR Solutions',
      rating: 4.8,
      content: 'RecruitX has been a game-changer for our company. It\'s powerful and flexible, and we couldn\'t be happier with our decision.'
    },
    {
      avatar: '/products/recruitx/testimonial3.jpg',
      name: 'Bob Johnson',
      role: 'Founder at Startup Hub',
      rating: 4.7,
      content: 'RecruitX has been a great investment for our startup. It\'s helped us attract top talent and streamline our hiring process.'
    }
  ]
}

// Enhanced section styles with more variety
const sectionStyles = {
  // Fresh gradient backgrounds
  primary: "bg-gradient-to-br from-primary-50 via-white to-primary-50/30",
  secondary: "bg-gradient-to-br from-gray-50 via-white to-secondary-50/30",
  accent: "bg-gradient-to-br from-white via-primary-50/10 to-white",
  
  // Modern patterns
  pattern1: "bg-gradient-to-br from-primary-600/5 via-white to-primary-50/10",
  pattern2: "bg-gradient-to-br from-secondary-50/20 via-white to-primary-50/5",
  
  // Clean solid backgrounds with subtle overlays
  light: "bg-white bg-opacity-70 backdrop-blur-sm",
  dark: "bg-gray-50 bg-opacity-70 backdrop-blur-sm"
}

export default function RecruitXPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-24">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
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
            <p className="mt-6 text-xl text-neutral-dark/80">
              {product.description}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="inline-flex items-center rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white hover:bg-primary-700">
                Purchase Now - {product.price}
              </button>
              <button className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50">
                Try Live Demo
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-2xl">
              <Image
                src={product.image}
                alt={product.name}
                width={1920}
                height={1080}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Self-Host Section */}
      <AnimatedSection>
        <section className={`py-24 ${sectionStyles.pattern1} relative overflow-hidden`}>
          {/* Modern geometric patterns */}
          <div className="absolute inset-0 bg-grid-primary-900/[0.02] bg-[size:20px_20px]" />
          <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-secondary-100/30 to-transparent rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Self-Host RecruitX?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Take complete control of your recruitment infrastructure
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
              {product.selfHostBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <benefit.icon className="h-8 w-8 text-primary-600" />
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Features Section */}
      <AnimatedSection>
        <section className={`py-24 ${sectionStyles.accent} relative overflow-hidden`}>
          {/* Modern wave pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%230070f3' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 20px'
          }} />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Core Features
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need for efficient recruitment
              </p>
            </div>

            <div className="mt-16 space-y-24">
              {product.features.core.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col lg:flex-row gap-12 items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-8">
                        {feature.description}
                      </p>
                      <ul className="space-y-4">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                      className="rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Target Audience Section */}
      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Perfect For
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Designed for organizations that value control, security, and customization
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {product.targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl bg-white p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <UsersIcon className="h-6 w-6 text-primary-600 mt-1" />
                  <p className="text-lg text-gray-600">{audience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose RecruitX Section */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose RecruitX Self-Hosted?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Take control of your recruitment process with our powerful self-hosted solution
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
              {product.whyChoose.map((reason, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <reason.icon className="h-8 w-8 text-primary-600" />
                    <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {reason.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Technical Specifications Section */}
      <AnimatedSection>
        <section className={`py-24 ${sectionStyles.pattern2} relative overflow-hidden`}>
          {/* Dotted pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,112,243,0.05) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
          
          {/* Modern floating elements */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-tl from-secondary-100/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Technical Specifications
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Built with modern technologies for reliability and scalability
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Requirements */}
              <motion.div
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <ServerIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Deployment Requirements</h3>
                </div>
                <ul className="space-y-4">
                  {product.techSpecs.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Included Resources */}
              <motion.div
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <DocumentCheckIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">What's Included</h3>
                </div>
                <ul className="space-y-4">
                  {product.techSpecs.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Product Screenshots */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Beautiful Interface, Powerful Features
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Take a look at RecruitX's intuitive interface and powerful features
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {product.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white">{screenshot.title}</h3>
                      <p className="text-sm text-white/80">{screenshot.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Customer Testimonials */}
      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Recruiters Worldwide
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                See what our customers say about RecruitX
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {product.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-2xl bg-white p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Money-Back Guarantee */}
      <AnimatedSection>
        <section className="py-16 bg-primary-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h2>
                <p className="text-primary-100">
                  Try RecruitX risk-free. If you're not completely satisfied, we'll refund your purchase.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="#pricing"
                  className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white hover:bg-primary-400"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Support & Documentation Section */}
      <AnimatedSection>
        <section className={`py-24 ${sectionStyles.primary} relative overflow-hidden`}>
          {/* Diagonal lines pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(0,112,243,0.03) 25%, transparent 25%, transparent 75%, rgba(0,112,243,0.03) 75%, rgba(0,112,243,0.03)), 
            linear-gradient(45deg, rgba(0,112,243,0.03) 25%, transparent 25%, transparent 75%, rgba(0,112,243,0.03) 75%, rgba(0,112,243,0.03))`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }} />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Support & Documentation
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to get started and succeed
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Resources */}
              <motion.div
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <DocumentTextIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Included Resources</h3>
                </div>
                <ul className="space-y-4">
                  {product.support.resources.map((resource, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                      <span className="text-gray-600">{resource}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support Options */}
              <motion.div
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Support Options</h3>
                </div>
                <ul className="space-y-4">
                  {product.support.options.map((option, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary-600 mt-1" />
                      <span className="text-gray-600">{option}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className={`py-24 ${sectionStyles.dark} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-primary-900/[0.02] bg-[size:20px_20px]" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know about RecruitX Self-Hosted
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {product.faq.map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced CTA Section */}
      <AnimatedSection>
        <section className="relative py-24 overflow-hidden">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary-400 rounded-full blur-3xl opacity-20" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-300 rounded-full blur-3xl opacity-20" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h2 
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Hiring Process?
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-primary-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Take control of your recruitment process with RecruitX Self-Hosted
              </motion.p>

              {/* Steps with modern design */}
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {[
                  { number: '1', title: 'Try the Demo', desc: 'Experience the full platform' },
                  { number: '2', title: 'Choose License', desc: 'Select your perfect plan' },
                  { number: '3', title: 'Deploy & Launch', desc: 'Get up and running quickly' }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold">
                      {step.number}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-primary-100">{step.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trust Metrics with modern design */}
              <div className="mt-12 flex justify-center space-x-12">
                {[
                  { number: '500+', label: 'Happy Customers' },
                  { number: '40+', label: 'Countries' },
                  { number: '4.9/5', label: 'Customer Rating' }
                ].map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-white">{metric.number}</div>
                    <div className="text-sm text-primary-100">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons with modern design */}
              <div className="mt-12 flex justify-center gap-4">
                <motion.button 
                  className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-colors duration-200 shadow-lg shadow-primary-900/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Purchase Now
                </motion.button>
                <motion.a
                  href="https://demo.recruitx.com"
                  target="_blank"
                  className="rounded-xl bg-primary-500/20 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-primary-500/30 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Try Live Demo
                </motion.a>
              </div>

              {/* Trust Badges with modern design */}
              <div className="mt-12 flex justify-center items-center gap-8">
                {[
                  { icon: ShieldCheckIcon, text: 'Secure Payment' },
                  { icon: ClockIcon, text: 'Instant Access' },
                  { icon: ChatBubbleBottomCenterTextIcon, text: '24/7 Support' }
                ].map((badge, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center text-primary-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <badge.icon className="h-5 w-5 mr-2" />
                    <span className="text-sm">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
} 