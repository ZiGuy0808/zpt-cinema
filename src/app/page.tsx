import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MovieRow } from '@/components/MovieRow';
import { MOCK_MOVIES } from '@/lib/mockData';

export default function Home() {
  const featuredMovie = MOCK_MOVIES[0];

  return (
    <div className="relative min-h-screen pb-20">
      <Navbar />
      <Hero movie={featuredMovie} />

      <div className="-mt-32 md:-mt-48 relative z-20 space-y-8 pl-4 lg:pl-0">
        <MovieRow title="Trending Now" movies={MOCK_MOVIES} />
        <MovieRow title="Top Rated" movies={[...MOCK_MOVIES].reverse()} />
        <MovieRow title="Action Blockbusters" movies={MOCK_MOVIES} />
        <MovieRow title="Sci-Fi Thrillers" movies={[...MOCK_MOVIES].reverse()} />
      </div>
    </div>
  );
}
