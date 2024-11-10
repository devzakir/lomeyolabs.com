'use client'

import { BeakerIcon, UserGroupIcon, CurrencyDollarIcon, WrenchScrewdriverIcon, CodeBracketIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Cutting-Edge Tech',
    description: 'Built with the latest technology stack ensuring supreme security and scalability for your projects.',
    icon: BeakerIcon
  },
  {
    title: 'Human-Centric Design',
    description: 'User-friendly interfaces designed with modern trends and exceptional user experience in mind.',
    icon: UserGroupIcon
  },
  {
    title: 'Pay Once in a Lifetime',
    description: 'No recurring fees or subscriptions. Purchase once and enjoy lifetime updates and support.',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Easy to Customize',
    description: 'Flexible codebase that can be easily customized to match your specific project requirements.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: '100% Clean Code',
    description: 'Well-structured, documented code following best practices for easy maintenance and scalability.',
    icon: CodeBracketIcon
  },
  {
    title: 'Wide Range of Variety',
    description: 'Comprehensive collection of products across different categories to meet diverse project needs.',
    icon: Square3Stack3DIcon
  }
]

export default function WhyChooseUs() {
  return (
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
            Why Go for LomeyoLabs' Products
          </h2>
          <p className="mt-4 text-lg leading-8 text-dark/80">
            Here's why businesses prefer our products to solve their problems
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
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
  )
} 