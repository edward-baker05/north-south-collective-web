import Hero from '@/components/Hero';
import ArtistRoster from '@/components/ArtistRoster';
import LatestReleases from '@/components/LatestReleases';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ArtistRoster />
      <LatestReleases />
    </div>
  );
}