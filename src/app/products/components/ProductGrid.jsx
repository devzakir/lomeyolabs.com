'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductGrid({ products }) {
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

  return (
    <motion.div 
      className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={item}>
          <Link href={`/products/${product.id}`} className="group block">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="mt-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-dark group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-primary">
                  {product.price}
                </p>
              </div>
              <p className="mt-2 text-sm text-dark/80">
                {product.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}