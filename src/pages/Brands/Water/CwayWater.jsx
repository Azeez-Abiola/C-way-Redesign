import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CwayWater = () => {
  const waterImages = ['/images/cway-water-image to use1.png', '/images/cway-water-image to use2.png', '/images/cway-water.jpg', '/images/cway-water2.jpg', '/images/cway-water3.jpg']
  const [heroIdx, setHeroIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setHeroIdx(p => (p + 1) % waterImages.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pt-20">
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {waterImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="CWAY Water hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${heroIdx === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">CWAY Water</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Leads in the 18.9L refill bottle category since 2000; state‑of‑the‑art factories set the industry standard.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">CWAY Dispenser Water</h2>
              <p className="text-gray-700 mb-4">It leads in the 18.9 litre refill bottle category and has remained so since inception in year 2000. Our factories are state of the art and undoubtedly, a reference standard in the industry. CWAY refill water is a commonplace quality product found in most homes and offices in Nigeria.</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Presentation</h3>
              <p className="text-gray-700">Sparkling, premium 18.9 litre refillable bottle.</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Packaging</h3>
              <p className="text-gray-700">Regular PET bottles.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 bg-white p-4">
              <img src="/images/cway-water-image to use1.png" alt="CWAY Dispenser Water" className="w-full h-[360px] object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sliding Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Product Range</h2>
          <div className="overflow-hidden border border-gray-200">
            <motion.div
              className="flex gap-4 p-4"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-66.6%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            >
              {[...waterImages.slice(0, 3), ...waterImages.slice(0, 3)].map((img, i) => (
                <div key={i} className="min-w-[420px] h-[280px] overflow-hidden">
                  <img src={img} alt="CWAY Water" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">CWAY On‑the‑Go – Table Water</h3>
              <p className="text-gray-700 mb-4">This is a specific customer‑friendly innovation. It creates simplified access to quality and healthy bottled table water from CWAY to other consuming segments who would wish to have CWAY water on the go and anywhere with all comfort and convenience.</p>
              <h4 className="text-xl font-semibold text-gray-900">Presentation</h4>
              <p className="text-gray-700">Sparkling premium table water packed in 750ml x 12 PET bottles and 1.5L x 6 PET bottles.</p>
              <h4 className="text-xl font-semibold text-gray-900 mt-4">Slogan</h4>
              <p className="text-gray-700">Ideal table water for every party and event.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 border border-gray-200 bg-white p-4">
              <img src="/images/cway-water-image to use2.png" alt="CWAY Table Water" className="w-full h-[360px] object-contain" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CwayWater


