'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Background Elements with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />
      </motion.div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <div className={isLoaded ? "p-4 -m-4" : "overflow-hidden"}>
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.05, textShadow: "0 0 30px rgba(188,25,25,0.4)" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-2 text-[#bc1919] cursor-default select-none"
          >
            North-South
          </motion.h1>
        </div>
        
        <div className={`${isLoaded ? "p-4 -m-4" : "overflow-hidden"} mb-8`}>
           <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.05, color: "#bc1919" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onAnimationComplete={() => setIsLoaded(true)}
            className="text-5xl md:text-8xl font-light tracking-tighter uppercase text-white cursor-default select-none"
          >
            Collective
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#bc1919]/20 blur-2xl rounded-full animate-pulse" />
          <p className="relative text-neutral-400 max-w-lg mx-auto text-sm md:text-base tracking-[0.3em] uppercase">
            Bridging horizons. Amplifying sound.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 64 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#bc1919] to-transparent"
      />
    </section>
  );
}