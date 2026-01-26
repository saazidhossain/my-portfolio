'use client';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Sazid Hossain — All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/saazidhossain" className="hover:text-brand-accent">GitHub</a>
          <a href="https://linkedin.com/in/saazidhossain" className="hover:text-brand-accent">LinkedIn</a>
          <a href="https://x.com/saazidhossain" className="hover:text-brand-accent">X</a>
        </div>
      </div>
    </footer>
  );
}
