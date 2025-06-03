'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const mentorNames = [
    'Alice Johnson',
    'Bob Smith',
    'Carol Williams',
    'David Brown',
    'Eva Davis',
    'Frank Miller',
    'Grace Wilson',
    'Henry Moore',
    'Ivy Taylor',
    'Jack Anderson'
  ];
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <main>
      <section className="relative h-screen overflow-hidden flex items-center bg-white">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-400 to-blue-700 transform -skew-y-12 scale-150 origin-top-left"
          style={{
            backgroundSize: '200% 200%',
            clipPath: 'polygon(0 0%, 100% 0%, 100% 75%, 0% 82%)'
          }}
          initial={{ opacity: 0, backgroundPosition: '75% 50%' }}
          animate={{
            opacity: 1,
            backgroundPosition: ['75% 50%', '60% 50%', '75% 50%'],
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            backgroundPosition: {
              repeat: Infinity,
              duration: 10,
              ease: 'easeInOut',
              repeatType: 'loop',
              delay: 1,
            },
          }}
        />
        <div className="relative z-10 container mx-auto px-6 flex items-center">
          {/*text on left*/}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.h1
              className="text-7xl md:text-8xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              Finding Finance Association
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-white/90 max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              Democratizing Finance Industry Education for Students
            </motion.p>
          </div>

          {/*graphic on right*/}
          <motion.div
            className="hidden lg:block lg:w-1/3 ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            <Image
              src="/graphic.png"
              alt="Decorative graphic"
              width={300}
              height={300}
              className="object-contain opacity-75"
            />
            </motion.div>
        </div>
      </section>
      {/*about*/}
      <section id="about" className="bg-white py-30 px-4 md:px-8 scroll-mt-10">
        <hr className="border-gray-200 w-24 mx-auto mb-6" />
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-6">About FFA</h2>
        <motion.div
          className="overflow-visible"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto py-8 rounded-lg text-gray-700">
            <div className="flex flex-col md:flex-row md:space-x-16 items-start">
              <div className="md:w-1/2 pr-10">
                <p className="text-2xl md:text-3xl text-center">
                  Finding Finance Association is dedicated to guiding undergraduate students through the various career paths in finance.<br /><br />
                  By providing guest speaker events, networking opportunities, hands-on workshops, and personalized mentorship, we equip students with the knowledge and skills needed to navigate and succeed in their chosen finance careers.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col items-center">
                <Image
                  src="/about_image.jpg"
                  alt="Jacob Lebowitz"
                  width={300}
                  height={300}
                  className="object-cover shadow-lg mb-6"
                />
                <blockquote className="border-l-4 border-green-700 pl-6 italic text-xl md:text-2xl text-green-800 text-center">
                  “Our mission is to demystify the world of finance to help students gain clarity and ownership over their careers.” &mdash; Jacob Lebowitz
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/*MENTORS*/}
      <section id="mentors" className="relative min-h-[105vh] overflow-hidden flex items-center bg-white">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-400 to-blue-700 transform -skew-y-12 scale-150 origin-top-left"
          style={{
            backgroundSize: '200% 200%',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
          initial={{ opacity: 0, backgroundPosition: '75% 50%' }}
          animate={{
            opacity: 1,
            backgroundPosition: ['75% 50%', '60% 50%', '75% 50%'],
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            backgroundPosition: {
              repeat: Infinity,
              duration: 10,
              ease: 'easeInOut',
              repeatType: 'loop',
              delay: 1,
            },
          }}
        />
        <div className="relative z-10 container mx-auto px-6 py-12">
          <hr className="border-gray-200 w-24 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">Our Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">

            {/*I designed the mentors part so that it can scale. Just change length, add images, and add names at the top. Thank me later*/}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Image
                  src={`/mentor${i + 1}.png`}
                  alt={`Mentor ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-white">
                  {mentorNames[i] || `Mentor ${i + 1}`}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Testimonials*/}
      <section id="testimonials" className="h-screen bg-white pt-16">
        <hr className="border-gray-200 w-24 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Testimonials</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Placeholder for Testimonials content...
        </p>
      </section>

      {/*newsletter*/}
      <section id="newsletters" className="bg-white pt-16 pb-20">
        <hr className="border-gray-200 w-24 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Newsletters</h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Sign up with your email address to receive the weekly FFA Newsletter!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: handle signup submission
          }}
          className="max-w-4xl mx-auto flex flex-row items-center space-x-4 mt-6"
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 px-4 py-2 border border-black text-black rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="flex-1 px-4 py-2 border border-black text-black rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 border border-black text-black rounded"
          />
          <button
            type="submit"
            disabled={!firstName || !lastName || !email}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center mt-10">
          <Link href="/newsletter-archive">
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              View Newsletter Archive
            </button>
          </Link>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Social links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://www.instagram.com/washufindingfinance/" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={48} height={48} />
            </a>
            <a href="https://www.youtube.com/@WashU-FFA" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.png" alt="YouTube" width={48} height={48} />
            </a>
            <a href="https://www.linkedin.com/company/finding-finance-association/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={48} height={48} />
            </a>
          </div>
          {/* Contact info */}
          <div className="text-center md:text-right">
            <p className="mb-2">
              <a href="mailto:findingfinanceassociation@gmail.com" className="hover:underline">findingfinanceassociation@gmail.com</a>
            </p>
            <p>1 Brookings Dr, St. Louis, MO 63130</p>
          </div>
        </div>
      </footer>
    </main>
  );
}