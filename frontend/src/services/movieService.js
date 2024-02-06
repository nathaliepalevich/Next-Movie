import axios from 'axios';

const baseURL = 'http://localhost:3000';

const movieService = {
  getAllMovies() {
    return axios.get(`${baseURL}/movies`);
  },
  getMovieById(id) {
    return axios.get(`${baseURL}/movies/${id}`);
  },
};

export default movieService;
