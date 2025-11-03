import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaUsers, FaEye, FaHeart } from 'react-icons/fa6'

const AboutUs = () => {
  const cards = [
    {
      title: 'Who We Are',
      description: 'Learn about CWAY Group\'s history, mission, and core values. Discover our journey from inception to industry leadership.',
      link: '/about-us/who-we-are',
      icon: FaUsers,
      gradient: 'from-primary-500 to-secondary-500'
    },
    {
      title: 'Mission, Vision & Values',
      description: 'Explore our commitment to quality, innovation, and customer satisfaction. Understand what drives us forward.',
      link: '/about-us/mission-vision-values',
      icon: FaEye,
      gradient: 'from-secondary-500 to-accent-500'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/images/cway-team.jpg" alt="About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-display"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
          >
            Leading the industry in premium water, beverages, and snacks since 2000
          </motion.p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <card.icon className="text-3xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{card.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                <Link
                  to={card.link}
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-2 transition-transform"
                >
                  <span>Explore</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

