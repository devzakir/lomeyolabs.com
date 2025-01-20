'use client'

import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

const menuItems = {
  main: [
    { name: 'RecruitX', href: '/products/recruitx' },
    { name: 'Jobpilot', href: '/products/jobpilot' },
    { name: 'Adlisting', href: '/products/adlisting' },
    { name: 'Schooling', href: '/products/schooling' },
  ],
  resources: [
    { name: 'Documentation', href: 'https://templatecookie.com/docs' },
    { name: 'Customer Support', href: 'https://templatecookie.com/get-support' },
    { name: 'Blog', href: 'https://templatecookie.com/blog' },
    { name: 'Contact Us', href: 'https://templatecookie.com/contact-us' },
  ]
}

export default function Header() {
  const { user } = useAuth()
  const pathname = usePathname()

  // Update quick links to be conditional based on auth state
  const getQuickLinks = () => {
    if (user) {
      return [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Create Support Ticket', href: '/dashboard/tickets/create' },
        { name: 'Documentation', href: '/docs' },
      ]
    }
    return [
      { name: 'Login', href: '/login' },
      { name: 'Documentation', href: '/docs' },
    ]
  }

  const isActive = (href) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <div className="relative isolate bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-2.5 sm:px-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            {/* Banner Text - Left Side */}
            <div className="flex-shrink-0">
              <p className="text-sm leading-6 text-white">
                We're transitioning from Templatecookie to LomeyoLabs, a Lomeyo LLC brand.
                {/* Templatecookie is now LomeyoLabs, a Lomeyo LLC brand. Same great products and team! */}
              </p>
            </div>

            {/* Quick Links - Right Side */}
            <div className="flex items-center gap-4">
              <nav className="flex items-center gap-x-4">
                {/* Desktop Quick Links */}
                <div className="hidden sm:flex items-center gap-4 border-l border-white/30 pl-4">
                  {getQuickLinks().map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-xs font-medium text-white hover:text-white/80 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Quick Links - Single Button */}
                <div className="sm:hidden">
                  <Link
                    href={user ? '/dashboard' : '/login'}
                    className="text-xs font-medium text-white hover:text-white/80 transition-colors duration-300"
                  >
                    {user ? 'Dashboard' : 'Login'}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <header className="z-50 w-full bg-white backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-5">
            <div className="flex items-center">
              <Link href="/" className="group flex items-center transition-all duration-300">
                <Image
                  src="/lomeyolabs-light.svg"
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
                  className={`group relative text-base font-medium transition-all duration-300
                    ${isActive(item.href) 
                      ? 'text-primary-600' 
                      : 'text-gray-600 hover:text-primary-600'
                    }`}
                >
                  {item.name}
                  <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary transition-transform duration-300
                    ${isActive(item.href) 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </Link>
              ))}

              {/* <Menu as="div" className="relative inline-block text-left">
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
              </Menu> */}

              <div className="flex items-center gap-4">
                {user ? (
                  <Link 
                    href="/dashboard" 
                    className={`bg-gradient-to-r from-primary-600 to-primary-500 
                      inline-flex items-center justify-center px-6 py-2.5 
                      text-base font-medium text-white rounded-lg overflow-hidden 
                      transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                      ${isActive('/dashboard') ? 'ring-2 ring-primary-300' : ''}`}
                  >
                    <span className="relative z-10">Dashboard</span>
                  </Link>
                ) : (
                  <Link 
                    href="/login" 
                    className={`bg-gradient-to-r from-primary-600 to-primary-500 
                      inline-flex items-center justify-center px-6 py-2.5 
                      text-base font-medium text-white rounded-lg overflow-hidden 
                      transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                      ${isActive('/login') ? 'ring-2 ring-primary-300' : ''}`}
                  >
                    <span className="relative z-10">Login</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <div>
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 focus:outline-none">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>

                    <Transition
                      show={open}
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
                            <div key={item.name}>
                              <Link
                                href={item.href}
                                className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300
                                  ${isActive(item.href)
                                    ? 'bg-primary-50 text-primary-600'
                                    : 'text-dark/80 hover:text-primary-600 hover:bg-primary/5'
                                  }`}
                              >
                                {item.name}
                              </Link>
                            </div>
                          ))}

                          <Disclosure as="div">
                            {({ open }) => (
                              <div>
                                <Disclosure.Button className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-dark/80 hover:text-primary rounded-lg hover:bg-primary/5">
                                  <span>Resources</span>
                                  <ChevronDownIcon
                                    className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform duration-300`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="mt-2 space-y-2 pl-6">
                                  {menuItems.resources.map((item) => (
                                    <div key={item.name}>
                                      <Link
                                        href={item.href}
                                        className="block px-3 py-2 text-base font-medium text-dark/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300"
                                      >
                                        {item.name}
                                      </Link>
                                    </div>
                                  ))}
                                </Disclosure.Panel>
                              </div>
                            )}
                          </Disclosure>
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
    </>
  )
}