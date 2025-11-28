'use client';

import { motion } from 'framer-motion';

const artists = [
  { 
    name: 'A E T H E R', 
    genre: 'Ambient / Drone',
    bio: "Sculpting soundscapes from the raw noise of the cosmos. Aether's work transcends traditional structure, offering listeners a drift through the infinite.",
    imageColor: 'bg-neutral-800'
  },
  { 
    name: 'K O D A M A', 
    genre: 'Experimental Electronic',
    bio: "Synthesizing organic textures with digital glitches. Kodama explores the intersection of nature and machine, creating rhythms that breathe.",
    imageColor: 'bg-neutral-800'
  },
  { 
    name: 'V O I D W A L K E R', 
    genre: 'Techno',
    bio: "Pulsating rhythms from the underground. Voidwalker delivers relentless, hypnotic techno designed for the darkest warehouses.",
    imageColor: 'bg-neutral-800'
  },
  { 
    name: 'L U N A R I S', 
    genre: 'Post-Rock',
    bio: "Cinematic crescendos and delicate melodies. Lunaris weaves emotional tapestries that speak without words.",
    imageColor: 'bg-neutral-800'
  },
  {
    name: 'S O L A R I S',
    genre: 'Deep House',
    bio: "Warm, analog grooves for the early hours. Solaris brings the heat of the sun to the cold digital landscape.",
    imageColor: 'bg-neutral-800'
  },
  {
    name: 'N E B U L A',
    genre: 'Shoegaze',
    bio: "Walls of sound and whispered vocals. Nebula creates a dense, immersive atmosphere that wraps around you like a blanket.",
    imageColor: 'bg-neutral-800'
  }
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-[#bc1919]"
        >
          Artists
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`w-full h-96 ${artist.imageColor} mb-6 relative overflow-hidden border border-white/5 group-hover:border-[#bc1919]/50 transition-colors`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                {/* Placeholder for Artist Image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                    <span className="text-6xl font-bold uppercase tracking-tighter text-white/10">{artist.name.substring(0, 2)}</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold uppercase tracking-widest mb-2 group-hover:text-[#bc1919] transition-colors">
                {artist.name}
              </h2>
              <p className="text-[#bc1919] text-sm uppercase tracking-widest mb-4">
                {artist.genre}
              </p>
              <p className="text-neutral-400 leading-relaxed max-w-lg">
                {artist.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
