/**
 * Type definitions for Netflix Clone application
 */

export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre?: string;
  rating?: number;
  description?: string;
  releaseYear?: number;
  duration?: number; // in minutes
}

export interface ContentRowProps {
  title: string;
  movies: Movie[];
  onMovieClick?: (movie: Movie) => void;
}

export interface MovieCardProps {
  movie: Movie;
  onPlay?: (movie: Movie) => void;
}

export interface NavLinkItem {
  label: string;
  icon?: string;
  href?: string;
}

export interface NavigationProps {
  isScrolled?: boolean;
  onNavClick?: (link: string) => void;
}

export interface FooterLink {
  label: string;
  onClick?: () => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onPlayClick?: () => void;
  onMoreInfoClick?: () => void;
}
