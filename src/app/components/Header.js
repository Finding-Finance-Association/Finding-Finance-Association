'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-transparent backdrop-blur-sm">
      <nav className="relative w-full px-4 py-4 flex items-center">
        {/*left: logo*/}
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Image
                src="/ffa-logo.png"
                alt="Finding Finance Association logo"
                width={64}
                height={64}
              />
            </motion.div>
          </Link>
        </div>

        {/*center: about, upcoming, newsletters*/}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-x-8">
            <Link href="#about" className="text-white hover:text-green-300">
              About
            </Link>
            <Link href="#events" className="text-white hover:text-green-300">
              Upcoming Events
            </Link>
            <Link href="#newsletters" className="text-white hover:text-green-300">
              Newsletters
            </Link>
          </div>
        </div>

        {/*right: login, course button*/}
        <div className="flex-1 flex items-center justify-end space-x-6 pr-4">
          <Link href="/login" className="text-white hover:text-green-300">
            Login
          </Link>
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: [0, 1, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          >
            <Link
              href="#course"
              className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
            >
              Course
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}