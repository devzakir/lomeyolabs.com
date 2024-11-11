import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import client components with proper loading states
const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100" />
})

const LogoCloud = dynamic(() => import('@/components/LogoCloud'))
const ProductSection = dynamic(() => import('@/components/ProductSection'))
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const CompanyStats = dynamic(() => import('@/components/CompanyStats'))
const AnimatedSection = dynamic(() => import('@/components/animation/AnimatedSection'))

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100" />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<div className="py-16" />}>
        <AnimatedSection>
          <LogoCloud />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<div className="py-24" />}>
        <AnimatedSection>
          <ProductSection />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<div className="py-24" />}>
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<div className="py-24" />}>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<div className="py-24" />}>
        <AnimatedSection>
          <CompanyStats />
        </AnimatedSection>
      </Suspense>
    </main>
  )
}

