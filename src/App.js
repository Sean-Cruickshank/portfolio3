import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/about/About'
import AboutLayout from './pages/about/AboutLayout'
import Experience from './pages/about/Experience'
import Skills from './pages/about/Skills'
import SkillsDetails from './pages/about/SkillsDetails'
import Portfolio from './pages/Portfolio'
import PortfolioDetails from './pages/PortfolioDetails'
import TileGame from './pages/tilegame/TileGame'
import Contact from './pages/Contact'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Home />} />

          <Route path='about' element={<AboutLayout />}>
            <Route index element={<About />} />
            <Route path='experience' element={<Experience />} />
            <Route path='skills' element={<Skills />} />
            <Route path='skills/:id' element={<SkillsDetails />} />
          </Route>

          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolio/:id' element={<PortfolioDetails />} />
          <Route path='portfolio/tilegame' element={<TileGame />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}