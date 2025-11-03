import React from 'react'
import { motion } from 'framer-motion'
import { FaBoxOpen, FaShield, FaLightbulb, FaCircleCheck } from 'react-icons/fa6'

const PackagingSolutions = () => {
  const services = [
    {
      icon: FaBoxOpen,
      title: 'Custom Packaging',
      description: 'Custom packaging solutions for CWAY products',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Innovative packaging technologies and designs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaShield,
      title: 'Quality Assurance',
      description: 'Quality assurance in packaging processes',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="pt-20">
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/images/cway-industry.jpg" alt="Packaging" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
              <FaBoxOpen className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Packaging Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              State-of-the-art packaging technology ensuring product safety and quality
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">PAKWAY INDUSTRIES NIGERIA LTD.</h2>
              <p className="text-gray-700 mb-2"><strong>Established:</strong> 2018</p>
              <p className="text-gray-700 mb-2"><strong>Location:</strong> Plot-3, Block-1, off Ota-idiIroko Road by Nestle foods factory, Ogun state, Nigeria.</p>
              <p className="text-gray-700 mb-8"><strong>Customer Service Line:</strong> 07089284130</p>

              <p className="text-gray-700 mb-6">
                Pakway’s core vision is to produce high-quality rigid packaging products (preforms, caps, straws, etc.) for CWAY Group of companies.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Target Clients</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Table Water & Refill Water industry</li>
                <li>Beverage industry</li>
                <li>Confectionery industry</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Machinery & Capacity Brief</h3>
              <p className="text-gray-700 mb-4">
                Equipped with world-class machinery including HUSKY and Unique Preform molding machines for high-quality preforms (42M/month), high-speed compression and injection molding machines for caps (45M/month), and high-speed straw extruders and packaging machines for wrapped straws (20M/month).
              </p>
            </div>

            {/* Mixed Images beside content */}
            <div className="grid gap-4">
              <img src="/images/cway-industry.jpg" alt="Factory" className="w-full h-64 object-cover border border-gray-200" />
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/cway-building.jpg" alt="Building" className="w-full h-40 object-cover border border-gray-200" />
                <img src="/images/Headquarters1.jpg" alt="HQ" className="w-full h-40 object-cover border border-gray-200" />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Brand Products</h3>
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
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Customized Beverage Caps</li>
                  <li>2925 Short Neck Water Cap</li>
                  <li>3025 30mm Water Cap</li>
                  <li>18.9L Dispenser Bottle Caps with Gasket & Seals</li>
                  <li>25L Can Oil Cap</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Wrapped Straws</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>160mm Straw</li>
                  <li>210mm Straw</li>
                  <li>250mm Straw</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Jar & Caps</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>63mm Jar & Cap</li>
                  <li>83mm Jar & Cap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 font-display">Packaging Gallery</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              '/images/cway-industry.jpg',
              '/images/truck.jpg',
              '/images/cway-building.jpg',
              '/images/Headquarters1.jpg',
              '/images/cway-headquarters.jpg',
              '/images/beverage4.jpg'
            ].map((src) => (
              <div key={src} className="aspect-[4/3] overflow-hidden border border-gray-200">
                <img src={src} alt="Packaging" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PackagingSolutions

