import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import bannerImg from '../images/cway-team.jpg'
import facilityImg from '../images/cway-building.jpg'

const Careers = () => {
  const reasons = [
    'Opportunity to work with a leading multinational company',
    'Cutting‑edge technology and global manufacturing practices',
    'Diverse product portfolio and market presence',
    'Commitment to quality and innovation',
    'Career growth in a dynamic environment'
  ]

  const departments = [
    'Manufacturing & Production',
    'Research & Development',
    'Sales & Marketing',
    'Quality Assurance',
    'Administration & Management',
    'Technical Services'
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Careers</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">Join CWAY Group and build a meaningful career with a global leader.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Join + Visual */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Why Join CWAY</h2>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 bg-gray-900 inline-block"></span>
                    <span className="text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/careers/working-at-cway" className="btn-primary">Working at CWAY</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="border border-gray-200 overflow-hidden">
                <img src={facilityImg} alt="Our Facilities" className="w-full h-[420px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments + Call to action */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Departments</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {departments.map((d) => (
                  <div key={d} className="border border-gray-200 px-4 py-3 text-gray-800">{d}</div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Open Opportunities</h3>
              <p className="text-gray-700 mb-6">We’re always looking for great people. Explore roles across locations and teams.</p>
              <Link to="/careers/working-at-cway" className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:underline">
                <span>See more about careers</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers

