'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

export function MovieRow({ title, movies }: { title: string, movies: Movie[] }) {
    const rowRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (rowRef.current) {
            const { current } = rowRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-2 md:space-y-4 px-4 md:px-12 my-8 group">
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-100 transition duration-200 hover:text-violet-400 cursor-pointer">
                {title}
            </h2>

            <div className="relative group/row">
                <ChevronLeft
                    className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover/row:opacity-100 hover:scale-125 text-white"
                    onClick={() => scroll('left')}
                />

                <div
                    ref={rowRef}
                    className="flex items-center space-x-2.5 overflow-x-scroll scrollbar-hide md:space-x-4 pb-4"
                >
                    {movies.map((movie) => (
                        <div key={movie.id} className="relative min-w-[180px] md:min-w-[220px] h-[260px] md:h-[330px] cursor-pointer transition duration-200 ease-out md:hover:scale-105">
                            <img
                                src={movie.poster_path}
                                alt={movie.title}
                                className="rounded-md object-cover w-full h-full"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex flex-col items-center justify-center gap-2 rounded-md">
                                <h3 className="text-white font-bold text-center px-2">{movie.title}</h3>
                                <button className="bg-violet-600 p-2 rounded-full hover:bg-violet-500">
                                    <Download className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <ChevronRight
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover/row:opacity-100 hover:scale-125 text-white"
                    onClick={() => scroll('right')}
                />
            </div>
        </div>
    );
}
