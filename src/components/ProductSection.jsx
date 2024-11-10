'use client'

import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Taskify - Project Management System',
    description: 'Complete project management solution with team collaboration features',
    image: 'https://templatecookie.com/storage/image/1710224864_65eff5e06cdb1.png',
    price: '$49',
    features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Project Reports'],
    category: 'PHP Scripts'
  },
  {
    id: 2,
    name: 'SchoolSync - School Management',
    description: 'Comprehensive school management system with student portal',
    image: 'https://templatecookie.com/storage/image/1710224877_65eff5eddffea.png',
    price: '$59',
    features: ['Student Management', 'Attendance System', 'Grade Management', 'Online Classes'],
    category: 'PHP Scripts'
  },
  {
    id: 3,
    name: 'InvoicePro - Billing System',
    description: 'Professional invoicing and billing management system',
    image: 'https://templatecookie.com/storage/image/1709116010_65df0a6a0d900.png',
    price: '$39',
    features: ['Invoice Generation', 'Payment Tracking', 'Client Management', 'Financial Reports'],
    category: 'PHP Scripts'
  },
  {
    id: 5,
    name: 'Dashify Admin Template',
    description: 'Modern admin dashboard UI kit with dark mode',
    image: 'https://templatecookie.com/storage/image/1709115481_65df08597076f.jpg',
    price: '$29',
    features: ['100+ Components', 'Dark Mode', 'Responsive Design', 'Documentation'],
    category: 'Figma Templates'
  },
  {
    id: 6,
    name: 'EduLearn LMS Template',
    description: 'Complete learning management system UI kit',
    image: 'https://templatecookie.com/storage/image/1710224864_65eff5e06cdb1.png',
    price: '$35',
    features: ['Course Pages', 'Student Dashboard', 'Instructor Portal', 'Assessment UI'],
    category: 'Figma Templates'
  },
  {
    id: 7,
    name: 'SaaS Landing UI Kit',
    description: 'Modern SaaS product landing page template',
    image: 'https://templatecookie.com/storage/image/1710224877_65eff5eddffea.png',
    price: '$25',
    features: ['Landing Pages', 'Pricing Tables', 'Feature Sections', 'Blog Templates'],
    category: 'Figma Templates'
  },
]

export default function ProductSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Awesome Line of Problem-Solving Products
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-dark/80">
            Lomeyo Labs saves you time and resources to build and scale fast!
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-neutral-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-neutral-dark group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-primary-600">
                      {product.price}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-neutral-dark/80">
                    {product.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex justify-center space-x-6">
            <Link
              href="/products/php-scripts"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              View All PHP Scripts
            </Link>
            <Link
              href="/products/figma-templates"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl bg-neutral-light text-neutral-dark hover:bg-primary-50 transition-colors"
            >
              View All Figma Templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 