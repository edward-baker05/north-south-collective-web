'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 py-16 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-2xl font-bold tracking-tighter uppercase mb-6">
            North-South Collective
          </h4>
          <p className="text-neutral-500 max-w-sm mb-8">
            An independent record label dedicated to exploring the spaces between genres.
          </p>
          <div className="flex space-x-4">
            {[
              { name: 'Instagram', href: 'https://www.instagram.com/northsouth.collective' },
              { name: 'Twitter', href: '#' },
              { name: 'Bandcamp', href: '#' },
              { name: 'SoundCloud', href: '#' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-sm text-white/60 hover:text-[#bc1919] uppercase tracking-wider transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">
            Navigation
          </h5>
          <ul className="space-y-4">
              <li><Link href="/artists" className="text-neutral-400 hover:text-[#bc1919] transition-colors">Artists</Link></li>
              <li><Link href="/releases" className="text-neutral-400 hover:text-[#bc1919] transition-colors">Releases</Link></li>
              <li><Link href="/events" className="text-neutral-400 hover:text-[#bc1919] transition-colors">Events</Link></li>
              <li><Link href="/store" className="text-neutral-400 hover:text-[#bc1919] transition-colors">Store</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">
            Contact
          </h5>
          <ul className="space-y-4">
            <li>
              <a href="mailto:demo@northsouth.co" className="text-neutral-400 hover:text-[#bc1919] transition-colors">
                demos@northsouth.co
              </a>
            </li>
            <li>
               <a href="mailto:info@northsouth.co" className="text-neutral-400 hover:text-[#bc1919] transition-colors">
                info@northsouth.co
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left">
        <p className="text-neutral-700 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} North-South Collective. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
