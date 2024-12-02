import { motion } from 'framer-motion'
import { ServerIcon, DocumentCheckIcon, CheckIcon } from '@heroicons/react/24/solid'

export default function TechnicalSpecs({ title, subtitle, requirements, includes }) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/[0.03] bg-[size:20px_20px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 rounded-xl">
                <ServerIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">System Requirements</h3>
            </div>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Documentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 rounded-xl">
                <DocumentCheckIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Support & Documentation</h3>
            </div>
            <ul className="space-y-4">
              {includes.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 