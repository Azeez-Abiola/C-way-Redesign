import React from 'react'
import { motion } from 'framer-motion'
import { FaVideo } from 'react-icons/fa6'
import bannerImg from '../../images/cway-industry.jpg'

const AVLibrary = () => {
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
              <FaVideo className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">AV Library</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Audio-visual resources including videos, commercials, and presentations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Featured Videos</h2>
            <p className="text-gray-600 mt-2">Corporate documentaries and health & safety updates.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cway Effluent Treatment Plant',
                embed: 'https://www.youtube.com/embed/YEI5FMOZO1k',
                desc: 'Overview of our effluent treatment facility and environmental stewardship.'
              },
              {
                title: 'CWAY Water COVID-19 Measures',
                embed: 'https://www.youtube.com/embed/UD0MbwKvxxI',
                desc: 'Safety protocols implemented during COVID-19 to protect staff and consumers.'
              }
            ].map((v) => (
              <div key={v.title} className="border border-gray-200 bg-white">
                <div className="aspect-video overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={v.embed}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="px-5 py-4">
                  <h3 className="text-xl font-semibold text-gray-900">{v.title}</h3>
                  <p className="text-gray-600 mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AVLibrary

