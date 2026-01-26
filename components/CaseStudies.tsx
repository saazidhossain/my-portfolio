'use client';

import Image from 'next/image';

const caseStudies = [
  {
    title: "Crypto Prediction Dashboard",
    context: "Fintech SaaS, trading analytics",
    problem: "Manual tick data, slow refresh, poor UX",
    role: "End-to-end lead",
    timeline: "6 weeks",
    stack: "Next.js, Tailwind, Supabase, WebSocket, MCP",
    results: "90% manual steps removed, LCP 1.7s, 2× conversion",
    image: "/images/case-crypto.jpg",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Onboarding Automation Tool",
    context: "SaaS onboarding",
    problem: "12-step manual onboarding process",
    role: "IC + Architect",
    timeline: "4 weeks",
    stack: "Next.js API, MCP (FS+Git), OpenAI o1",
    results: "95% time saved, onboarding <30s",
    image: "/images/case-onboarding.jpg",
    gradient: "from-emerald-500/20 to-teal-500/20"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-4 text-gray-900">
            Selected Work
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Deep dives into complex problems solved with AI-native engineering.
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((c, i) => (
            <div 
              key={c.title} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 group relative">
                <div className={`absolute inset-0 bg-gradient-to-tr ${c.gradient} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-70`}></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 h-[300px] md:h-[400px]">
                  <Image 
                    src={c.image} 
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 font-geist">{c.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold mb-1">Role</p>
                    <p className="font-medium text-gray-800">{c.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold mb-1">Timeline</p>
                    <p className="font-medium text-gray-800">{c.timeline}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <p className="text-gray-600 mb-4 leading-relaxed"><span className="font-semibold text-gray-900">Problem:</span> {c.problem}</p>
                  <p className="text-gray-600 leading-relaxed"><span className="font-semibold text-brand-success">Result:</span> {c.results}</p>
                </div>

                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {c.stack.split(', ').map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
