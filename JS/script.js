"use strict";

let numberOfFilms = prompt('how many movies have you watched?', '1');

let personalMovieDB = {
    count: numberOfFilms ? numberOfFilms : 0,
    movies: {},
    actors: {},
    genres: [],
    privat : false,
}

let questionLastWatched  = prompt('One of the last movies I watched');
let questionHowMuch  = prompt('How much do you rate it');
let questionLastWatched1  = prompt('One of the last movies I watched');
let questionHowMuch1  = prompt('How much do you rate it');

personalMovieDB.movies[questionLastWatched] = questionHowMuch;
personalMovieDB.movies[questionLastWatched1] = questionHowMuch1;

console.log('personalMovieDB', personalMovieDB);
