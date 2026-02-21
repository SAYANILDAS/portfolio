const projects = [
  {
    title: "LawLytics",
    description:
      "AI-powered legal contract intelligence system with NLP-based clause detection and risk scoring.",
    tech: ["Next.js", "FastAPI", "AWS"],
  },
  {
    title: "Global Sentiment Heatmap",
    description:
      "Real-time NLP analytics platform for financial news and trend-based investment insights.",
    tech: ["Python", "NLP", "Data Pipelines"],
  },
  {
    title: "Traffic Enforcement Analytics",
    description:
      "Structured analytics model to identify repeat offenders and optimize enforcement prioritization.",
    tech: ["SQL", "Analytics", "Visualization"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}