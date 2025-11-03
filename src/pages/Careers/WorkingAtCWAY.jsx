import React from 'react'
import { motion } from 'framer-motion'
import { FaCircleCheck } from 'react-icons/fa6'
import bannerImg from '../../images/cway-reception.jpg'
import teamImg from '../../images/cway-team.jpg'

const WorkingAtCWAY = () => {
  const departments = [
    'Manufacturing and Production',
    'Research and Development',
    'Sales and Marketing',
    'Quality Assurance',
    'Administration and Management',
    'Technical Services'
  ]

  const benefits = [
    'Opportunity to work with a leading multinational company',
    'Cutting-edge technology and global manufacturing practices',
    'Diverse product portfolio and market presence',
    'Commitment to quality and innovation',
    'Career growth in a dynamic environment'
  ]

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Working at CWAY</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Join a leading multinational company committed to quality and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Why Join CWAY?</h2>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaCircleCheck className="text-gray-900 text-xl flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="border border-gray-200 overflow-hidden">
                <img src={teamImg} alt="CWAY Team" className="w-full h-[420px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Departments</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="border border-gray-200 px-6 py-4 bg-white">
                <p className="text-gray-800 font-semibold">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkingAtCWAY

