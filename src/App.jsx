import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import WhoWeAre from './pages/AboutUs/WhoWeAre'
import MissionVisionValues from './pages/AboutUs/MissionVisionValues'
import Brands from './pages/Brands'
import Water from './pages/Brands/Water'
import WaterDispensers from './pages/Brands/Water/Dispensers'
import CwayWater from './pages/Brands/Water/CwayWater'
import PrimeWater from './pages/Brands/Water/PrimeWater'
import Beverages from './pages/Brands/Beverages'
import Snacks from './pages/Brands/Snacks'
import Affiliates from './pages/Affiliates'
import PackagingSolutions from './pages/PackagingSolutions'
import Dairy from './pages/Dairy'
import CSR from './pages/CSR'
import Careers from './pages/Careers'
import WorkingAtCWAY from './pages/Careers/WorkingAtCWAY'
import News from './pages/News'
import PressRelease from './pages/News/PressRelease'
import LatestNews from './pages/News/LatestNews'
import ImageLibrary from './pages/News/ImageLibrary'
import AVLibrary from './pages/News/AVLibrary'
import ContactUs from './pages/ContactUs'
import Locations from './pages/ContactUs/Locations'
import CustomerCare from './pages/ContactUs/CustomerCare'
import FAQs from './pages/ContactUs/FAQs'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/who-we-are" element={<WhoWeAre />} />
            <Route path="/about-us/mission-vision-values" element={<MissionVisionValues />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/water" element={<Water />} />
            <Route path="/brands/water/dispensers" element={<WaterDispensers />} />
            <Route path="/brands/water/cway-water" element={<CwayWater />} />
            <Route path="/brands/water/prime-water" element={<PrimeWater />} />
            <Route path="/brands/beverages" element={<Beverages />} />
            <Route path="/brands/snacks" element={<Snacks />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/packaging-solutions" element={<PackagingSolutions />} />
            <Route path="/dairy" element={<Dairy />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/working-at-cway" element={<WorkingAtCWAY />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/press-release" element={<PressRelease />} />
            <Route path="/news/latest-news" element={<LatestNews />} />
            <Route path="/news/image-library" element={<ImageLibrary />} />
            <Route path="/news/av-library" element={<AVLibrary />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact-us/locations" element={<Locations />} />
            <Route path="/contact-us/customer-care" element={<CustomerCare />} />
            <Route path="/contact-us/faqs" element={<FAQs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

