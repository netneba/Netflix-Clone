const API_KEY=process.env.REACT_APP_API_KEY
const request={
    fetchTrending:`${Base_url}/trending/all/week?API_KEY=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`${Base_url}/discover/tv?API_KEY=${API_KEY}&with_networks=213`,   
    fetchTopRated:`${Base_url}/movie/top_rated?API_KEY=${API_KEY}&language=en-US`,
    fetchActionMovies:`${Base_url}/discover/movie?API_KEY=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`${Base_url}/discover/movie?API_KEY=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`${Base_url}/discover/movie?API_KEY=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`${Base_url}/discover/movie?API_KEY=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`${Base_url}/discover/movie?API_KEY=${API_KEY}&with_genres=99`,
}
export default request;