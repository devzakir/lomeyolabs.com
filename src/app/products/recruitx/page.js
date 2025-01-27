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
  LockClosedIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid'
import AnimatedSection from '@/components/animation/AnimatedSection'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Screenshots from '@/components/Screenshots'
import FAQ from '@/components/FAQ'
import TechnicalSpecs from '@/components/TechnicalSpecs'

// Product data
const product = {
  id: 12,
  name: 'Self-Hosted Recruitment Software for Small Businesses',
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
        image: '/recruitx/all-jobs.png',
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
        image: '/recruitx/candidate-inbox.png',
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
        image: '/recruitx/career-page.png',
        benefits: [
          'Customizable career pages',
          'Branded email communications',
          'Custom domain support',
          'Social media links',
          'Mobile-responsive design',
          'Company culture showcase',
          'Job preview image generation'
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
    title: "Technical Specifications & Support",
    subtitle: "Everything you need to get started with RecruitX",
    requirements: [
      'PHP 8.2+',
      'MySQL 8.0+',
      'Redis (optional)',
      'Minimum 2GB RAM',
      'Minimum 1vCPU',
      'Nginx or Apache',
      '20GB storage (recommended)'
    ],
    includes: [
      'Complete source code',
      'Technical documentation',
      'API documentation',
      'Installation guide',
      'Code comments',
      'Security recommendations',
      'Basic email support',
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our products",
    categories: {
      licensing: [
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
          answer: 'Each license covers one domain. Additional licenses needed for multiple instances. Purchase additional licenses if you need to host multiple instances.'
        },
        {
          question: 'What is the difference between Regular and Extended License?',
          answer: 'The Regular License is perfect for companies managing their internal hiring process, while the Extended License is ideal for businesses offering recruitment services to clients.'
        },
        {
          question: 'Can I upgrade my license in the future?',
          answer: 'Yes, you can upgrade your license at any time. Contact our support team for more information.'
        }
      ],
      technical: [
        {
          question: 'What technology or framework is used in RecruitX?',
          answer: 'Built with Laravel 10 (PHP 8.2) backend and modern frontend stack including TailwindCSS, Livewire 3, and essential JavaScript libraries for charts and file handling.'
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
      support: [
        {
          question: 'What support is included?',
          answer: 'Both licenses include basic technical support and documentation access.'
        },
        {
          question: 'Can I access a demo account?',
          answer: 'Yes, we have a public demo account that you can use to explore the application. No login required.'
        },
        {
          question: 'What support channels are available?',
          answer: 'You can contact our support team via email, or through our online support portal.'
        },
        {
          question: 'How long is the response time for support requests?',
          answer: 'Our support team aims to respond to support requests within 24 hours during weekdays.'
        }
      ]
    }
  },
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
  screenshots: {
    title: "Beautiful Interface, Powerful Features",
    subtitle: "Designed for modern recruitment teams",
    items: [
      {
        image: '/recruitx/all-jobs.png',
        title: 'All Jobs Management',
        description: 'Centralized dashboard to manage job postings, collaborate with team members, and control different job types with specific permissions'
      },
      {
        image: '/recruitx/brand-settings.png',
        title: 'Brand Control Panel',
        description: 'Customize every aspect of RecruitX - from logos and colors to favicons and company details, all from one intuitive interface'
      },
      {
        image: '/recruitx/candidate-inbox.png',
        title: 'Candidate Inbox',
        description: 'Efficiently manage hundreds of applications, communicate with candidates, and collaborate with your team in real-time'
      },
      {
        image: '/recruitx/career-page.png',
        title: 'Professional Career Page',
        description: 'Showcase your employer brand with a beautifully designed, fully customizable career page that attracts top talent'
      },
      {
        image: '/recruitx/job-posting.png',
        title: 'Smart Job Posting Wizard',
        description: 'Create compelling job posts, customize application forms, and set up screening questions - all in one streamlined workflow'
      },
      {
        image: '/recruitx/organization-settings.png',
        title: 'Organization Management',
        description: 'Complete control over career page settings, team member roles, and permissions with easy invite and management tools'
      }
    ]
  },
  testimonials: {
    title: "Hear from the People Who Trust Lomeyo Labs",
    subtitle: "What our customers are saying about RecruitX",
    items: [
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
  },
  pricing: {
    title: "Choose Your License",
    subtitle: "Select the perfect license for your recruitment needs",
    licenses: [
      {
        name: "Regular License",
        description: "Perfect for internal hiring teams",
        price: "$499",
        recommended: false,
        features: [
          "Free platform usage",
          "Complete source code",
          "Single domain deployment",
          "Technical documentation",
          "Basic support package",
          "6 months of updates",
        ],
        buttonText: "Purchase Regular License",
        href: "#" // Optional
      },
      {
        name: "Extended License",
        description: "Ideal for commercial use",
        price: "$1,499",
        recommended: true,
        features: [
          "Charge users for platform access",
          "Complete source code",
          "Single domain deployment",
          "Technical documentation",
          "Priority support package",
          "6 months of updates",
          "Commercial use rights"
        ],
        buttonText: "Purchase Extended License",
        href: "#" // Optional
      }
    ]
  }
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
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100/30 py-24">
        {/* Modern geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
          <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-secondary-100/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 mb-6">
              <SparklesIcon className="w-4 h-4 mr-2" />
              {product.category}
            </span>
            <h1 className="text-4xl font-heading font-bold tracking-normal text-gray-900 sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              {product.description}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/20"
              >
                Purchase Now - {product.price}
              </motion.a>
              <motion.a 
                href="https://recruitx.templatecookie.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg shadow-gray-200/50"
              >
                Try Live Demo
              </motion.a>
            </div>
          </motion.div>

          {/* YouTube Video with Custom Thumbnail */}
          <motion.div 
            className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl bg-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[16/9] relative">
              {/* Custom Thumbnail Overlay */}
              <div 
                className="absolute inset-0 z-10 bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center cursor-pointer group"
                onClick={() => {
                  const iframe = document.getElementById('youtube-player');
                  iframe.src += '&autoplay=1';
                  document.getElementById('thumbnail-overlay').style.display = 'none';
                }}
                id="thumbnail-overlay"
              >
                {/* Play Button */}
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-primary-600 border-b-[15px] border-b-transparent ml-2" />
                </div>
              </div>

              {/* YouTube Player (hidden initially) */}
              <iframe
                id="youtube-player"
                src="https://www.youtube.com/embed/yhrwj-L4uYw?start=50&modestbranding=1&controls=1&showinfo=0&rel=0&disablekb=1&playsinline=1"
                title="Product Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
            {/* Video Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </motion.div>
        </div>
      </section>

      {/* Why Self-Host Section */}
      <AnimatedSection>
        <section className={`py-24 bg-primary-900 text-white relative overflow-hidden`}>
          {/* Modern geometric patterns */}
          <div className="absolute inset-0 bg-grid-primary-900/[0.1] bg-[size:20px_20px]" />
          <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-700/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-secondary-700/30 to-transparent rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Self-Host RecruitX?
              </h2>
              <p className="mt-4 text-lg">
                Take complete control of your recruitment infrastructure
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
              {product.selfHostBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Card Container */}
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 to-primary-900/90 opacity-90" />
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                    
                    {/* Glowing Orb Effects */}
                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-primary-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-secondary-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

                    {/* Content Container */}
                    <div className="relative p-8">
                      {/* Icon Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="relative">
                          {/* Animated Glow Effect */}
                          <div className="absolute inset-0 bg-white rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300" />
                          <div className="relative p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-2xl">
                            <benefit.icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                          {benefit.title}
                        </h3>
                      </div>

                      {/* Benefits List */}
                      <ul className="space-y-4">
                        {benefit.items.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center gap-3 group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex-shrink-0">
                              <div className="p-1.5 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/10 group-hover/item:from-white/30 group-hover/item:to-white/20 transition-all duration-300">
                                <CheckIcon className="h-3.5 w-3.5 text-white" />
                              </div>
                            </div>
                            <span className="text-white/80 group-hover/item:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors duration-300" />
                    
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                href="#pricing"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
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

      {/* Target Audience Section - Perfect For */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary-400/20 to-transparent rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perfect For
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Designed for organizations that value control, security, and customization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Enterprise Companies",
                  description: "Large organizations requiring complete data control and customization",
                  icon: "/illustrations/building.svg",
                  gradient: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Government Agencies",
                  description: "Public sector organizations with strict security requirements",
                  icon: "/illustrations/public-service.svg",
                  gradient: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Healthcare Providers",
                  description: "Medical institutions needing HIPAA compliance and data privacy",
                  icon: "/illustrations/medical-care.svg",
                  gradient: "from-purple-500 to-pink-600"
                },
                {
                  title: "Tech Startups",
                  description: "Growing companies seeking scalable recruitment solutions",
                  icon: "/illustrations/working.svg",
                  gradient: "from-orange-500 to-red-600"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="group h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10`} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-8 flex flex-col h-full">
                      {/* Illustration */}
                      <div className="mb-6 flex justify-center">
                        <div className="w-32 h-32 relative">
                          <Image
                            src={card.icon}
                            alt={card.title}
                            width={128}
                            height={128}
                            className="transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-3 text-center">
                          {card.title}
                        </h3>
                        <p className="text-white/80 text-center">
                          {card.description}
                        </p>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Licensing Section */}
      <AnimatedSection>
        <Pricing {...product.pricing} />
      </AnimatedSection>

      {/* Testimonials Section */}
      {/* <AnimatedSection>
        <Testimonials {...product.testimonials} />
      </AnimatedSection> */}

      {/* Why Choose RecruitX Section */}
      <AnimatedSection>
        <section className="py-24 relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose RecruitX Self-Hosted?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Take control of your recruitment process with our powerful self-hosted solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.whyChoose.map((reason, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      {/* Icon Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary-100 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                          <div className="relative p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl">
                            <reason.icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {reason.title}
                        </h3>
                      </div>

                      {/* Feature List */}
                      <ul className="space-y-4">
                        {reason.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="p-1 bg-primary-100 rounded-full">
                                <CheckIcon className="h-4 w-4 text-primary-600" />
                              </div>
                            </div>
                            <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Border Gradient */}
                    <div className="absolute inset-0 border border-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Technical Specifications & Support Section - Combined */}
      <AnimatedSection>
        <TechnicalSpecs {...product.techSpecs} />
      </AnimatedSection>
      {/* Screenshots Section */}
      <AnimatedSection>
        <Screenshots {...product.screenshots} />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <FAQ {...product.faq} />
      </AnimatedSection>

      {/* Enhanced CTA Section */}
      <AnimatedSection>
        <section className="py-40 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-b from-primary-600 to-primary-700 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
              
              <div className="relative px-8 py-16 sm:px-16 sm:py-24">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to Transform Your Hiring Process?
                  </h2>
                  <p className="mt-4 text-lg text-primary-100">
                    Take control of your recruitment process with RecruitX Self-Hosted
                  </p>

                  {/* Trust Metrics */}
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

                  {/* CTA Buttons */}
                  <div className="mt-12 flex justify-center gap-4">
                    <motion.a 
                      href="#pricing"
                      className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-colors duration-200 shadow-lg shadow-primary-900/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      Purchase Now
                    </motion.a>
                    <motion.a
                      href="https://recruitx.templatecookie.com"
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

                  {/* Trust Badges */}
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
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
} 