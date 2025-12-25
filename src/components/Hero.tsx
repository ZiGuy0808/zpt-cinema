import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
}

export function Hero({ movie }: { movie: Movie }) {
    if (!movie) return null;

    return (
        <div className="relative h-[85vh] w-full text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${movie.backdrop_path})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative pt-[20vh] md:pt-[35vh] px-4 md:px-12 max-w-2xl space-y-4">
                <h1 className="text-4xl md:text-6xl font-black drop-shadow-2xl">
                    {movie.title}
                </h1>
                <p className="text-lg md:text-xl text-zinc-200 drop-shadow-md line-clamp-3">
                    {movie.overview}
                </p>

                <div className="flex gap-4 pt-4">
                    <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded hover:bg-zinc-200 font-bold transition">
                        <Play className="fill-black w-5 h-5" /> Play
                    </button>
                    <button className="flex items-center gap-2 bg-zinc-500/50 backdrop-blur-sm text-white px-8 py-3 rounded hover:bg-zinc-500/70 font-bold transition">
                        <Info className="w-5 h-5" /> More Info
                    </button>
                </div>
            </div>
        </div>
    );
}
