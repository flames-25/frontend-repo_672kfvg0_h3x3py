import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Slider from './components/Slider'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <Slider />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
