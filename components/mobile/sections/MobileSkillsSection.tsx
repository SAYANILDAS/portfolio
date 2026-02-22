"use client";

const clusters = [
  {
    title: "AI & Machine Learning",
    items: ["NLP", "LLM Integration", "Model Evaluation"],
  },
  {
    title: "Cloud & Backend",
    items: ["Python", "FastAPI", "AWS"],
  },
  {
    title: "Analytics",
    items: ["SQL", "EDA", "Decision Modeling"],
  },
  {
    title: "Strategy",
    items: ["MSME Advisory", "Operational Intelligence"],
  },
];

export default function MobileSkillsSection() {
  return (
    <section id="skills" className="space-y-6">

      <h2 className="text-2xl font-semibold tracking-tight">
        AI Capability Matrix
      </h2>

      {clusters.map((cluster, index) => (
        <div
          key={index}
          className="p-5 rounded-2xl bg-gray-50 border border-gray-200"
        >
          <h3 className="text-base font-semibold mb-3">
            {cluster.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {cluster.items.map((item, i) => (
              <span
                key={i}
                className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}

    </section>
  );
}