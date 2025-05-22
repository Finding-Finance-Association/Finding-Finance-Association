'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/*Gradient and polygon*/}
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
            transition={{ duration: 4, ease: 'easeInOut' }}
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
      {/*NOW THIS IS ALL PLACEHOLDER CODE. Are we going to do an all in one? What should order be?*/}
      {/*about*/}
      <section id="about" className="h-screen bg-white pt-16">
        <hr className="border-gray-200 w-24 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">About</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Placeholder for About content...
        </p>
      </section>

      {/*course*/}
      <section id="course" className="h-screen bg-white pt-16">
        <hr className="border-gray-200 w-24 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Course</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Placeholder for Course content...
        </p>
      </section>

      {/*events*/}
      <section id="events" className="h-screen bg-white pt-16">
        <hr className="border-gray-200 w-24 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Upcoming Events</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Placeholder for Upcoming Events content...
        </p>
      </section>

      {/*newsletter*/}
      <section id="newsletters" className="h-screen bg-white pt-16">
        <hr className="border-gray-200 w-24 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Newsletters</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
        </p>
      </section>
    </main>
  );
}