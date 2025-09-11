import React, { useState, useEffect } from 'react';
import axios from '../../Utils/axios';
import styles from './Row.module.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';


const Row=({ title, fetchUrl, isLargeRow, activeTrailer, setActiveTrailer }) =>{
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results || []);
    }
    fetchData();
  }, [fetchUrl]);
  
  const handleClick = (movie) => {
  const movieName = movie?.name || movie?.title || movie?.original_name || "";

  if (
    activeTrailer.rowTitle === title &&
    activeTrailer.movieId === movie.id
  ) {
    setActiveTrailer({ rowTitle: "", url: "", movieId: null });
    return;
  }

  movieTrailer(movieName)
    .then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search);
      setActiveTrailer({
        rowTitle: title,
        url: urlParams.get("v"),
        movieId: movie.id,
      });
    })
    .catch((error) => console.error("Trailer not found: ", error));
};

  const opts = {
    height: "500px",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className={styles.row}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.posters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${styles.poster} ${isLargeRow ? styles.largePoster : ""}`}
            src={`https://image.tmdb.org/t/p/w300${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      {activeTrailer.rowTitle === title && activeTrailer.url && (
        <YouTube videoId={activeTrailer.url} opts={opts} />
      )}
    </div>
  );
}

export default Row;




// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results || []);
//     }
//     fetchData();
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl(''); 
//     } else {
//       movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get('v'));
//         })
//         .catch((error) => console.error('Trailer not found: ', error));
//     }
//   };

//   const opts = {
//     height: '500px',
//     width: '100%',
//     playerVars: { autoplay: 1 },
//   };

//   return (
//     <div className={styles.row}>
//       <h2 className={styles.title}>{title}</h2>
//       <div className={styles.posters}>
//         {movies.map((movie) => (
//           <img
//             key={movie.id}
//             className={`${styles.poster} ${isLargeRow ? styles.largePoster : ''}`}
//             src={`https://image.tmdb.org/t/p/w300${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//             alt={movie.name || movie.title}
//             onClick={() => handleClick(movie)}
//           />
//         ))}
//       </div>
//       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     </div>
//   );
// }

// export default Row;



