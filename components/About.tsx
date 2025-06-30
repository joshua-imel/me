"use client"

import { Award, Users, TrendingUp } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Award,
      stat: "12 yrs",
      label: "Product Experience",
    },
    {
      icon: Users,
      stat: "100+",
      label: "Founders Advised",
    },
    {
      icon: TrendingUp,
      stat: "1 Exit",
      label: "$1.5M Startup",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-misty-blue/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Hi, I'm Joshua Imel, a product management leader with over 12 years of experience helping startups
                transform innovative ideas into successful products.
              </p>
              <p className="mb-4">
                I've worked with early-stage companies across various industries, from fintech to healthcare, guiding
                them through product strategy, design, and development. My approach combines data-driven decision making
                with user-centered design principles.
              </p>
              <p>
                I believe that great products are born from understanding user needs, market dynamics, and business
                objectives. Let's work together to bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-midnight-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="text-midnight-blue" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-midnight-blue">{item.stat}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/images/professional-headshot.png"
                alt="Joshua Imel - Product Management Consultant"
                className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=400&width=400&text=Professional+Headshot"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
