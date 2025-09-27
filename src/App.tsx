import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection.tsx'
import AboutSection from './components/AboutSection.tsx'
import HighlightsSection from './components/HighlightsSection.tsx'
import CountdownSection from './components/CountdownSection.tsx'
import TicketsSection from './components/TicketsSection.tsx'
import GallerySection from './components/GallerySection.tsx'
import FAQSection from './components/FAQSection.tsx'
import Footer from './components/Footer.tsx'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <CountdownSection />
      <TicketsSection />
      <GallerySection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App