import { useState } from "react";
import { Sparkles, Rocket, Code, Clock, Zap } from "lucide-react";

export default function DemoPlayground() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<any>(null);
  const [error, setError] = useState("");

  const generateBlueprint = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea) return;
    
    setLoading(true);
    setError("");
    setBlueprint(null);

    // Gemini API Key (Runtime environment provides this)
    const apiKey = ""; 

    const prompt = `Act as a visionary software architect and product strategist. 
    Analyze this project idea: "${idea}".
    
    Return a strictly valid JSON object (no markdown formatting, no backticks) with the following structure:
    {
      "tagline": "A short, punchy, visionary slogan for this project",
      "stack": ["Tool 1", "Tool 2", "Tool 3", "Tool 4"],
      "features": ["Core Feature 1", "Core Feature 2", "Core Feature 3"],
      "timeline": "Estimated MVP timeline (e.g., '3 Weeks')"
    }`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      // Clean up markdown if present
      if (text) {
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsedData = JSON.parse(text);
        setBlueprint(parsedData);
      } else {
        throw new Error("No analysis generated");
      }

    } catch (err) {
      console.error("AI Error:", err);
      setError("Failed to generate blueprint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="demo">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4 border border-purple-200">
            <Sparkles className="w-3 h-3" />
            POWERED BY GEMINI AI
          </div>
          <h2 className="text-4xl font-bold font-geist mb-4 text-brand-dark">AI Project Architect</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Got a startup idea? Let our AI architect draft a quick technical blueprint, tech stack, and roadmap for you in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Input Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={generateBlueprint} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Describe your idea
                </label>
                <textarea
                  placeholder="e.g., A marketplace for renting high-end cameras to photographers locally..."
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 h-40 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none resize-none text-gray-700 bg-gray-50"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading || !idea}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
                  loading 
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                    : "bg-brand-dark text-white hover:bg-black hover:scale-[1.02] shadow-lg shadow-brand-dark/20"
                }`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Architecting...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-current" />
                    Generate Blueprint
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Output Display */}
          <div className="space-y-6">
            {!blueprint && !loading && (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 p-8 text-center">
                <Rocket className="w-12 h-12 mb-4 text-gray-300" />
                <p>Your visionary blueprint will appear here.</p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                {error}
              </div>
            )}

            {blueprint && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                {/* Tagline Card */}
                <div className="bg-gradient-to-r from-brand-accent to-brand-success p-1 rounded-2xl shadow-lg">
                  <div className="bg-white p-6 rounded-xl h-full">
                    <p className="text-xs font-bold text-brand-success uppercase tracking-wider mb-2">Vision</p>
                    <p className="text-xl font-bold text-gray-900 font-geist">"{blueprint.tagline}"</p>
                  </div>
                </div>

                {/* Tech Stack Card */}
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
                    <Code className="w-5 h-5 text-brand-accent" />
                    Recommended Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blueprint.stack.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features & Timeline Grid */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
                      <Rocket className="w-5 h-5 text-purple-500" />
                      Core MVP Features
                    </div>
                    <ul className="space-y-2">
                      {blueprint.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold">
                      <Clock className="w-5 h-5 text-brand-accent" />
                      Est. Timeline
                    </div>
                    <span className="text-xl font-bold font-geist text-brand-accent">
                      {blueprint.timeline}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
