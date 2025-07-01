export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-misty-blue/20 to-white pb-40 pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-midnight-blue mb-6 py-0 px-6">
            Build <span className="text-blue-gray">world-class products</span> your customers rave about
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:text-xl">
            Product management leader helping early-stage Founders design, build, and launch products that solve real
            problems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://meetings.hubspot.com/joshua831"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-midnight-blue text-white py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl px-11"
            >
              Book a Call
            </a>
            <a
              href="#services"
              className="border-2 border-midnight-blue text-midnight-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-midnight-blue hover:text-white transition-all duration-200"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
