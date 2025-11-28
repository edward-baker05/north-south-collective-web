'use client';

import { motion } from 'framer-motion';

const artists = [
  { name: 'A E T H E R', genre: 'Ambient / Drone' },
  { name: 'K O D A M A', genre: 'Experimental Electronic' },
  { name: 'V O I D W A L K E R', genre: 'Techno' },
  { name: 'L U N A R I S', genre: 'Post-Rock' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1] as const
    }
  }
};

export default function ArtistRoster() {
  return (
    <section id="artists" className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-4">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter uppercase"
          >
            Roster
          </motion.h2>
          <motion.span 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-neutral-500 uppercase tracking-widest text-sm mt-2 md:mt-0"
          >
            Select Artists
          </motion.span>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-96 bg-neutral-900 border border-white/5 overflow-hidden cursor-pointer"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#bc1919]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                <h3 className="text-2xl md:text-4xl font-bold tracking-widest uppercase mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {artist.name}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-in-out">
                    <p className="text-[#bc1919] text-sm tracking-widest uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {artist.genre}
                    </p>
                </div>
              </div>

              {/* Animated Borders */}
              <div className="absolute top-4 left-4 w-0 h-[1px] bg-[#bc1919] group-hover:w-12 transition-all duration-500 delay-100" />
              <div className="absolute top-4 left-4 w-[1px] h-0 bg-[#bc1919] group-hover:h-12 transition-all duration-500 delay-100" />
              
              <div className="absolute bottom-4 right-4 w-0 h-[1px] bg-[#bc1919] group-hover:w-12 transition-all duration-500 delay-100" />
              <div className="absolute bottom-4 right-4 w-[1px] h-0 bg-[#bc1919] group-hover:h-12 transition-all duration-500 delay-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}