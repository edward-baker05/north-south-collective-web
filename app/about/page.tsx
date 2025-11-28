'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            <div className="lg:w-1/2">
                <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 text-[#bc1919] leading-[0.8]"
                >
                North<br /><span className="text-white">South</span>
                </motion.h1>
                
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-px bg-gradient-to-r from-[#bc1919] to-transparent mb-8"
                />
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl leading-relaxed text-neutral-300 mb-8 font-light"
                >
                    We are a collective of artists, producers, and designers dedicated to exploring the spaces between genres.
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-neutral-500 leading-relaxed mb-8 max-w-md"
                >
                    Founded in 2023, North-South Collective began as a series of underground warehouse parties in industrial districts. It has since evolved into a global platform for experimental electronic music, post-rock, and audio-visual art.
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-neutral-500 leading-relaxed max-w-md"
                >
                    Our mission is to bridge the gap between the raw, physical energy of live performance and the pristine, constructed nature of recorded sound. We believe in the power of contrast—silence and noise, light and dark, North and South.
                </motion.p>
            </div>
        </div>
      </div>
    </div>
  );
}
