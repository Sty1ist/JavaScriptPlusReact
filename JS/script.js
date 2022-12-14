"use strict";

let numberOfFilms = +prompt('how many movies have you watched?', '1');

let personalMovieDB = {
    count: numberOfFilms ? numberOfFilms : 0,
    movies: {},
    actors: {},
    genres: [],
    privat : false,
}


for( let i = 0; i < 2; i++ ) {

    let questionLastWatched  = prompt('One of the last movies I watched');
    let questionHowMuch  = prompt('How much do you rate it');

    if( questionLastWatched != null && questionHowMuch != null && questionLastWatched != '' && questionHowMuch != '' && questionLastWatched.length <= 50) {
        personalMovieDB.movies[questionLastWatched] = questionHowMuch;
        console.log('done!')
    } else {
        console.log('error');
        i--;
    }

}

if(personalMovieDB.count && personalMovieDB.count < 10) {
    console.log('watched quite a few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are a classic viewer');
} else if (personalMovieDB.count >= 30){
    console.log('you are a movie buff');
} else {
    console.log('error!');
}

console.log('personalMovieDB', personalMovieDB);
