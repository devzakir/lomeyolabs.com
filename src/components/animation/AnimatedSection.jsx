'use client'

import { motion } from 'framer-motion'
import { useResponsiveAnimation } from './AnimationLoader'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function AnimatedSection({ children }) {
  const shouldAnimate = useResponsiveAnimation()

  if (!shouldAnimate) {
    return <section>{children}</section>
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.section>
  )
} 