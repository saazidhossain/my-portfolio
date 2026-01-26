export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-600">Have a project in mind? Let's collaborate.</p>
        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2" required />
          <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2" required />
          <textarea placeholder="Your Message" className="w-full border rounded px-4 py-2 h-32" required />
          <button type="submit" className="bg-brand-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-success transition">Send Message</button>
        </form>
        <div className="mt-8">
          <p>Email: <a href="mailto:hello@trade.ju45th.com" className="text-brand-accent">hello@trade.ju45th.com</a></p>
          <p>Schedule: <a href="https://cal.com/saazidhossain" className="text-brand-accent">cal.com/saazidhossain</a></p>
        </div>
      </div>
    </section>
  );
}
