import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Masthead } from './components/Masthead'
import { Members } from './components/Members'
import { Process } from './components/Process'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Masthead />
      <main id="content">
        <Hero />
        <Members />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
      {/* We place the widget at the very end of the DOM so it sits on top 
          of all other content (like the 3D Robot) without interfering with layout. */}
      
      
      <WhatsAppWidget />

          
    </>
  )
}
