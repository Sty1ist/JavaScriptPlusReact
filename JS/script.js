"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('how many movies have you watched?', '1');

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many movies have you watched?', '1');
    }

};

start();

let personalMovieDB = {
    count: numberOfFilms ? numberOfFilms : 0,
    movies: {},
    actors: {},
    genres: [],
    privat : false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count && personalMovieDB.count < 10) {
        console.log('watched quite a few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('you are a classic viewer');
    } else if (personalMovieDB.count >= 30){
        console.log('you are a movie buff');
    } else {
        console.log('error!');
    }
}

detectPersonalLevel();

function showMyDB(obj) {
    obj.privat == false ? console.log(obj) : '';
}

showMyDB(personalMovieDB);


function writeYourGenres(obj) {
    for(let i = 0; i < 3; i++) {
        let loveGenres = prompt(`Ваш любимый жанр под номером ${i+1}`, 'horror');
        obj.genres.push(loveGenres);
    }
}

writeYourGenres(personalMovieDB) 


console.log('personalMovieDB', personalMovieDB);
