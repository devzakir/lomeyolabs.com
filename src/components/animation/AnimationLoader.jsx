'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const TechScene = dynamic(() => import('../3d/TechScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl animate-pulse" />
  ),
})

export const useResponsiveAnimation = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768
      const isLowPower = navigator.hardwareConcurrency <= 4
      setShouldAnimate(!isMobile || !isLowPower)
    }

    window.addEventListener('resize', checkPerformance)
    checkPerformance()

    return () => window.removeEventListener('resize', checkPerformance)
  }, [])

  return shouldAnimate
}

export default TechScene 