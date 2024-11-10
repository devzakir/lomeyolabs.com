'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const menuItems = {
  main: [
    { name: 'Jobpilot', href: '/jobpilot' },
    { name: 'UI Bundle', href: '/ui-bundle' },
    { name: 'Free Templates', href: '/free-templates' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Customer Support', href: '/support' },
    { name: 'Blog', href: '/blog' },
    { name: 'License', href: '/license' },
    { name: 'Contact Us', href: '/contact' },
  ]
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-neutral-100/50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-5">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center transition-all duration-300">
              <Image
                src="/lomeyolabs-light.png"
                alt="LomeyoLabs"
                width={150}
                height={40}
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.main.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="group relative text-sm font-medium text-dark/80 hover:text-primary transition-all duration-300"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 transition-transform group-hover:scale-x-100" />
              </Link>
            ))}

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="group inline-flex items-center text-sm font-medium text-dark/80 hover:text-primary transition-all duration-300">
                Resources
                <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
              >
                <Menu.Items className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {menuItems.resources.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            href={item.href}
                            className={`group flex items-center rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ${
                              active ? 'bg-primary/5 text-primary' : 'text-dark/80 hover:text-dark'
                            }`}
                          >
                            {item.name}
                            <span className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              →
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Link 
              href="/products" 
              className="bg-gradient-to-r from-primary-600 to-primary-500 inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="relative z-10">Latest Products</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-dark/80 hover:bg-primary/5 hover:text-primary focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="absolute left-0 right-0 top-full bg-white shadow-lg border-t border-neutral-100/50 p-4">
                      <div className="space-y-4">
                        {menuItems.main.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-dark/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                        
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-dark/80 hover:text-primary rounded-lg hover:bg-primary/5">
                                <span>Resources</span>
                                <ChevronDownIcon
                                  className={`${
                                    open ? 'rotate-180' : ''
                                  } h-5 w-5 transition-transform duration-300`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="mt-2 space-y-2 pl-6">
                                {menuItems.resources.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-base font-medium text-dark/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        <Link
                          href="/products"
                          className="block w-full bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-center text-base font-medium text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          Latest Products
                        </Link>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </nav>
    </header>
  )
}