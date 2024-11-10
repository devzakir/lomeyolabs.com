// Remove 'use client' since this is a server component
import { Suspense } from 'react'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import ProductSection from '@/components/ProductSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CompanyStats from '@/components/CompanyStats'
import AnimatedSection from '@/components/animation/AnimatedSection'

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <AnimatedSection>
        <LogoCloud />
      </AnimatedSection>
      <AnimatedSection>
        <ProductSection />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <CompanyStats />
      </AnimatedSection>
    </>
  )
}

