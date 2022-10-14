//const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const mapped = moviesArray.map((element) => element.director);
  return mapped;
}
//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  const spielbergMovies = moviesArray.filter((element) => {
    if (
      element.director.includes("Spielberg") &&
      element.genre.includes("Drama")
    )
      ++count;
  });
  return count;
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let mapped = moviesArray.map((element) => element.score || 0);
  let scores = mapped.reduce((a, b) => a + b, 0) / mapped.length;
  return Number(scores.toFixed(2));
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let filteredDramaMovies = moviesArray.filter((element) => {
    if (element.genre.includes("Drama")) return element.score;
  });
  if (!filteredDramaMovies.length) return 0;
  let mapped = filteredDramaMovies.map((element) => element.score);
  let scores = mapped.reduce((a, b) => a + b, 0) / mapped.length;
  return Number(scores.toFixed(2));
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyOfMyArray = [...moviesArray];
  copyOfMyArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    } else return a.year - b.year;
  });
  return copyOfMyArray;
}

//console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let mapped = moviesArray.map((element) => element.title);
  let copyOfMyArray = [...mapped];
  copyOfMyArray.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return a - b;
  });
  return copyOfMyArray.slice(0, 20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
