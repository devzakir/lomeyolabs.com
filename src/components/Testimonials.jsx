'use client'

import { StarIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'John Anderson',
    role: 'Frontend Developer',
    content: 'The code quality and documentation are exceptional. Saved weeks of development time!',
    rating: 5,
    image: 'https://via.placeholder.com/150' // Placeholder image
  },
  {
    name: 'Sarah Miller',
    role: 'Product Manager',
    content: 'Incredibly well-structured and easy to customize. Perfect for our project needs.',
    rating: 5,
    image: 'https://via.placeholder.com/150' // Placeholder image
  },
  {
    name: 'Michael Chen',
    role: 'Tech Lead',
    content: 'Outstanding support and clean code. Best investment for our development team.',
    rating: 5,
    image: 'https://via.placeholder.com/150' // Placeholder image
  }
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit.svg')]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl mb-4"
          >
            Hear from the People Who Trust LomeyoLabs
          </motion.h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
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
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <div className="text-lg font-medium text-white mb-1">{testimonial.name}</div>
              <div className="text-sm text-gray-300 mb-4">{testimonial.role}</div>
              <p className="text-base text-gray-200">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}