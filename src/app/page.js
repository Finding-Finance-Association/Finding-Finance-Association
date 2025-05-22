// src/app/page.js
'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden flex items-center">
      {/* 🎨 Subtle, fluid skewed gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-400 to-blue-700 transform -skew-y-12 scale-150 origin-top-left"
        style={{ backgroundSize: '200% 200%' }}
        initial={{ opacity: 0, backgroundPosition: '0% 50%' }}
        animate={{
          opacity: 1,
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          opacity: { duration: 1.5, ease: 'easeInOut' },
          backgroundPosition: {
            repeat: Infinity,
            duration: 30,
            ease: 'easeInOut',
            repeatType: 'loop',
            delay: 1,
          },
        }}
      />

      {/* 📦 Hero text: left-aligned */}
      <div className="relative z-10 container mx-auto px-6 flex">
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h1
            className="text-7xl md:text-8xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            Finding Finance Association
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white/90"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            Democratizing Finance Industry Education for Students
          </motion.p>
        </div>
      </div>
    </main>
  );
}