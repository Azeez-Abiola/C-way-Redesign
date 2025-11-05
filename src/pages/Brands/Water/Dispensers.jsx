import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const WaterDispensers = () => {
  const featured = [
    { name: 'ARCTIC 1B', img: '/images/dispenser2.png' },
    { name: 'RUBY 4F', img: '/images/dispenser3.png' },
    { name: 'EXECUTIVE 5F', img: '/images/main-dispenser.jpg' }
  ]

  const otherModels = ['EXECUTIVE 2F','RUBY 2S','EXECUTIVE 1C','EXECUTIVE 3S','RUBY 2F','RUBY 3F']

  const allDispenserImages = ['/images/main-dispenser.jpg', '/images/dispenser2.png', '/images/dispenser3.png']
  const [heroIdx, setHeroIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setHeroIdx(p => (p + 1) % allDispenserImages.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pt-20">
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {allDispenserImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Dispenser hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${heroIdx === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">CWAY Dispenser Machines</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Hi‑tech, durable and aesthetic water dispensing machines. Best used with our quality 18.9L refill water.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700">
              CWAY Dispensers are Hi‑tech, durable & aesthetic value‑added water dispensing machines. Our quality 18.9 litres refill water is the best option
              for our revolutionized dispensing machines. Available in several designs and brand options such as RUBY, EXCEL, EXECUTIVE & ROYAL.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Models</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(({ name, img }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-gray-200 p-6 hover:border-gray-300 transition-colors"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4 image-flip-container">
                  <img src={img} alt={name} className="w-full h-full object-cover image-flip" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">More Models</h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-700">
              {otherModels.map((m) => (
                <li key={m} className="border border-gray-200 px-3 py-2">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sliding Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Featured Models</h2>
          <div className="overflow-hidden border border-gray-200">
            <motion.div
              className="flex gap-4 p-4"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              {[...featured.map(f => f.img), ...featured.map(f => f.img)].map((img, i) => (
                <div key={i} className="min-w-[320px] h-[240px] overflow-hidden image-flip-container">
                  <img src={img} alt="Dispenser" className="w-full h-full object-cover image-flip" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 overflow-hidden image-flip-container">
              <img src="/images/dispenser3.png" alt="Dispenser Cleaning Service" className="w-full h-[420px] object-cover image-flip" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">DISPENSER CLEANING AND DISINFECTING SERVICE.</h2>
              <p className="text-gray-700 mb-4">A popular and widely acclaimed saying “that the hygiene level of a tea cup is no less important than the tea!” Therefore, this relates to the hygiene level of your water dispenser which is equally a determiner to the water quality you drink each time you dispense water from your dispenser.</p>
              <p className="text-gray-700 mb-4">Therefore, in the light of the above, CWAY introduces the DCDE (Dispenser cleaning and disinfecting equipment) within our customer service units to ensure safe and hygienic condition of your water dispensers through periodic professional maintenance service.</p>
              <p className="text-gray-700 mb-4">CWAY Dispensing Machine is specially built with after sales cleaning procedures which allows for the use of special harmless odorless liquid detergents, capable of dissolving and disinfecting harmful substances that might be locked up within the interior parts of your dispenser machine.</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">This procedure involves the following phases:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Flushing</li>
                <li>Sterilisation with ozone</li>
                <li>Steaming under high pressure</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WaterDispensers


