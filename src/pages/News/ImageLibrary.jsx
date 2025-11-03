import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCamera } from 'react-icons/fa6'
import bannerImg from '../../images/cway-headquarters.jpg'

const ImageLibrary = () => {
  const allImages = useMemo(() => {
    const items = [
      // Facilities / Corporate
      { src: '/src/images/cway-headquarters.jpg', label: 'Headquarters', tag: 'Facilities' },
      { src: '/src/images/Headquarters1.jpg', label: 'Headquarters Exterior', tag: 'Facilities' },
      { src: '/src/images/cway-building.jpg', label: 'Corporate Building', tag: 'Facilities' },
      { src: '/src/images/cway-industry.jpg', label: 'Industry Plant', tag: 'Facilities' },
      { src: '/src/images/truck.jpg', label: 'Logistics Truck', tag: 'Facilities' },
      { src: '/src/images/cway-reception.jpg', label: 'Reception', tag: 'Corporate' },
      { src: '/src/images/cway-team.jpg', label: 'CWAY Team', tag: 'Corporate' },
      { src: '/src/images/cway-logo.png', label: 'CWAY Logo', tag: 'Corporate' },
      { src: '/src/images/about1.jpg', label: 'About 1', tag: 'Corporate' },
      { src: '/src/images/about2.jpg', label: 'About 2', tag: 'Corporate' },
      { src: '/src/images/about3.jpg', label: 'About 3', tag: 'Corporate' },
      { src: '/src/images/about4.jpg', label: 'About 4', tag: 'Corporate' },

      // Water
      { src: '/src/images/cway-water.jpg', label: 'CWAY Water', tag: 'Water' },
      { src: '/src/images/cway-water2.jpg', label: 'CWAY Water 2', tag: 'Water' },
      { src: '/src/images/cway-water3.jpg', label: 'CWAY Water 3', tag: 'Water' },
      { src: '/src/images/water-capacity1.jpg', label: 'Water Capacity 1', tag: 'Water' },
      { src: '/src/images/water-capcity2.jpg', label: 'Water Capacity 2', tag: 'Water' },
      { src: '/src/images/cway-water-image to use1.png', label: 'CWAY Water - Feature', tag: 'Water' },
      { src: '/src/images/cway-water-image to use2.png', label: 'CWAY Water - On-the-Go', tag: 'Water' },

      // Prime Water
      { src: '/src/images/cwayprime-water-image to use1.jpg', label: 'Prime Refill', tag: 'Prime' },
      { src: '/src/images/cwayprime-water-image to use2.png', label: 'Prime Table Water', tag: 'Prime' },
      { src: '/src/images/cwayprime-water-image to use3.png', label: 'Prime Range', tag: 'Prime' },

      // Dairy
      { src: '/src/images/dairy1.jpg', label: 'Dairy 1', tag: 'Dairy' },
      { src: '/src/images/dairy2.jpg', label: 'Dairy 2', tag: 'Dairy' },
      { src: '/src/images/dairy3.jpg', label: 'Dairy 3', tag: 'Dairy' },
      { src: '/src/images/dairy4.jpg', label: 'Dairy 4', tag: 'Dairy' },
      { src: '/src/images/dairy-cow.jpg', label: 'Dairy Cow', tag: 'Dairy' },

      // Beverages / Snacks
      { src: '/src/images/beverages2.jpg', label: 'Beverages', tag: 'Beverages' },
      { src: '/src/images/beverage1.jpg', label: 'Beverage 1', tag: 'Beverages' },
      { src: '/src/images/beverage3.jpg', label: 'Beverage 3', tag: 'Beverages' },
      { src: '/src/images/beverage3.png', label: 'Beverage 3 (alt)', tag: 'Beverages' },
      { src: '/src/images/beverage4.jpg', label: 'Beverage 4', tag: 'Beverages' },
      { src: '/src/images/beverage5.jpg', label: 'Beverage 5', tag: 'Beverages' },
      { src: '/src/images/yoghurt.jpg', label: 'Yoghurt', tag: 'Beverages' },
      { src: '/src/images/snacks1.jpg', label: 'Snacks', tag: 'Beverages' },

      // Dispensers
      { src: '/src/images/dispenser2.png', label: 'Dispenser 2', tag: 'Dispensers' },
      { src: '/src/images/dispenser3.png', label: 'Dispenser 3', tag: 'Dispensers' },
      { src: '/src/images/main-dispenser.jpg', label: 'Main Dispenser', tag: 'Dispensers' },
    ]
    return items
  }, [])

  const tags = useMemo(() => ['All', ...Array.from(new Set(allImages.map(i => i.tag)))], [allImages])
  const [activeTag, setActiveTag] = useState('All')
  const filtered = useMemo(() => activeTag === 'All' ? allImages : allImages.filter(i => i.tag === activeTag), [allImages, activeTag])

  return (
    <div className="pt-20">
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
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-none mb-8">
              <FaCamera className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Image Library</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Collection of high-resolution images related to CWAY's products and events
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 border text-sm ${activeTag === tag ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img) => (
              <div key={img.src} className="border border-gray-200 overflow-hidden group">
                <div className="aspect-[4/3] w-full h-full overflow-hidden">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{img.label}</span>
                  <span className="text-xs text-gray-500">{img.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImageLibrary

