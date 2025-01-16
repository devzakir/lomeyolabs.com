'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline'

const supportServices = [
  {
    title: 'Worry Free Recurring Tech Support',
    description: 'Let us handle the technical parts, you focus on the business. Say goodbye to technical headaches and experience top-notch assistance.',
  },
  {
    title: 'Swift Bug Fixes',
    description: 'Don’t let bugs slow you down. Our Elite Support ensures rapid bug resolution, keeping your scripts running smoothly.',
  },
  {
    title: 'Ongoing Maintenance',
    description: 'Leave the maintenance to us. We\'ll keep your scripts optimized and secure, so you can focus on what matters most.',
  },
  {
    title: 'Technical Guidance',
    description: 'Our experienced team will provide you with expert advice and solutions, helping you navigate complex technical issues effortlessly.',
  },
];

// Team members data
const teamMembers = [
  {
    name: 'Opu Shaha',
    role: 'Full Stack Developer',
    location: 'Narsingdi, Bangladesh',
    image: 'https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/teams/opu%20saha.jpg?t=2025-01-15T03%3A44%3A41.046Z',
  },
  {
    name: 'Md Khalil Uddin',
    role: 'Full Stack Developer',
    location: 'Nowakhali, Bangladesh',
    image: 'https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/teams/khalil.png?t=2025-01-15T03%3A44%3A01.951Z',
  },
  {
    name: 'Md. Abdul Awal',
    role: 'Full Stack Developer',
    location: 'Rajshahi, Bangladesh',
    image: 'https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/teams/awal.png?t=2025-01-15T03%3A49%3A03.931Z',
  },
];

// Pricing plans data
const pricingPlans = {
  monthly: [
    {
      title: 'Essential',
      description: 'Simplify Support, Fuel Your Progress',
      price: 49,
      features: [
        'Unlimited Bug Fixing',
        'Priority Support Within 24 Hours',
        'Quick Bug Fixing',
        'Access to Project Management Tool',
        'Automatic Upgrade To Latest Version (Must Have Cloud Hosting)',
      ],
      'purchase_link': 'https://buy.stripe.com/dR6g305pr4vQ2cM9AE'
    },
    {
      title: 'Startup',
      description: 'Elevate Your Support Experience, Unleash Your Potential.',
      price: 129,
      features: [
        'Unlimited Bug Fixing',
        'Priority Support within 12 Hours',
        'Access to Project Management Tool',
        'Cloud Installation & Server Maintenance',
        'Supported Up to 2 Projects',
        '5 hours included for modifications or new feature implementation',
        'Automatic Upgrade To Latest Version (Must Have Cloud Hosting)',
      ],
      'purchase_link': 'https://buy.stripe.com/5kA0425pr7I2aJi28b'
    },
    {
      title: 'Growth',
      description: 'Unmatched Support, Customized for Your Success.',
      price: 199,
      features: [
        'Unlimited Bug Fixing',
        'Priority Support within 12 Hours',
        'Access to Project Management Tool',
        'Access to WhatsApp Support',
        'Expert Technical Guidance',
        'Cloud Installation & Server Maintenance',
        '10 hours included for modifications or new feature implementation',
        'Automatic Upgrade To Latest Version (Must Have Cloud Hosting)',
      ],
      'purchase_link': 'https://buy.stripe.com/5kA0425pr7I2aJi28b'
    },
  ],
  annually: [
    {
      title: 'Essential',
      description: 'Simplify Support, Fuel Your Progress',
      price: 490, // Annual price
      features: [
        'Unlimited Bug Fixing',
        'Priority Support Within 24 Hours',
        'Quick Bug Fixing',
        'Access to Project Management Tool',
        'Automatic Upgrade To Latest Version (Must Have Cloud Hosting)',
      ],
      'purchase_link': 'https://buy.stripe.com/9AQeYWcRT0fAaJi146'
    },
    {
      title: 'Startup',
      description: 'Elevate Your Support Experience, Unleash Your Potential.',
      price: 1290, // Annual price
      features: [
        'Unlimited Bug Fixing',
        'Priority Support within 12 Hours',
        'Access to Project Management Tool',
        'Cloud Installation & Server Maintenance',
        'Supported Up to 2 Projects',
        '5 hours included for modifications or new feature implementation',
        'Automatic Upgrade To Latest Version (Must Have Cloud Hosting)',
      ],
      'purchase_link': 'https://buy.stripe.com/dR6g305pr4vQ2cM9AE'
    },
    {
      title: 'Growth',
      description: 'Unmatched Support, Customized for Your Success.',
      price: 1990, // Annual price
      features: [
        'Unlimited Bug Fixing',
        'Priority Support within 12 Hours',
        'Access to Project Management Tool',
        'Access to WhatsApp Support',
        'Expert Technical Guidance',
        'Cloud Installation & Server Maintenance',
        '10 hours included for modifications or new feature implementation',
        'Automatic Upgrade To Latest Version (Must Have Cloud Hosting)',
      ],
      'purchase_link': 'https://buy.stripe.com/5kA0425pr7I2aJi28b'
    },
  ],
};

const SupportPage = () => {
  const [isAnnual, setIsAnnual] = React.useState(false); // State for pricing plan

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Elite Support
          </h1>
          <p className="text-lg text-primary-200/80 mb-12 max-w-2xl">
            Supercharge your projects with Elite Support. Get expert assistance, personalized guidance, and lightning-fast bug fixing.
          </p>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <motion.div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-24 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Team Expertise</h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Our team of highly skilled developers specializes in Custom software and website development. With years of experience, they possess in-depth knowledge of our products and are committed to delivering exceptional support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-primary-900" 
                />
                <h3 className="text-xl font-semibold text-primary-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500">{member.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plan Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="flex justify-center mb-6">
            <button 
              className={`px-4 py-2 rounded-l-lg ${!isAnnual ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`} 
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-r-lg ${isAnnual ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`} 
              onClick={() => setIsAnnual(true)}
            >
              Annually
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isAnnual ? pricingPlans.annually : pricingPlans.monthly).map((plan, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-2 text-primary-600">{plan.title}</h3>
                <p className="text-xl font-semibold mb-4">${plan.price}/{isAnnual ? 'year' : 'month'}</p>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <ul className="text-left mb-4 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <CheckIcon className="w-5 h-5 text-primary-600 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-primary-700" onClick={() => window.open(plan.purchase_link, '_blank')}>Subscribe now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage; 