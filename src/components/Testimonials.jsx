'use client'

import { StarIcon } from '@heroicons/react/20/solid'

const testimonials = [
  {
    name: 'John Anderson',
    role: 'Frontend Developer',
    content: 'The code quality and documentation are exceptional. Saved weeks of development time!',
    rating: 5,
    image: '/avatars/avatar-1.png'
  },
  {
    name: 'Sarah Miller',
    role: 'Product Manager',
    content: 'Incredibly well-structured and easy to customize. Perfect for our project needs.',
    rating: 5,
    image: '/avatars/avatar-2.png'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Lead',
    content: 'Outstanding support and clean code. Best investment for our development team.',
    rating: 5,
    image: '/avatars/avatar-3.png'
  }
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Hear from the People Who Trust Lomeyo Labs
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  className="mx-auto h-24 w-24 rounded-full bg-neutral-light"
                  src={testimonial.image}
                  alt=""
                />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-primary-600" aria-hidden="true" />
                ))}
              </div>
              <div className="text-lg font-medium text-neutral-dark">{testimonial.name}</div>
              <div className="text-sm text-neutral-dark/60 mb-4">{testimonial.role}</div>
              <p className="text-base text-neutral-dark/80">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 