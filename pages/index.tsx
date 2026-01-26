import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import DemoPlayground from '../components/DemoPlayground';
import MCPShowcase from '../components/MCPShowcase';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sazid Hossain | AI-Native Design & Engineering Studio</title>
        <meta name="description" content="AI-native design & engineering studio crafting scalable SaaS solutions for visionary founders. Specializing in Next.js, MCP, and Automation." />
        
        {/* 5. OPEN GRAPH IMAGE (og-image.jpg) */}
        <meta property="og:title" content="Sazid Hossain | AI-Native Design & Engineering Studio" />
        <meta property="og:description" content="AI-native design & engineering studio crafting scalable SaaS solutions for visionary founders." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saazidhossain.com" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <DemoPlayground />
        <MCPShowcase />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
