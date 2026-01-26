export default function Hero() {
  return (
    <section className="bg-brand-dark text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Have a Cherish and Have It</h1>
        <p className="text-xl mb-8">AI-native design & engineering studio for SaaS founders</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://cal.com/saazidhossain"
            className="bg-brand-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-success transition"
          >
            Book Discovery Call
          </a>
          <a
            href="#demo"
            className="border border-brand-accent px-6 py-3 rounded-lg font-semibold hover:bg-brand-accent hover:text-black transition"
          >
            View Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
