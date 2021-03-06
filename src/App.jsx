import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ImgAdsFactory } from './components/ImgAdsFactory'
import { Advertising } from './components/Advertising'
import { Statistics } from './components/Statistics'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ImgAdsFactory />
      <Advertising />
      <Statistics />
      <Footer />
    </div>
  )
}

export default App
