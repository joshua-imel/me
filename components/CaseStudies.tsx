import { ExternalLink, ArrowRight } from "lucide-react"

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Orlando Magic",
      description: "Led the Design Sprint to bring the Orlando Magic's mobile rewards vision to life.",
      results: ["UI/UX Design", "Product Roadmap", "20K+ early users"],
      image: "/images/orlando-magic-case.jpg", // Now uses the actual image
    },
    {
      title: "Gemini HR",
      description: "Set innovative product strategy for modern HR platform, growing revenue by 270% YoY.",
      results: ["270% YoY Revenue increase", "2.5x Customer Growth", "90+ annual product releases"],
      image: "/images/gemini-hr-case.png", // Now uses the actual Gemini HR dashboard image
    },
    {
      title: "Teeps Mobile Apps",
      description: "Founder of a top mobile app development agency for startups and enterprise.",
      results: ["100+ apps built", "20+ person product team", "Acquired in 2018"],
      image: "/images/teeps-team-case.png", // Now uses the actual Teeps team photo
    },
  ]

  return (
    <section id="case-studies" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">My Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real partnerships. Here's how I've helped startups achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-midnight-blue mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>

                <div className="space-y-2 mb-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-green-600">
                      <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more detailed case studies and testimonials?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-midnight-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
          >
            Request Portfolio
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
