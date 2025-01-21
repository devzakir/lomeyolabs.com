'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function JuggleHirePricing({ 
  title,
  subtitle,
  nonSaasLicenses = [],
  saasLicenses = []
}) {
  const [isSaas, setIsSaas] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {subtitle}
          </p>

          {/* License Type Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full bg-primary-100/20 p-1.5 border border-primary-200">
            <button
              onClick={() => setIsSaas(false)}
              className={`${
                !isSaas
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                  : 'text-primary-700 hover:text-primary-800 hover:bg-primary-50'
              } rounded-full px-8 py-3 text-sm font-medium transition-all duration-200`}
            >
              Non-SaaS Version
            </button>
            <button
              onClick={() => setIsSaas(true)}
              className={`${
                isSaas
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                  : 'text-primary-700 hover:text-primary-800 hover:bg-primary-50'
              } rounded-full px-8 py-3 text-sm font-medium transition-all duration-200`}
            >
              SaaS Version
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
          {(isSaas ? saasLicenses : nonSaasLicenses).map((license, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col rounded-3xl ${
                license.recommended 
                  ? 'bg-primary-900 text-white ring-2 ring-primary-500' 
                  : 'bg-white ring-1 ring-gray-200'
              } p-8 shadow-xl transition-all duration-300 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {license.recommended && (
                <div className="absolute -top-4 right-8">
                  <div className="rounded-full bg-primary-500 px-4 py-1 text-xs font-semibold text-white">
                    Recommended
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${
                  license.recommended ? 'text-white' : 'text-gray-900'
                }`}>
                  {license.name}
                </h3>
                <p className={`mt-2 text-base ${
                  license.recommended ? 'text-primary-100' : 'text-gray-600'
                }`}>
                  {license.description}
                </p>
                <p className={`mt-4 text-4xl font-bold tracking-tight ${
                  license.recommended ? 'text-white' : 'text-gray-900'
                }`}>
                  {license.price} <span className="text-sm font-normal">one-time</span>
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {license.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckIcon className={`h-5 w-5 flex-shrink-0 ${
                      license.recommended ? 'text-primary-300' : 'text-primary-600'
                    } mr-3`} />
                    <span className={
                      license.recommended ? 'text-primary-100' : 'text-gray-600'
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={license.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-xl px-6 py-4 text-base font-semibold shadow-sm transition-all duration-200 text-center ${
                  license.recommended
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-500'
                }`}
              >
                {license.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 