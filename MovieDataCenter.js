import Constants from './Constants'
import Realm from './Realm'

let instance = null


export default class MovieDataCenter {
    constructor() {
        if (!instance) {
            this.playingMovies = {}
            this.favoriteMovies = {}
            instance = this;
        }

        return instance;
    }

    getMovieByID(id) {

    }

    getPlayingMovies() {

        for (page = 0; page < Constants.maxNumberPagesOfPlayingMovies; page++) {


            let playingMoviesUrl = Constants.Url.playingMovie + Constants.apikey + "&page=" + page
            //let playingMoviesUrl = "https://facebook.github.io/react-native/movies.json"
            console.log(playingMoviesUrl)
            fetch(playingMoviesUrl).then((response) => response.json()).then((responseJson) => {

                console.log(responseJson.result)


            }).catch((error) => { console.log("!!!!!") });

        }
    }

    getMoviesByKeyword(keyword) {

    }


    getImagesByMovie(movie) {

    }

    removeStoredMovies() {
        realm.write(() => {

            let storedMovies = realm.objects('Movie');
            realm.delete(storedMovies);
        });
    }




}