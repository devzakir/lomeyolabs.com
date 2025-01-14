'use client'

import { StarIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

export default function Testimonials({ 
  title = "Hear from the People Who Trust LomeyoLabs",
  subtitle = "What our customers are saying",
  items = []
}) {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 opacity-10" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl mb-4"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {items.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex flex-col items-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  className="mx-auto h-24 w-24 rounded-full ring-2 ring-white/20 transition-all duration-300 group-hover:ring-white/40"
                  src={testimonial.image || testimonial.avatar}
                  alt={testimonial.name || testimonial.author}
                />
              </div>
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
              )}
              <div className="text-lg font-medium text-white mb-1">
                {testimonial.name || testimonial.author}
              </div>
              <div className="text-sm text-gray-300 mb-4">
                {testimonial.role} {testimonial.company && `at ${testimonial.company}`}
              </div>
              <p className="text-base text-gray-200">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}