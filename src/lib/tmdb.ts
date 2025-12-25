const TMDB_API_KEY = process.env.TMDB_API_KEY || ''; // We will need to get this from the user
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original';

export const getTrendingMovies = async () => {
    try {
        const res = await fetch(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`);
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
}

export const searchMovies = async (query: string) => {
    try {
        const res = await fetch(`${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
}

export const getImageUrl = (path: string) => {
    if (!path) return '/placeholder.png'; // Need a placeholder
    return `${TMDB_IMAGE_BASE}${path}`;
}
