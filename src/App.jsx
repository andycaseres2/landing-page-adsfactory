import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ImgAdsFactory } from './components/ImgAdsFactory'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ImgAdsFactory />
    </div>
  )
}

export default App
