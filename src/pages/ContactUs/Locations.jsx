import React from 'react'
import { motion } from 'framer-motion'
import { FaLocationDot, FaIndustry, FaGlobe } from 'react-icons/fa6'

const Locations = () => {
  const locations = [
    {
      country: 'Nigeria',
      address: 'Plot 98/100, Oshodi – Apapa Expressway, Isolo, Lagos, 102214, Nigeria',
      factories: 17,
      color: 'from-green-500 to-emerald-500',
      flag: '🇳🇬'
    },
    {
      country: 'China',
      address: '668 Beijing E Rd, Huangpu Qu, Shanghai Shi, China',
      factories: 1,
      color: 'from-red-500 to-orange-500',
      flag: '🇨🇳'
    },
    {
      country: 'India',
      address: 'Factory and office locations in India',
      factories: 1,
      color: 'from-orange-500 to-amber-500',
      flag: '🇮🇳'
    },
    {
      country: 'Egypt',
      address: 'Factory and office locations in Egypt',
      factories: 1,
      color: 'from-red-500 to-pink-500',
      flag: '🇪🇬'
    }
  ]

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
              <FaGlobe className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Locations</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              CWAY Group operates across 4 countries with 19 factories globally
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${location.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-5xl`}>
                  {location.flag}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{location.country}</h2>
                <div className="flex items-start space-x-3 mb-4">
                  <FaLocationDot className="text-primary-600 text-xl flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{location.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaIndustry className="text-primary-600" />
                  <span className="text-gray-700 font-semibold">{location.factories} Factory(ies)</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations

