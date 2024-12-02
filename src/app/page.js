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

const defaultTestimonials = {
  title: "Hear from the People Who Trust Lomeyo Labs",
  subtitle: "What our customers are saying",
  items: [
    {
      name: "John Anderson",
      role: "Frontend Developer",
      content: "The code quality and documentation are exceptional. Saved weeks of development time!",
      rating: 5,
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Sarah Miller",
      role: "Product Manager",
      content: "Incredibly well-structured and easy to customize. Perfect for our project needs.",
      rating: 5,
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      content: "Outstanding support and clean code. Best investment for our development team.",
      rating: 5,
      image: "https://via.placeholder.com/150"
    }
  ]
}

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
          <Testimonials {...defaultTestimonials} />
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

