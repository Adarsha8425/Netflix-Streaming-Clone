'use client';

import { useState } from 'react';

interface Movie {
  id: number;
  title: string;
  poster: string;
}

interface ContentRowProps {
  title: string;
  movies: Movie[];
}

export default function ContentRow({ title, movies }: ContentRowProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`scroll-${title.replace(/\s+/g, '-')}`);
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  const handlePlayClick = (movieTitle: string) => {
    console.log(`Playing: ${movieTitle}`);
    // You can add modal or player logic here
  };

  return (
    <div className="content-container">
      <h2 className="section-title">{title}</h2>
      <div className="scroll-container">
        <div 
          id={`scroll-${title.replace(/\s+/g, '-')}`}
          className="movies-grid"
          style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} loading="lazy" />
              <div className="movie-overlay">
                <div className="movie-overlay-title">{movie.title}</div>
                <button 
                  className="play-button"
                  onClick={() => handlePlayClick(movie.title)}
                >
                  ▶ Play
                </button>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="scroll-btn left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button 
          className="scroll-btn right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
}
