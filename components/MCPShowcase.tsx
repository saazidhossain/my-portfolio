export default function MCPShowcase() {
  return (
    <section className="py-20 bg-white" id="mcp">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">MCP Server Showcase</h2>
        <div className="bg-gray-50 rounded-lg shadow p-8 space-y-4">
          <h3 className="text-xl font-semibold">Tools & Resources</h3>
          <p>Tools: {`{fs, git, issues}`} | Resources: {`{docs}`}</p>

          <h3 className="text-xl font-semibold mt-6">Public Endpoints</h3>
          <code className="block bg-black text-green-400 p-4 rounded">GET /status → uptime/version</code>

          <h3 className="text-xl font-semibold mt-6">Quickstart</h3>
          <code className="block bg-black text-green-400 p-4 rounded">
            docker run mcp-server-demo
            <br />
            export TOKEN=your_env_token
          </code>

          <h3 className="text-xl font-semibold mt-6">Security Notes</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Read-only filesystem in demo</li>
            <li>Issues closed scope only</li>
            <li>Rate-limit enforced</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
