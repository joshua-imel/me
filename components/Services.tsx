import { Target, Rocket, Code } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "Define your product vision, roadmap, and go-to-market strategy for maximum impact.",
    },
    {
      icon: Rocket,
      title: "Design Sprints",
      description: "Rapid prototyping and validation to test ideas before full development.",
    },
    {
      icon: Code,
      title: "MVP Development",
      description: "Build and launch minimum viable products to validate market fit quickly.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive product management services to take your startup from idea to market success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-gray hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-misty-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-midnight-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-midnight-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
