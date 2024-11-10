'use client'

import { BeakerIcon, UserGroupIcon, CurrencyDollarIcon, WrenchScrewdriverIcon, CodeBracketIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline'

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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Why Go for Lomeyo Labs' Products
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-dark/80">
            Here's why businesses prefer our products to solve their problems
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-neutral-light p-4">
                <feature.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-neutral-dark">{feature.title}</h3>
              <p className="mt-2 text-md text-neutral-dark/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 