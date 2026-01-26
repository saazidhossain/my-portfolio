'use client';

const posts = [
  {
    title: "AI-native SaaS Design Systems",
    lang: "EN + BN",
    excerpt: "How to build scalable design systems with AI-native workflows..."
  },
  {
    title: "Crypto Prediction with MCP Servers",
    lang: "EN + BN",
    excerpt: "Exploring real-time tick-by-tick prediction dashboards powered by MCP..."
  },
  {
    title: "Automation Playgrounds for Startups",
    lang: "EN + BN",
    excerpt: "Practical demos that reduce manual ops and accelerate launch..."
  }
];

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Articles & Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <div key={p.title} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-2">{p.lang}</p>
              <p className="text-gray-700">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-brand-accent font-semibold hover:text-brand-success">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
