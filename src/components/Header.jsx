'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const resources = [
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'License', href: '/license' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Customer Support', href: '/support' },
]

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-heading font-bold text-primary-600 hover:text-primary-700 transition-colors">
              LomeyoLabs
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/products" 
              className="text-sm font-medium text-neutral-dark hover:text-primary-500 transition-colors"
            >
              Our Products
            </Link>
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center text-sm font-medium text-neutral-dark hover:text-primary-500 transition-colors">
                Resources
                <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="py-2">
                    {resources.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              active ? 'bg-primary-50 text-primary-600' : 'text-neutral-dark'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Link href="/about" className="text-sm font-medium text-neutral-dark hover:text-primary-500 transition-colors">
              About Us
            </Link>
            <Link 
              href="/ui-bundle" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              UI Bundle
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}