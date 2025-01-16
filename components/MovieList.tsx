import React, { useState } from 'react';
import { Movie } from './types';
import { MOVIES } from './constants';

interface MovieListProps {
  selectedCategory: string;
}

const MovieList: React.FC<MovieListProps> = ({ selectedCategory }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = selectedCategory === 'All' 
    ? MOVIES 
    : MOVIES.filter((movie) => movie.genre === selectedCategory);

  return (
    <div className="bg-black text-white">
      {/* Lista de películas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            onClick={() => setSelectedMovie(movie)}
            className="cursor-pointer"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-400">{movie.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalles */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
              onClick={() => setSelectedMovie(null)}
            >
              ✕
            </button>
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="rounded-lg mb-4 w-full object-cover h-64"
            />
            <h2 className="text-3xl font-bold mb-2">{selectedMovie.title}</h2>
            <p className="text-sm text-gray-400 mb-4">
              {selectedMovie.genre} • {selectedMovie.duration} • {selectedMovie.year}
            </p>
            <p className="text-base text-gray-300">{selectedMovie.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;