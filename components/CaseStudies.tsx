const caseStudies = [
  {
    title: "Crypto Prediction Dashboard",
    context: "Fintech SaaS, trading analytics",
    problem: "Manual tick data, slow refresh, poor UX",
    role: "End-to-end lead",
    timeline: "6 weeks",
    stack: "Next.js, Tailwind, Supabase, WebSocket, OpenAI, MCP",
    results: "90% manual steps removed, LCP 1.7s, 2× conversion"
  },
  {
    title: "Onboarding Automation Tool",
    context: "SaaS onboarding",
    problem: "12-step manual onboarding",
    role: "IC + Architect",
    timeline: "4 weeks",
    stack: "Next.js API, MCP (FS+Git), OpenAI o1",
    results: "95% time saved, onboarding <30s"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white" id="case-studies">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Flagship Projects</h2>
        <div className="space-y-12">
          {caseStudies.map((c, i) => (
            <div key={c.title} className={`md:flex items-center gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-2">Context: {c.context}</p>
                <p className="mb-2">Problem: {c.problem}</p>
                <p className="mb-2">Role: {c.role}</p>
                <p className="mb-2">Timeline: {c.timeline}</p>
                <p className="mb-2">Stack: {c.stack}</p>
                <p className="font-bold text-brand-success">Results: {c.results}</p>
              </div>
              <div className="md:w-1/2 bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">[Screenshot/Video Placeholder]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
