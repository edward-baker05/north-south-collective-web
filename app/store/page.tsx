'use client';

import { motion } from 'framer-motion';

const products = [
  {
    name: 'NSC Logo Tee',
    price: '£30.00',
    type: 'Apparel',
    imageColor: 'bg-neutral-900'
  },
  {
    name: 'Voidwalker LP - Vinyl',
    price: '£25.00',
    type: 'Music',
    imageColor: 'bg-neutral-800'
  },
  {
    name: 'Slipmat Set',
    price: '£15.00',
    type: 'Accessories',
    imageColor: 'bg-neutral-900'
  },
  {
    name: 'Tote Bag',
    price: '£12.00',
    type: 'Accessories',
    imageColor: 'bg-neutral-900'
  }
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-white"
        >
          Store
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-square ${product.imageColor} mb-4 relative overflow-hidden border border-white/5 group-hover:border-[#bc1919]/50 transition-colors`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-bold uppercase tracking-widest">Image</span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#bc1919]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#bc1919] transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-neutral-500 text-sm uppercase tracking-widest">
                        {product.type}
                    </p>
                </div>
                <span className="text-white font-mono">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
