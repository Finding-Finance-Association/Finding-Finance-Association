import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-transparent backdrop-blur-sm">
      <nav className="relative container mx-auto px-6 py-4 flex items-center">
        {/* Left: logo, aligned with body text */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-white">
            FFA
          </Link>
        </div>

        {/* Center: main links, perfectly centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-x-8">
            <Link href="/about" className="text-white hover:text-green-300">
              About
            </Link>
            <Link href="/events" className="text-white hover:text-green-300">
              Upcoming Events
            </Link>
            <Link href="/newsletters" className="text-white hover:text-green-300">
              Newsletters
            </Link>
          </div>
        </div>

        {/* Right: actions, aligned symmetrically */}
        <div className="flex-1 flex items-center justify-end space-x-4">
          <Link href="/login" className="text-white py-2 hover:text-green-300">
            Login
          </Link>
          <Link
            href="/course"
            className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
          >
            Course
          </Link>
        </div>
      </nav>
    </header>
  )
}