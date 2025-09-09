import React from 'react'
import requests from './../../Utils/requests';
import Row from './Row';

const Rowlist = () => {
 return (
    <div className="Rowlist">
    {/* <h1>Netflix Originals</h1> */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      {/* <h1>Top Rated</h1> */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* <h1>Trending Now</h1> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <h1>Action Movies</h1> */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      {/* <h1>Comedy Movies</h1> */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      {/* <h1>Horror Movies</h1> */}
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/* <h1>Romance Movies</h1> */}
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <h1>Documentaries</h1> */}
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
    
    )
}

export default Rowlist
