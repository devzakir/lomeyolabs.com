'use client'

import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'

export default function FAQ({ faqs }) {
  const categories = Object.keys(faqs)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-200 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-primary-900/[0.02] bg-[size:20px_20px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Support & Documentation
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our products
          </p>
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Tab.Group>
            <Tab.List className="flex space-x-2 rounded-2xl bg-white p-2 shadow-lg shadow-gray-200/50 mb-12">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    `w-full rounded-xl py-3 px-6 text-sm font-medium leading-5 capitalize
                    transition-all duration-200 ease-out
                    ${selected
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {categories.map((category) => (
                <Tab.Panel key={category}>
                  <div className="space-y-6">
                    {faqs[category].map((faq, index) => (
                      <motion.div
                        key={index}
                        className="group rounded-2xl bg-white border border-gray-100 
                        hover:border-primary-100 p-8 shadow-lg hover:shadow-xl 
                        transition-all duration-300 hover:bg-gradient-to-br 
                        hover:from-white hover:to-primary-50/30"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 
                              transition-colors duration-200 mb-3">
                              {faq.question}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Optional: Add a support CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="mt-4 inline-flex items-center text-primary-600 font-semibold hover:text-primary-500"
          >
            Contact Support
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 