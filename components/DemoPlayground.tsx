import { useState } from "react";

export default function DemoPlayground() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Starter");
  const [org, setOrg] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutput(
      `✅ Account created for ${org} (${plan}) with email ${email}. Data seeded + welcome email sent.`
    );
  };

  return (
    <section className="py-20 bg-gray-50" id="demo">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Onboarding One-Click Demo</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-4">
          <input
            type="email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-4 py-2"
            required
          />
          <select value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full border rounded px-4 py-2">
            <option>Starter</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>
          <input
            type="text"
            placeholder="Organization Name"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className="w-full border rounded px-4 py-2"
            required
          />
          <button type="submit" className="bg-brand-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-success transition">
            Run Demo
          </button>
        </form>

        {output && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-700">{output}</p>
          </div>
        )}

        <p className="mt-4 text-sm text-gray-500 text-center">Limits: demo org only, rate-limit 5/min</p>
      </div>
    </section>
  );
}
