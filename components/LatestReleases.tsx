'use client';

import { motion } from 'framer-motion';
import { Play, Disc } from 'lucide-react';

const releases = [
  {
    title: 'Echoes of the Void',
    artist: 'Voidwalker',
    year: '2024',
    type: 'LP',
  },
  {
    title: 'Static Bloom',
    artist: 'Kodama',
    year: '2024',
    type: 'EP',
  },
  {
    title: 'Horizon Line',
    artist: 'Aether',
    year: '2023',
    type: 'Single',
  },
];

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};


export default function LatestReleases() {
  return (
    <section id="releases" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4"
          >
            Latest Releases
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-[#bc1919] mx-auto" 
          />
        </div>

        <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col space-y-4"
        >
          {releases.map((release, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative flex items-center justify-between p-6 md:p-8 border-b border-white/10 hover:bg-neutral-900/50 transition-all cursor-pointer"
            >
               {/* Active Left Border on Hover */}
               <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-[#bc1919] transition-all duration-300" />

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors relative overflow-hidden">
                    <Disc className="text-[#bc1919] group-hover:text-[#d64545] animate-spin-slow relative z-10" />
                    <div className="absolute inset-0 bg-[#bc1919]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide uppercase group-hover:text-[#bc1919] transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-neutral-500 text-sm uppercase tracking-widest">
                    {release.artist} <span className="mx-2 text-[#bc1919]">•</span> {release.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden md:block text-neutral-600 font-mono text-sm">
                   {release.year}
                </span>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#bc1919] group-hover:bg-[#bc1919] group-hover:text-white transition-all transform group-hover:rotate-90">
                  <Play size={14} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}