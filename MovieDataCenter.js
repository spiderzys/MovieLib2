import Constants from './Constants'

let instance = null

export default class MovieDataCenter {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    getMovieByID(id) {

    }

    getPlayingMovies() {
        let playingMoviesUrl = Constants.Url.playingMovie + Constants.apikey
        return fetch('https://facebook.github.io/react-native/movies.json') .then((response) => response.json()) .then((responseJson) => { return responseJson.movies; }) .catch((error) => { console.error(error); });
    }

    getMoviesByKeyword(keyword) {

    }


    getImagesByMovie(movie) {

    }



}