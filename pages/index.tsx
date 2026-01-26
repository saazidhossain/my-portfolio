import Hero from '../components/Hero'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import DemoPlayground from '../components/DemoPlayground'
import MCPShowcase from '../components/MCPShowcase'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <DemoPlayground />
      <MCPShowcase />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
