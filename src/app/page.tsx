'use client';

import ContentRow from '@/components/ContentRow';
import { movieCollections } from '@/data/movies';

export default function Home() {
  return (
    <main>
      <ContentRow title="Trending Now" movies={movieCollections.trending} />
      <ContentRow title="Top Rated" movies={movieCollections.topRated} />
      <ContentRow title="Action Movies" movies={movieCollections.action} />
      <ContentRow title="Comedy Shows" movies={movieCollections.comedy} />
      <ContentRow title="Romantic Films" movies={movieCollections.romantic} />
      <ContentRow title="Documentaries" movies={movieCollections.documentaries} />
    </main>
  );
}
