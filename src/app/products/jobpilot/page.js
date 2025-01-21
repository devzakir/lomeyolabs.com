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
  name: 'Jobpilot - Job Board & Recruitment Platform',
  category: 'PHP Scripts',
  description: 'Transform your hiring process with Jobpilot\'s powerful recruitment solution. A complete job board and applicant tracking system with modern features and unlimited customization options.',
  price: 'From $69',
  image: '/products/jobpilot/hero.png',
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
  coreFeatures: [
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
  ],
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
      description: 'Perfect for Free Job Boards',
      price: '$69',
      features: [
        'Full source code',
        '6 months support',
        'Single domain use',
        'Free updates',
        'Documentation access',
        'Let users use platform free of charge'
      ],
      buttonText: 'Purchase Regular License',
      href: 'https://codecanyon.net/item/jobpilot-job-portal-laravel-script/37897822'
    },
    {
      name: 'Extended License',
      description: 'Perfect for Commercial Use',
      price: '$199',
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
      href: 'https://codecanyon.net/item/jobpilot-job-portal-laravel-script/37897822',
      recommended: true
    }
  ],
  faqs: {
    'Technical': [
      {
        question: 'What technology stack is used?',
        answer: 'Jobpilot is built with Laravel 10, jquery 3.2, and MySQL, following modern development practices and patterns.'
      },
      {
        question: 'What development tools are included?',
        answer: 'Includes Laravel Debugbar, Telescope, PHPUnit/Pest for testing, and Laravel Pint for code styling to ensure high code quality.'
      },
      {
        question: 'What security features are implemented?',
        answer: 'Features Laravel Sanctum/Passport for authentication, XSS prevention, reCAPTCHA, and comprehensive error tracking.'
      },
      {
        question: 'What frontend technologies are used?',
        answer: 'Uses Vite, TailwindCSS, and modern JavaScript libraries for data visualization, file uploads, and user onboarding.'
      }
    ],
    'Licensing': [
      {
        question: 'What\'s included in the regular license?',
        answer: 'The regular license includes single installation, 6 months support, and all core features.'
      },
      {
        question: 'Can I modify the source code?',
        answer: 'Yes, both licenses include full source code access and modification rights.'
      },
      {
        question: 'Can I resell the platform?',
        answer: 'No, You can not resell the platform or the source code. However, you can charge users for platform access.'
      },
      {
        question: 'Are updates included?',
        answer: '6 months of updates included with both licenses. However, currently our product are unable to be updated, causing bugs and security issues.'
      },
      {
        question: 'Can I host multiple instances?',
        answer: 'Each license covers one domain. Additional licenses needed for multiple instances.'
      },
      {
        question: 'Can I upgrade my license later?',
        answer: 'Yes, you can upgrade from regular to extended license by paying the difference.'
      }
    ]
  },
  perfectFor: [
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
  ],
  features: {
    jobSeekers: {
      title: 'For Job Seekers',
      features: [
        'Beautiful, intuitive dashboard',
        'Advanced job search with filters',
        'Company search & filtering',
        'Professional profile management',
        'Resume & cover letter submissions',
        'Real-time employer chat',
        'Job bookmarking system',
        'Smart job alerts',
        'Mobile-responsive experience'
      ]
    },
    employers: {
      title: 'For Employers',
      features: [
        'Streamlined company dashboard',
        'Efficient job posting & management',
        'Comprehensive account settings',
        'Advanced candidate search',
        'Real-time candidate chat',
        'Custom application questions',
        'Candidate bookmarking',
        'Application tracking system',
        'Multiple pricing plans'
      ]
    }
  },
  administrativeFeatures: {
    title: 'Complete Management Solution',
    features: [
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
    ]
  },
  technicalExcellence: {
    title: 'Technical Excellence',
    features: [
      'SEO optimized structure',
      'Fully responsive design',
      'Clean, documented code',
      'Regular updates',
      'Modern Laravel framework',
      'Easy customization',
      'API support',
      'Performance optimized'
    ]
  },
  whyChooseFeatures: {
    sections: [
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
          'Candidate pipeline',
          'Payment gateway integration',
          'Team collaboration',
          'Dashboard reporting',
          'Integrate SMTP email service',
          'Location-based jobs'
        ]
      }
    ]
  },
  technicalRequirements: {
    title: 'Technical Requirements',
    requirements: [
      'PHP 7.4+',
      'MySQL 5.7+',
      'Redis (optional)',
      '2GB RAM minimum',
      '1vCPU minimum',
      '10GB storage recommended'
    ]
  },
  documentation: {
    title: 'Well-Documented & Supported',
    features: [
      'Detailed documentation',
      'Video tutorials',
      'Installation guides',
      'Regular updates',
      'Community support',
      'Professional assistance'
    ]
  },
  recentUpdates: [
    'Laravel 10 compatibility',
    'PWA integration',
    'Multiple homepage layouts',
    'Enhanced job search',
    'New payment gateways',
    'Performance optimizations'
  ],
  technicalSpecs: {
    title: 'Technical Requirements & Support',
    subtitle: 'Everything you need to get started with Jobpilot',
    requirements: [
      'PHP 7.4+',
      'MySQL 5.7+',
      'Redis (optional)',
      '2GB RAM minimum',
      '1vCPU minimum',
      '10GB storage recommended'
    ],
    includes: [
      'Detailed documentation',
      'Video tutorials',
      'Installation guides',
      'Regular updates',
      'Community support',
      'Professional assistance'
    ]
  }
}

// ... rest of the implementation follows similar structure to RecruitX page ... 

export default function JobpilotPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">
            {/* Version Tags */}
            <div className="flex gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-primary-800/60 px-4 py-1.5 text-sm font-medium text-primary-200">
                Big Update Released
              </span>
              <span className="inline-flex items-center rounded-full bg-primary-800/60 px-4 py-1.5 text-sm font-medium text-primary-200">
                Version 3
              </span>
            </div>

            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              All-In-One Job Portal Platform
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-200 font-medium mb-4">
              No Addon! All Features in a Single Script
            </h2>
            <p className="text-lg text-primary-200/80 mb-12 max-w-2xl">
              Create a powerful job marketplace with Jobpilot's self-hosted solution. Whether you're building a niche job board, developing client solutions, or launching an organizational career portal.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <motion.a 
                href="https://jobpilot.templatecookie.com"
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
            <div className="aspect-[16/9] relative">
              <Image
                src="https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/premium-products/jobpilot/jobpilot.png?t=2025-01-15T02%3A23%3A14.073Z"
                alt="Jobpilot Dashboard Preview"
                fill
                className="object-cover rounded-xl"
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

      {/* Core Features Section */}
      {/* <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Core Features
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to streamline your recruitment process
              </p>
            </motion.div>

            <div className="space-y-16">
              {product.coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="rounded-2xl bg-gradient-to-br from-white/50 to-gray-100/50 backdrop-blur-sm border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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

                  <div className="lg:w-1/2">
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
                        className="w-full h-auto rounded-xl"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection> */}

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

      {/* Connect Job Seekers & Employers Section */}
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
                Connect Job Seekers & Employers
              </h2>
              <p className="text-xl text-primary-200 max-w-3xl mx-auto">
                A seamless experience for both sides of the recruitment process
              </p>
            </motion.div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Job Seekers Card */}
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
                      {product.features.jobSeekers.title}
                    </h3>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {product.features.jobSeekers.features.map((feature, index) => (
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

              {/* Employers Card */}
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
                      {product.features.employers.title}
                    </h3>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {product.features.employers.features.map((feature, index) => (
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
              <h2 className="text-3xl font-bold">Why Choose Jobpilot?</h2>
              <p className="mt-4 text-lg text-primary-200">Trusted by 580+ customers worldwide</p>
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
                  { number: '600+', label: 'Happy Customers' },
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
                  Ready to Launch Your Job Portal?
                </h2>
                <p className="text-xl text-primary-100 mb-12">
                  Transform your job portal vision into reality with Jobpilot. 
                  Get started today with our affordable, feature-rich solution.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <motion.a
                    href="https://jobpilot.templatecookie.com"
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