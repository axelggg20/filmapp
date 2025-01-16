import React from 'react';
import Image from 'next/image'; 

interface MovieCardProps {
  title: string;
  image: string;
  genre: string;
  duration: string;
  year: string;
  rating: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, genre, duration, year, rating }) => {
  return (
    <div className="movie-card">
      <Image 
        src={image}
        alt={title} 
        width={480} 
        height={300} 
        className="rounded-lg"
      />
      <div className="p-4">
        <h3>{title}</h3>
        <p>{`${genre} • ${duration} • ${year}`}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
