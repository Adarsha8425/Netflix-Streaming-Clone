'use client';

interface MovieCardProps {
  title: string;
  poster: string;
  onPlay?: () => void;
}

export default function MovieCard({ title, poster, onPlay }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} loading="lazy" />
      <div className="movie-overlay">
        <div className="movie-overlay-title">{title}</div>
        <button className="play-button" onClick={onPlay}>
          ▶ Play
        </button>
      </div>
    </div>
  );
}
