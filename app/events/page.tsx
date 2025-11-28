'use client';

import { motion } from 'framer-motion';

const events = [
  {
    date: 'DEC 12',
    city: 'London',
    venue: 'Fabric',
    lineup: 'Voidwalker, Kodama',
    status: 'Tickets Available'
  },
  {
    date: 'JAN 05',
    city: 'Berlin',
    venue: 'Berghain',
    lineup: 'North-South Showcase',
    status: 'Sold Out'
  },
  {
    date: 'FEB 14',
    city: 'New York',
    venue: 'Basement',
    lineup: 'Aether, Lunaris',
    status: 'Tickets Available'
  },
  {
    date: 'MAR 20',
    city: 'Tokyo',
    venue: 'Vent',
    lineup: 'Voidwalker',
    status: 'Coming Soon'
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-white"
        >
          Events
        </motion.h1>

        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-neutral-900/30 transition-colors px-4"
            >
                <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-4 md:mb-0">
                    <div className="text-[#bc1919] font-bold text-xl md:text-2xl w-32 font-mono">
                        {event.date}
                    </div>
                    <div className="w-48">
                        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-white group-hover:text-neutral-300 transition-colors">
                            {event.city}
                        </h2>
                        <p className="text-neutral-500 uppercase tracking-widest text-sm">{event.venue}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:gap-12">
                    <span className="text-neutral-400 uppercase text-sm tracking-widest md:text-right w-48 mb-4 md:mb-0">
                        {event.lineup}
                    </span>
                    <button 
                        className={`px-6 py-3 border uppercase tracking-widest text-xs font-bold transition-all w-full md:w-auto
                        ${event.status === 'Sold Out' 
                            ? 'border-neutral-800 text-neutral-600 cursor-not-allowed' 
                            : 'border-white text-white hover:bg-[#bc1919] hover:border-[#bc1919]'
                        }`}
                    >
                        {event.status}
                    </button>
                </div>
            </motion.div>
          ))}
        </div>
         <div className="border-t border-white/10" />
      </div>
    </div>
  );
}
