import React from 'react'
import { motion } from 'framer-motion'

const LatestNews = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Latest News</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Recent updates and news articles related to CWAY
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600 text-lg">Latest news will be displayed here</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LatestNews

