'use client'

import { 
  CalendarIcon, 
  UsersIcon, 
  TrophyIcon,
  StarIcon,
  ShoppingCartIcon 
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const stats = [
  { 
    label: 'Level 6 Author', 
    value: 'Elite',
    icon: TrophyIcon,
    description: 'CodeCanyon rank',
    featured: true
  },
  { 
    label: 'Founded in', 
    value: '2022',
    icon: CalendarIcon,
    description: 'Started our journey'
  },
  { 
    label: 'Customers Served', 
    value: '500+',
    icon: UsersIcon,
    description: 'Happy clients worldwide'
  },
  { 
    label: 'Average Rating', 
    value: '4.5',
    icon: StarIcon,
    description: 'From 110+ reviews'
  },
  { 
    label: 'Total Sales', 
    value: '1200+',
    icon: ShoppingCartIcon,
    description: 'Trusted purchases'
  }
]

export default function CompanyStats() {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold tracking-tight text-dark sm:text-5xl">
            LomeyoLabs: Your Trusted Tech Partner
          </h2>
          <p className="mt-6 text-lg leading-8 text-dark/80">
            With a dedicated and skilled team, we've developed software products and collaborated with businesses to drive growth through tech-enabled solutions!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          {/* Featured Stat - Elite Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:row-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 p-8 box-border shadow-lg ring-1 ring-primary-400/20 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center h-full"
          >
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-8">
                <div className="rounded-2xl bg-white/90 backdrop-blur p-6 shadow-lg">
                  <TrophyIcon className="h-16 w-16 text-primary-600" />
                </div>
              </div>
              <div className="text-center">
                <dt className="text-5xl font-bold tracking-tight text-primary-900">
                  Level 6
                </dt>
                <dd className="mt-4 text-2xl font-medium text-primary-800">
                  Exclusive Author
                </dd>
                <p className="mt-4 text-lg text-primary-700">
                  CodeCanyon rank
                </p>
              </div>
            </div>
          </motion.div>

          {/* Other Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.slice(1).map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="rounded-xl bg-primary-50 p-4">
                    <stat.icon className="h-10 w-10 text-primary-600" />
                  </div>
                </div>
                <dt className="text-center text-3xl font-bold tracking-tight text-dark">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-center text-lg font-medium text-dark">
                  {stat.label}
                </dd>
                <p className="mt-2 text-center text-sm text-dark/60">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 