import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const PrimeWater = () => {
  const primeImages = ['/images/cwayprime-water-image to use1.jpg', '/images/cwayprime-water-image to use2.png', '/images/cwayprime-water-image to use3.png']
  const [heroIdx, setHeroIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setHeroIdx(p => (p + 1) % primeImages.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pt-20">
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {primeImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="PRIME hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${heroIdx === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">CWAY PRIME Dispenser Water</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Premium refill water fortified with Magnesium and Zinc to support sleep, heart health, healthy cells and immunity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gray-700 mb-4">Our body system needs extra minerals to properly function. PRIME Refill Water from CWAY is the premium refill water fortified with Magnesium and Zinc, two of the most important minerals the body needs to gain and maintain good health.</p>
              <p className="text-gray-700 mb-4">Magnesium enhances sleep and reduces risk of heart diseases, while Zinc is an anti‑oxidant which supports healthy cells thereby slowing down ageing and boosts immunity.</p>
              <p className="text-gray-700 mb-4">PRIME Refill Water comes in trendy, more durable, aesthetic and heat‑resistant PC bottle. Choose the water you can trust.</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Presentation</h3>
              <p className="text-gray-700">Sparkling premium 18.9 litre refillable bottle.</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Packaging</h3>
              <p className="text-gray-700">Aesthetic PC bottles.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 bg-white p-4">
              <img src="/images/cwayprime-water-image to use1.jpg" alt="PRIME Refill" className="w-full h-[360px] object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sliding Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">PRIME Product Range</h2>
          <div className="overflow-hidden border border-gray-200">
            <motion.div
              className="flex gap-4 p-4"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-66.6%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              {[...primeImages, ...primeImages].map((img, i) => (
                <div key={i} className="min-w-[420px] h-[280px] overflow-hidden">
                  <img src={img} alt="PRIME Water" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">CWAY Prime Table Water</h3>
              <h4 className="text-xl font-semibold text-gray-900">Presentation</h4>
              <p className="text-gray-700">Sparkling Premium Mineral Table water, packed in 750ml PET bottle.</p>
              <h4 className="text-xl font-semibold text-gray-900 mt-2">Packaging</h4>
              <p className="text-gray-700">Available in packs of 12 bottles.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 bg-white p-4">
              <img src="/images/cwayprime-water-image to use2.png" alt="Prime Table Water" className="w-full h-[360px] object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 bg-white p-4 order-1 lg:order-2">
              <img src="/images/cwayprime-water-image to use3.png" alt="Prime Range" className="w-full h-[360px] object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Choose the Water You Can Trust</h3>
              <p className="text-gray-700">PRIME comes in more durable, aesthetic and heat‑resistant PC bottles, designed for everyday premium hydration.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrimeWater


