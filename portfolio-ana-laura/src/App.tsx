import './index.css'
import { Header } from './components/Header'
import { Hero } from './pages/Hero'
import SobreMim from './pages/SobreMim'
import { Highlights } from './pages/Highlights'
import { Contact } from './pages/Contact'
import { Obrigada } from './pages/Obrigada'


function App() {
  return (
    <main>
      <Header />
      <Hero />
      <SobreMim />
      <Highlights />
      <Contact />
      <Obrigada />

    </main>
  )
}

export default App