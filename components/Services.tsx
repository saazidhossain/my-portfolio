'use client';

import { Zap, Layout, Box } from 'lucide-react';

const services = [
  {
    title: "Starter",
    icon: <Zap className="w-8 h-8 text-brand-accent" />,
    duration: "2 weeks",
    desc: "Perfect for MVPs. Site revamp, one core live tool, and essential analytics setup.",
    price: "from $2k",
    features: ["Next.js Setup", "SEO Optimization", "1 Interactive Tool"]
  },
  {
    title: "Pro",
    icon: <Layout className="w-8 h-8 text-purple-500" />,
    duration: "4–6 weeks",
    desc: "Complete product suite. Scalable design system, 2 custom automations, and documentation.",
    price: "from $5k",
    features: ["Design System", "Auth Integration", "2 Automations", "Admin Dashboard"]
  },
  {
    title: "Enterprise",
    icon: <Box className="w-8 h-8 text-brand-success" />,
    duration: "8–12 weeks",
    desc: "Full-scale ecosystem. Multi-agent systems, MCP servers, SSO, and SLA support.",
    price: "Custom",
    features: ["Multi-Agent System", "Custom MCP Server", "SSO & Security", "Priority Support"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50/50" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-geist mb-4 text-brand-dark">Services & Packages</h2>
          <p className="text-gray-500">Transparent pricing for high-impact engineering.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 font-geist">{s.title}</h3>
              <p className="text-sm font-medium text-brand-accent mb-4 uppercase tracking-wide">{s.duration}</p>
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">{s.desc}</p>
              
              <div className="border-t border-gray-100 pt-6 mb-6 space-y-3">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-brand-success rounded-full mr-2"></span>
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-gray-900">{s.price}</span>
                <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-sm text-gray-400">
          Guarantees: Milestone-based billing • Core Web Vitals {'>'} 90 • Mobile First
        </p>
      </div>
    </section>
  );
}
