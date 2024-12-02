'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'

export default function Screenshots({ 
  title,
  subtitle,
  items = []
}) {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: ''
  });

  const handleImageClick = (image) => {
    setLightbox({
      isOpen: true,
      currentImage: image
    });
  };

  const handleCloseLightbox = () => {
    setLightbox({
      isOpen: false,
      currentImage: ''
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((screenshot, index) => (
            <motion.div 
              key={index}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-900/5 cursor-pointer"
              onClick={() => handleImageClick(screenshot.image)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={screenshot.image}
                  alt={screenshot.title || `Screenshot ${index + 1}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {screenshot.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox 
        isOpen={lightbox.isOpen}
        image={lightbox.currentImage}
        onClose={handleCloseLightbox}
      />
    </section>
  )
} 