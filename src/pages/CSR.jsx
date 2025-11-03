import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaUsers, FaLeaf, FaHandshake } from 'react-icons/fa6'

const CSR = () => {
  const initiatives = [
    {
      icon: FaUsers,
      title: 'Community Engagement',
      description: 'Community development programs and local community support initiatives',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaLeaf,
      title: 'Environmental Sustainability',
      description: 'Environmental sustainability initiatives and sustainable manufacturing practices',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaHandshake,
      title: 'Social Welfare',
      description: 'Contributions to social welfare and support for social causes',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="pt-20">
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/src/images/cway-compliance.jpg" alt="CSR" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
              <FaHeart className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Corporate Social Responsibility</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Contributing positively to society and the environment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${initiative.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <initiative.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CSR

