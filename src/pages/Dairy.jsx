import React from 'react'
import { motion } from 'framer-motion'
import { FaCow } from 'react-icons/fa6'

const Dairy = () => {
  return (
    <div className="pt-20">
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/images/dairy1.jpg" alt="Dairy Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Dairy Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Quality dairy products with focus on nutritional value
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Dairy Division</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dedicated dairy products division with dairy manufacturing capabilities and expertise. 
                We focus on quality and nutritional value in dairy products.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2024 CWAY Dairy Farm ongoing projects</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Grain crop farming</li>
                <li>Staff training sessions on modern farming techniques</li>
                <li>Modern farm equipment park</li>
                <li>Farm site electrification projects</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">2023 CWAY Dairy Farm ongoing projects</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Grain crop farming</li>
                <li>Staff training sessions on modern farming techniques</li>
                <li>Modern farm equipment park</li>
                <li>Farm site electrification projects</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="/images/dairy-cow.jpg" alt="Dairy" className="w-full h-96 object-cover border border-gray-200" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dairy Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 font-display">Dairy Gallery</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              '/images/dairy1.jpg',
              '/images/dairy2.jpg',
              '/images/dairy3.jpg',
              '/images/dairy4.jpg',
              '/images/dairy-cow.jpg',
              '/images/yoghurt.jpg'
            ].map((src) => (
              <div key={src} className="group aspect-[4/3] overflow-hidden border border-gray-200">
                <img src={src} alt="Dairy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dairy

