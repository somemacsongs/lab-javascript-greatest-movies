// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movies) => movies.director);
    return directors;
}

// bonus:
function getAllDirectorWoDuplicates(moviesArray) {
    const directors = moviesArray.map((movies) => movies.director);
    let directorsWoDuplicates = [];
    for (let i=0; i<directors.length; i++){
        let isDuplicate = false;
        for (let j=0; j<i; j++){
            if (directors[i] === directors[j]){
                isDuplicate = true;
            }
        }
        if (!isDuplicate){
            directorsWoDuplicates.push(directors[i]);
        }
    }
    return directorsWoDuplicates;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    let howMany = 0;
    const onlyDramaSpielberg = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg"){
            for (let i=0; i<movie.genre.length; i++){
                if (movie.genre[i] === "Drama"){
                    howMany += 1;
                    return true;
                }
            }
            return false;
        } else {
            return true;
        }
    });
    return howMany;  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0){
        return 0;
    }
    const sumScores = moviesArray.reduce((acc, curentMovie) => {
        if (!curentMovie.score){
            return acc + 0;
        }
        return acc + curentMovie.score;
    }, 0);
    const average = sumScores/moviesArray.length;
    return +(Math.round(average + "e+2")  + "e-2");  //metodo achado na internet
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length == 1){
        return moviesArray[0].score;
    }

    /* versão usando loops:
    let numDramaMovies = 0;
    let sumScores = 0;
    for (let i=0; i<moviesArray.length; i++){
        for (let j=0; j<moviesArray[i].genre.length; j++){
            if (moviesArray[i].genre[j] === "Drama"){
                numDramaMovies += 1;
                sumScores += moviesArray[i].score;
            }
        }
    }
    if (numDramaMovies === 0){
        return 0;
    }
    const averageDrama = sumScores / numDramaMovies;
    return +(Math.round(averageDrama + "e+2") + "e-2");*/

    // versão usando filter e reduce
    const onlyDrama = moviesArray.filter((currentMovie) => {
        for (let i=0; i<currentMovie.genre.length; i++){
            if (currentMovie.genre[i] === "Drama"){
                return true;
            }
        }
        return false;
    });
    if (onlyDrama.length === 0){
        return 0;
    }
    const sumScoresDrama = onlyDrama.reduce((acc, currentMovie) => {
        return acc + currentMovie.score;
    }, 0);
    const averageDrama = sumScoresDrama / onlyDrama.length;
    return +(Math.round(averageDrama + "e+2") + "e-2");
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const cloneMoviesArray = JSON.parse(JSON.stringify(moviesArray));
    cloneMoviesArray.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) return 1;
        if (movie1.year < movie2.year) return -1;
        if (movie1.year === movie2.year && movie1.title > movie2.title) return 1;
        if (movie1.year === movie2.year && movie1.title < movie2.title) return -1;
        if (movie1.year === movie2.year && movie1.title === movie2.title) return 0;
    });
    
    return cloneMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let cloneMoviesArray = JSON.parse(JSON.stringify(moviesArray));
    cloneMoviesArray.sort((movie1, movie2) => {
        if (movie1.title>movie2.title) return 1;
        if (movie1.title<movie2.title) return -1;
        if (movie1.title===movie2.title) return 0;
    });
    cloneMoviesArray = cloneMoviesArray.slice(0, 20);
    console.log(cloneMoviesArray);
    for (let i=0; i<cloneMoviesArray.length; i++){
        cloneMoviesArray[i] = cloneMoviesArray[i].title;
    }
    return cloneMoviesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
