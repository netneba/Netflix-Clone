import React, { useState } from 'react'
import requests from './../../Utils/requests';
import Row from './Row';

const Rowlist = () => {

  const [activeTrailer, setActiveTrailer] = useState({
    rowTitle: "",
    url: ""
  }); return (
    <div>
      <Row title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      activeTrailer={activeTrailer}
        setActiveTrailer={setActiveTrailer} />
      <Row
        title="Trending"
        fetchUrl={requests.fetchActionMovies}
        activeTrailer={activeTrailer}
        setActiveTrailer={setActiveTrailer}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        activeTrailer={activeTrailer}
        setActiveTrailer={setActiveTrailer}
      />
      <Row title="Action Movies"
      fetchUrl={requests.fetchActionMovies} 
      activeTrailer={activeTrailer}
      setActiveTrailer={setActiveTrailer}
      />

      <Row title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}  
      activeTrailer={activeTrailer}  
        setActiveTrailer={setActiveTrailer}
        />

      <Row title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies} 
      activeTrailer={activeTrailer}
        setActiveTrailer={setActiveTrailer}
        />

      <Row title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies} 
      activeTrailer={activeTrailer}
      setActiveTrailer={setActiveTrailer}
        />
      <Row title="Documentaries"
      fetchUrl={requests.fetchDocumentaries} 
      activeTrailer={activeTrailer}
      setActiveTrailer={setActiveTrailer}
        />
      </div>
)
}
export default Rowlist














    //   <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    //   <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    //   <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    //   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    //   <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
    //   <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    //   <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    //   <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    // </div>