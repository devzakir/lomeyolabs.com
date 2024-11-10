'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useResponsiveAnimation } from './AnimationLoader'

const AnimatedSection = ({ children }) => {
  const shouldAnimate = useResponsiveAnimation()
  const prefersReducedMotion = useReducedMotion()

  if (!shouldAnimate || prefersReducedMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection 