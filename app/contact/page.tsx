'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-center text-white"
        >
          Contact
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Column */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="space-y-12"
          >
            <div>
                <h3 className="text-[#bc1919] uppercase tracking-widest text-sm mb-2">General Inquiries</h3>
                <a href="mailto:info@northsouth.co" className="text-2xl md:text-3xl hover:text-white text-neutral-400 transition-colors block">
                    info@northsouth.co
                </a>
            </div>
            
            <div>
                <h3 className="text-[#bc1919] uppercase tracking-widest text-sm mb-2">Demos</h3>
                <a href="mailto:demo@northsouth.co" className="text-2xl md:text-3xl hover:text-white text-neutral-400 transition-colors block">
                    demo@northsouth.co
                </a>
                <p className="text-neutral-600 text-sm mt-2">SoundCloud links only, please.</p>
            </div>

            <div>
                <h3 className="text-[#bc1919] uppercase tracking-widest text-sm mb-2">Location</h3>
                <address className="text-xl text-neutral-400 not-italic">
                    123 Industrial Ave.<br />
                    Warehouse 4B<br />
                    London, UK
                </address>
            </div>
          </motion.div>

          {/* Form Placeholder */}
          <motion.form 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className="space-y-6"
             onSubmit={(e) => e.preventDefault()}
          >
             <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-neutral-500">Name</label>
                 <input type="text" className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:border-[#bc1919] outline-none transition-colors" />
             </div>
             <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
                 <input type="email" className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:border-[#bc1919] outline-none transition-colors" />
             </div>
             <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-neutral-500">Message</label>
                 <textarea rows={4} className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:border-[#bc1919] outline-none transition-colors" />
             </div>
             <button className="w-full bg-white text-black py-4 uppercase tracking-widest font-bold hover:bg-[#bc1919] hover:text-white transition-colors flex items-center justify-center gap-2">
                Send Message <ArrowRight size={16} />
             </button>
          </motion.form>

        </div>
      </div>
    </div>
  );
}
