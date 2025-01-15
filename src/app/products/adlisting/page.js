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

const product = {
  name: 'Adlisting - Classified Ads PHP Script',
  category: 'PHP Scripts',
  description: 'Create stunning ad listing websites to buy/sell classified ads and generate revenues with Adlisting.',
  price: 'From $49',
  image: '/products/adlisting/hero.png',
  benefits: [
    {
      icon: ServerIcon,
      title: 'Built for Speed',
      description: 'Enjoy fast and seamless performance, even as your business grows.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure by Default',
      description: 'Your data and transactions are protected with the highest security measures.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Beautiful User Interface',
      description: 'Effortlessly navigate our intuitive and user-friendly platform.'
    },
    {
      icon: CogIcon,
      title: 'Premium Customization',
      description: 'Personalize your experience with our advanced customization options.'
    }
  ],
  features: {
    core: [
      {
        title: 'Category Custom Field',
        description: 'Create different properties for different types of listings.',
        image: '/products/adlisting/features-1.png',
        benefits: [
          'Customizable properties',
          'User-friendly interface',
          'Flexible listing options'
        ]
      },
      {
        title: 'Multiple Language & Currency',
        description: 'Support for multiple languages and currencies.',
        image: '/products/adlisting/features-2.png',
        benefits: [
          'Global reach',
          'User-friendly transactions',
          'Enhanced user experience'
        ]
      },
      {
        title: 'Google Map Integration',
        description: 'Integrate maps to show user/item locations.',
        image: '/products/adlisting/features-3.png',
        benefits: [
          'Easy location tracking',
          'Enhanced user engagement',
          'Improved visibility'
        ]
      }
    ]
  },
  licenses: [
    {
      name: 'Regular License',
      description: 'Perfect for Free Classified Ads',
      price: '$49',
      features: [
        'Full source code',
        '6 months support',
        'Single domain use',
        'Free updates',
        'Documentation access'
      ],
      buttonText: 'Purchase Regular License',
      href: 'https://codecanyon.net/item/adlisting-laravel-classified-ads/34961310'
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
        'Monetize your platform'
      ],
      buttonText: 'Purchase Extended License',
      href: 'https://codecanyon.net/item/adlisting-laravel-classified-ads/34961310',
      recommended: true
    }
  ],
  faqs: {
    'Technical': [
      {
        question: 'What technology stack is used?',
        answer: 'Adlisting is built with PHP, MySQL, and modern web technologies.'
      },
      {
        question: 'What security features are implemented?',
        answer: 'Includes data encryption, secure payment gateways, and user verification.'
      }
    ],
  },
  recentUpdates: [
    'New features added',
    'Performance optimizations',
    'Bug fixes and improvements'
  ],
}

// ... rest of the implementation follows similar structure to Jobpilot page ...

export default function AdlistingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">
            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              All-In-One Classified Ads Platform
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-200 font-medium mb-4">
              No Addon! All Features in a Single Script
            </h2>
            <p className="text-lg text-primary-200/80 mb-12 max-w-2xl">
              Create a powerful classified ads marketplace with Adlisting's self-hosted solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <motion.a 
                href="https://adlisting.templatecookie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-all duration-300"
              >
                Try Live Demo
              </motion.a>
              <motion.a 
                href="#pricing"
                className="inline-flex items-center rounded-xl bg-primary-800/60 backdrop-blur-sm border border-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-primary-800/80 transition-all duration-300"
              >
                View Pricing
              </motion.a>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16 relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-[16/9] relative">
              <Image
                src="https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/premium-products/adlisting/adlisting.png?t=2025-01-15T03%3A02%3A18.284Z"
                alt="Adlisting Dashboard Preview"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing 
        title="License Options"
        subtitle="Choose the perfect license for your business needs"
        licenses={product.licenses}
      />

      {/* FAQ Section */}
      <AnimatedSection>
        <FAQ 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Adlisting"
          categories={product.faqs}
        />
      </AnimatedSection>

      {/* Recent Updates Section */}
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
    </div>
  )
} 