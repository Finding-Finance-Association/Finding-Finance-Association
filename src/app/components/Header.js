import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-green-600">
          FFA
        </Link>
        <div className="flex space-x-8">
          <Link href="/about" className="text-gray-800 hover:text-green-600">
            About
          </Link>
          <Link href="/events" className="text-gray-800 hover:text-green-600">
            Upcoming Events
          </Link>
          <Link href="/newsletters" className="text-gray-800 hover:text-green-600">
            Newsletters
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-800 hover:text-green-600">
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
  );
}