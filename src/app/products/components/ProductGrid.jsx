'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ProductGrid({ products }) {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-8 md:grid-cols-2"
    >
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          variants={item}
        />
      ))}
    </motion.div>
  )
}