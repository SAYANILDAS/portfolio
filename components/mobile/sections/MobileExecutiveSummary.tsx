"use client";

export default function MobileExecutiveSummary() {
  return (
    <section id="executive" className="space-y-6">

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Executive Profile
        </h2>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Founder & CEO of Solvo Solutions, leading AI-integrated strategy and
          digital enablement initiatives for startups and MSMEs.
        </p>
      </div>

      <div className="space-y-4">

        {[
          {
            title: "Leadership",
            description:
              "Founder & CEO – Solvo Solutions (AI-driven consultancy for startups & MSMEs)",
          },
          {
            title: "AI Systems Architecture",
            description:
              "Architected LawLytics – AI Legal Contract Intelligence Platform.",
          },
          {
            title: "NLP & Decision Analytics",
            description:
              "Built sentiment analytics engines and structured decision systems.",
          },
          {
            title: "Government Collaboration",
            description:
              "Partnered with MSME Government branch on digital enablement.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gray-50 border border-gray-200"
          >
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}