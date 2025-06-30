export default function Footer() {
  return (
    <footer className="bg-midnight-blue text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">Joshua Imel</div>
            <div className="text-blue-100">Product Management Consultant</div>
          </div>

          <div className="text-center md:text-right">
            <div className="text-blue-100 mb-2">© {new Date().getFullYear()} Eliza Labs, Inc. All rights reserved.</div>
            <div className="text-sm text-blue-200">Built with Next.js & Tailwind CSS</div>
            <div className="text-sm text-blue-200">
              Contact:{" "}
              <a href="mailto:contact@elizalabs.com" className="hover:underline">
                contact@elizalabs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
