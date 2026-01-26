const services = [
  {
    title: "Starter",
    duration: "2 weeks",
    desc: "Site revamp + 1 live tool + analytics",
    price: "from $2k"
  },
  {
    title: "Pro",
    duration: "4–6 weeks",
    desc: "Design system + 2 automations + docs",
    price: "from $5k"
  },
  {
    title: "Enterprise",
    duration: "8–12 weeks",
    desc: "Multi-agent + MCP + SSO + SLAs",
    price: "custom"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Services & Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-2">{s.duration}</p>
              <p className="mb-4">{s.desc}</p>
              <span className="font-bold text-brand-success">{s.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-500">Guarantees: milestone billing; CWV &gt; 90 mobile</p>
      </div>
    </section>
  );
}
