import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaNewspaper, FaCamera, FaVideo, FaFileLines } from 'react-icons/fa6'

const News = () => {
  const newsSections = [
    {
      title: 'Press Release',
      description: 'Official statements and announcements from CWAY Group',
      link: '/news/press-release',
      icon: FaFileLines,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Latest News',
      description: 'Recent updates on company activities and developments',
      link: '/news/latest-news',
      icon: FaNewspaper,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Image Library',
      description: 'Collection of images related to CWAY products and events',
      link: '/news/image-library',
      icon: FaCamera,
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'AV Library',
      description: 'Audio-visual resources including videos and presentations',
      link: '/news/av-library',
      icon: FaVideo,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="pt-20">
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/src/images/cway-building.jpg" alt="News" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
              <FaNewspaper className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">News & Media</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Stay updated with the latest from CWAY Group
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <section.icon className="text-3xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{section.description}</p>
                <Link
                  to={section.link}
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-2 transition-transform"
                >
                  <span>Explore</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News

