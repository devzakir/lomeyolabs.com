'use client'

import { 
  CalendarIcon, 
  UsersIcon, 
  FolderIcon,
  TrophyIcon,
  StarIcon,
  ShoppingCartIcon,
  HeartIcon 
} from '@heroicons/react/24/solid'

const stats = [
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
    label: 'Projects & Products', 
    value: '50+',
    icon: FolderIcon,
    description: 'Solutions delivered'
  },
  { 
    label: 'Level 6 Author', 
    value: 'Elite',
    icon: TrophyIcon,
    description: 'CodeCanyon rank'
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
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold tracking-tight text-neutral-dark sm:text-5xl">
            Lomeyo Labs: Your Trusted Tech Partner
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-dark/80">
            With a dedicated and skilled team, we've developed software products and collaborated with businesses to drive growth through tech-enabled solutions!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-neutral-light/10 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-xl bg-primary-50 p-3">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <dt className="text-3xl font-bold tracking-tight text-neutral-dark">
                {stat.value}
              </dt>
              <dd className="mt-1 text-base font-medium text-neutral-dark">
                {stat.label}
              </dd>
              <p className="mt-1 text-sm text-neutral-dark/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 