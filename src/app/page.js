import LogoCloud from '@/components/LogoCloud'
import ProductSection from '@/components/ProductSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CompanyStats from '@/components/CompanyStats'
import Hero from '@/components/Hero'
export default function Home() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-accent-yellow/10 -z-10" />
        <div className="max-w-7xl mx-auto pt-20">
          <div className="relative z-10 pt-16 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="text-center">
                <h2 className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  Innovative Templates and Software Products for You!
                </h2>
                <h1 className="mt-6 text-4xl tracking-tight font-bold text-neutral-dark sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block font-heading">Digital Solutions to Help</span>
                  <span className="block font-heading bg-gradient-to-r from-primary-600 to-accent-yellow bg-clip-text text-transparent">
                    You Grow and Scale Faster!
                  </span>
                </h1>
                <p className="mt-6 max-w-md mx-auto text-lg text-neutral-dark/80 sm:text-xl md:mt-8 md:max-w-3xl">
                  Lomeyo Labs is your go-to hub for PHP Scripts, Figma/HTML Templates, Self-hosted Software, and everything in between!
                </p>
                <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
                  <div className="rounded-xl shadow-lg shadow-primary-100">
                    <a
                      href="/products"
                      className="w-full flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-colors md:text-lg md:px-10"
                    >
                      Explore Our Products
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* <Hero /> */}
      <LogoCloud />
      <ProductSection />
      <WhyChooseUs />
      <Testimonials />
      <CompanyStats />
    </>
  )
}

