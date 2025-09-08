import React, { useState, useEffect } from 'react';
import axios from '../../Utils/axios';
import requests from '../../Utils/requests';
import styles from './banner.module.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;

        if (results && results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        } else {
          console.warn('No results found');
        }
      } catch (error) {
        console.error('Banner fetch error:', error);
      }
    }

    fetchData();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + '...' : str;

  if (!movie) return null;

  return (
    <header
      className={styles.banner}
      style={{
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : 'none',
      }}
    >
      <div className={styles.bannerContents}>
        <h1 className={styles.bannerTitle}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className={styles.bannerButtons}>
          <button className={styles.bannerButton}>Play</button>
          <button className={styles.bannerButton}>My List</button>
        </div>

        <p className={styles.bannerDescription}>
          {truncate(movie?.overview, 150)}
        </p>
      </div>

      <div className={styles.bannerFadeBottom} />
    </header>
  );
}

export default Banner;
