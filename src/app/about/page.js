"use client";

import { motion } from 'framer-motion'

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

export default function About() {
  return (
    <main>
      <div>
        <div>
          <div className="relative overflow-hidden">
            <div aria-hidden="true" className="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]">
              </div>
              <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem]">
              </div>
            </div>
            <div className="relative z-10">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="max-w-2xl text-center mx-auto">
                  <h2 className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                    Web app development
                  </h2>
                  <div className="mt-5 max-w-2xl">
                    <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl capitalize">
                      Your Digital Partner for Success
                    </h1>
                  </div>
                  <div className="mt-5 max-w-3xl">
                    <p className="text-lg text-gray-600 mb-4">At Templatecookie, we believe in the transformative
                      power of digital solutions. We are more than a web and software development company; we
                      are your trusted partner on the journey to success. Our mission is to empower
                      businesses, both large and small, with innovative technology that drives growth,
                      efficiency, and user satisfaction.</p>
                    <p className="text-lg text-gray-600">With a strong commitment to quality and a dedicated team
                      of experts, Templatecookie is here to turn your digital dreams into reality. We pride
                      ourselves on being a reliable source for all your web development, software solutions,
                      and customization needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 py-16 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Proven Success Metrics</h2>
                  <p className="mt-4 text-lg leading-8 text-gray-300">These figures demonstrate our commitment and
                    experience.</p>
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col bg-white/5 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-300">Successful Projects</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">500+</dd>
                  </div>
                  <div className="flex flex-col bg-white/5 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-300">Client Satisfaction</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">98%</dd>
                  </div>
                  <div className="flex flex-col bg-white/5 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-300">Years of Experience</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">8+</dd>
                  </div>
                  <div className="flex flex-col bg-white/5 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-300">Countries Served</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">25+</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
              <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=2560&amp;h=3413&amp;&amp;q=80" alt="opu story" className="absolute inset-0 h-full w-full bg-gray-50 object-cover" />
                </div>
              </div>
              <div className="px-6 lg:contents">
                <div className="mx-auto max-w-2xl lg:pb-24 md:pb-16 pb-8 pt-8 md:pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                  <div className="lg:mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                    <p className="text-base font-semibold leading-7 text-primary">Our Story</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">The
                      Vision That Ignited a Journey</h2>
                    <p className="mt-6 text-xl leading-8 text-gray-700">Our journey began with a vision – a vision
                      to provide businesses with tailored digital solutions that make a difference. Founded in
                      Dhaka, Bangladesh, Templatecookie started as a small venture driven by the passion of
                      our CEO and Founder, Zakir. His deep-rooted belief in the potential of technology to
                      revolutionize businesses led to the birth of Templatecookie.</p>
                  </div>
                  <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                    <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">From
                      Vision to Milestones</h2>
                    <p className="mt-6">Years of dedication and innovation have fueled our growth. It's our
                      clients' success stories that inspire us. We've seen businesses thrive, entrepreneurs
                      succeed, and ideas take flight in every project.</p>
                    <p className="mt-6">At Templatecookie, our team shares a vision with Zakir. We're more than
                      developers; we're dreamers, creators, and your partners in the digital journey,
                      dedicated to making every project a success.</p>
                  </div>
                  <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                    <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our
                      Commitment to You</h2>
                    <p className="mt-8">At Templatecookie, we're guided by core values that define our approach:</p>
                    <ul className="list-disc pl-5 mt-4">
                      <li>Commitment to Excellence</li>
                      <li>Ensuring Your Satisfaction</li>
                      <li>Embracing Continuous Improvement</li>
                      <li>Fueled by Innovation</li>
                    </ul>
                    <p className="mt-6">We're dedicated to your success. As we move forward, we're excited to
                      create more success stories and empower businesses in the digital age. Welcome to the
                      Templatecookie family, where your vision is our mission.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 py-8 sm:py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Team Expertise</h2>
                <p className="my-6 text-lg leading-8 text-gray-300">Our team of highly skilled developers specializes
                  in Custom software and website development. With years of experience, they possess in-depth
                  knowledge of our products and are committed to delivering exceptional support.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
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
          </div>
          <div className="mx-auto lg:my-32 sm:my-16 my-8 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
            </div>
            <dl className="mx-auto md:mt-16 mt-8 grid max-w-2xl grid-cols-1 gap-x-8 lg:gap-y-16 sm:gap-y-8 gap-y-4 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Excellence</dt>
                <dd className="mt-1 text-gray-700">We demand the utmost, delivering perfection every time.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Client Satisfaction</dt>
                <dd className="mt-1 text-gray-700">Your happiness fuels our purpose, making your success our mission.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Innovation</dt>
                <dd className="mt-1 text-gray-700">We enthusiastically embrace change, pioneering progress continuously.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Collaboration</dt>
                <dd className="mt-1 text-gray-700">Together, we create lasting greatness, rooted in teamwork.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Integrity</dt>
                <dd className="mt-1 text-gray-700">Trust is paramount in everything we do, underpinned by transparency
                  and unwavering honesty.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Passion</dt>
                <dd className="mt-1 text-gray-700">Our work is our boundless passion, igniting drive, and creative
                  fervor.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Continuous Learning</dt>
                <dd className="mt-1 text-gray-700">In an ever-changing world, we evolve, adapt, and learn.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 text-lg">Community</dt>
                <dd className="mt-1 text-gray-700">We give back, strengthen, uplift our local community wholeheartedly.</dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden bg-white lg:py-32 md:py-16 py-8 border-t">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Opportunities
                    and Get in Touch</h2>
                  <p className="mt-6 text-xl leading-8 text-gray-600">In this section, we invite you to take action.
                    Whether you're seeking to join our team or connect with us for your project, we're here to
                    make your vision a reality. Get to know us through snapshots of our team and the vibrant
                    working environment we thrive in. It's more than a workplace; it's where your journey to
                    success begins.</p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a href="https://lomeyo.com/career" target="_blank" className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary mr-4">Join
                      our team <span className="ml-2" aria-hidden="true">→</span></a>
                    <a href="/contact-us" className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-dark px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">Contact
                      us <span className="ml-2" aria-hidden="true">→</span></a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <img src="https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/teams/about-us-team001.png?t=2025-01-15T04%3A52%3A18.411Z" alt="Team Environment" className="aspect-[7/5] 2xl:w-[37rem] w-full rounded-2xl bg-gray-50 object-cover" />
                </div>
              </div>
              <div className="flex flex-col overflow-hidden 2xl:overflow-visible lg:flex-row lg:items-end gap-8 mt-8 2xl:-ml-52">
                <img src="https://templatecookie.com/asset/team-env/2.png" alt="Team Environment" className="aspect-[4/3] lg:w-[24rem] w-full flex-none rounded-2xl bg-gray-50 object-cover" />
                <img src="https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/teams/about-us-team002.png?t=2025-01-15T04%3A52%3A37.165Z" alt="Team Environment" className="aspect-[7/5] lg:w-[37rem] w-full flex-none rounded-2xl bg-gray-50 object-cover" />
                <img src="https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/images/teams/about-us-team003.png?t=2025-01-15T04%3A52%3A49.515Z" alt="Team Environment" className="aspect-[4/3] 2xl:w-[24rem] lg:hidden 2xl:block self-start w-full rounded-2xl bg-gray-50 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 