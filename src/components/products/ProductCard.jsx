'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductCard({ product, variants }) {
  return (
    <motion.div variants={variants}>
      <Link 
        href={`/products/${product.id}`} 
        className="group block rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-sm font-medium">{product.description}</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-dark group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-primary-600">
              {product.price}
            </p>
          </div>
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
  )
}