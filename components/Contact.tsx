"use client"

import { Mail, Linkedin, Calendar } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-midnight-blue to-blue-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to transform your product idea into reality? Let's discuss how I can help your startup succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">Get in Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-lg mb-4">
                <Mail size={32} />
              </div>
              <div className="font-semibold text-lg mb-2">Email</div>
              <a
                href="mailto:contact@elizalabs.com"
                className="text-blue-100 hover:text-white transition-colors text-lg"
              >
                contact@elizalabs.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-lg mb-4">
                <Calendar size={32} />
              </div>
              <div className="font-semibold text-lg mb-2">Schedule a Call</div>
              <a
                href="https://meetings.hubspot.com/joshua831"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors text-lg"
              >
                Book a 30-minute consultation
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/jimel/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://x.com/joshuaimel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
