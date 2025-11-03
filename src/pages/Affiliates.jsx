import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Affiliates = () => {
  return (
    <div className="pt-20">
      {/* Hero with image */}
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/src/images/cway-building.jpg" alt="Affiliates" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Affiliates</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Strategic affiliates driving our packaging and dairy capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pakway Industries (Packaging Solutions) */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">PAKWAY INDUSTRIES NIGERIA LTD.</h2>
              <p className="text-gray-700 mb-2"><strong>Established:</strong> 2018</p>
              <p className="text-gray-700 mb-2"><strong>Location:</strong> Plot-3, Block-1, off Ota-idiIroko Road by Nestle foods factory, Ogun state, Nigeria.</p>
              <p className="text-gray-700 mb-6"><strong>Customer Service Line:</strong> 07089284130</p>

              <p className="text-gray-700 mb-6">
                Pakway Company’s core vision of establishment is to produce high quality rigid packaging products as preforms, caps, straws etc. to CWAY Group of companies.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Target Clients</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Table Water & Refill Water industry</li>
                <li>Beverage industry</li>
                <li>Confectionery industry</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Machinery & Capacity Brief</h3>
              <p className="text-gray-700 mb-6">
                Pakway is equipped with world class machinery including HUSKY and Unique Preform molding machine to produce high quality preforms. Pakway has a production
                capacity of 42M preforms monthly with different types & sizes. Pakway is equipped with high speed compression molding machines and injection molding machines
                to produce high quality caps of 45M monthly with different SKUs. Pakway is equipped with high speed straw extruder and packaging machine to produce high quality
                wrapped straw to meet beverage industry requirements (20M wrapped straws per month).
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Brand Product / Description Details</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">PET Preforms</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>16gm 2925 Neck Preform</li>
                    <li>16.5gm 3025 Neck Preform</li>
                    <li>17gm 3025 Neck Preform</li>
                    <li>18gm 3025 Neck Preform</li>
                    <li>26gm 1810 Hot Fill Preform</li>
                    <li>710gm Dispenser Preform for 18.9L bottle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Caps</h4>
                  <p className="text-gray-700">Customized beverage caps, 2925 short neck water cap, 3025 30mm water cap, 18.9L dispenser bottle caps with gasket & seals, 25L can oil cap.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Wrapped Straws</h4>
                  <p className="text-gray-700">160mm, 210mm, 250mm straws.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Jar & Caps</h4>
                  <p className="text-gray-700">63mm jar & cap, 83mm jar & cap.</p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/packaging-solutions" className="btn-secondary">View Packaging Solutions</Link>
              </div>
            </div>

            <div className="grid gap-4">
              <img src="/src/images/cway-industry.jpg" alt="Pakway Industry" className="w-full h-64 object-cover border border-gray-200" />
              <img src="/src/images/cway-building.jpg" alt="CWAY Facility" className="w-full h-64 object-cover border border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Dairy Affiliate CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dairy Affiliate</h3>
              <p className="text-gray-700 mb-4">Explore our dairy operations and ongoing farm projects.</p>
              <Link to="/dairy" className="btn-primary">View Dairy</Link>
            </div>
            <img src="/src/images/beverages2.jpg" alt="Dairy" className="w-full h-56 object-cover border border-gray-200" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Affiliates

