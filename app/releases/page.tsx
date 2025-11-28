'use client';

import { motion } from 'framer-motion';
import { Disc, Play } from 'lucide-react';

const releases = [
  {
    title: 'Echoes of the Void',
    artist: 'Voidwalker',
    year: '2024',
    type: 'LP',
    tracks: ['Intro', 'Dark Matter', 'Event Horizon', 'Singularity', 'Entropy', 'Outro']
  },
  {
    title: 'Static Bloom',
    artist: 'Kodama',
    year: '2024',
    type: 'EP',
    tracks: ['Sprout', 'Photosynthesis', 'Wilting', 'Rebirth']
  },
  {
    title: 'Horizon Line',
    artist: 'Aether',
    year: '2023',
    type: 'Single',
    tracks: ['Horizon Line', 'Horizon Line (Dub Mix)']
  },
  {
    title: 'Lunar Tides',
    artist: 'Lunaris',
    year: '2023',
    type: 'LP',
    tracks: ['Waxing', 'Full', 'Waning', 'New', 'Eclipse', 'Tide']
  },
];

export default function ReleasesPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-white"
        >
          Releases
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {releases.map((release, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 border-b border-white/10 pb-12"
            >
              {/* Cover Art Placeholder */}
              <div className="w-full md:w-64 h-64 bg-neutral-900 flex-shrink-0 border border-white/10 relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Disc size={64} className="text-[#bc1919] opacity-50 group-hover:rotate-180 transition-transform duration-1000" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              <div className="flex flex-col justify-center w-full">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-3xl font-bold uppercase tracking-wide mb-1 text-white group-hover:text-[#bc1919] transition-colors">
                        {release.title}
                        </h2>
                        <p className="text-[#bc1919] text-lg uppercase tracking-widest">
                        {release.artist}
                        </p>
                    </div>
                    <span className="text-neutral-500 font-mono">{release.year}</span>
                </div>

                <div className="mb-6">
                     <span className="inline-block px-3 py-1 border border-white/20 text-xs uppercase tracking-widest text-neutral-400 rounded-full">
                        {release.type}
                     </span>
                </div>

                <div className="space-y-2">
                    {release.tracks.map((track, i) => (
                        <div key={i} className="flex items-center justify-between text-sm text-neutral-500 hover:text-white transition-colors cursor-pointer border-b border-white/5 pb-1 group/track">
                            <span className="flex items-center">
                                <span className="w-6 text-neutral-700 font-mono">{i + 1}</span>
                                {track}
                            </span>
                            <Play size={12} className="opacity-0 group-hover/track:opacity-100 text-[#bc1919]" />
                        </div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
