
// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movie => (movie.director.includes(director)));
  console.log("EXERCICE 2 ->", result);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let selectedMovies = getMoviesFromDirector(movies, director);
  let sumScores = selectedMovies.reduce((prev, curr) => {
    if (curr.score === "") {
      return prev + 0;
    } else {
      return prev + curr.score;
    }
  }, 0);

  let result = 0;

  if (sumScores % 1 != 0) {
    result = parseFloat((sumScores / selectedMovies.length).toFixed(2));
  } else {
    result = parseInt(sumScores / selectedMovies.length);
  }

  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let arrayCopy = [...movies];

  /*if (movies.length < 20) {
    arrayCopy = movies.map(movie => movie.title.toString());
  } else {
    arrayCopy = movies.slice(0, 21).map(movie => movie.title.toString());
  }*/
  
  let sortedTitles = arrayCopy.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });

  let result = sortedTitles.slice(0, 21).map(movie => movie.title);
  
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let newArray = [...movies];
  newArray.sort(function (a, b) {
    if (a.year !== b.year) return a.year - b.year;
    if (a.year === b.year) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    }
  });

  console.log("EXERCICE 5 ->", newArray);
  return newArray;
}

// Exercise 6: Calculate the average of the movies in a category 
function moviesAverageByCategory(movies, genre = "Crime") {
  let films = movies.filter(film => film.genre === genre);

  let calculateAverage = moviesAverageOfDirector(films, films.director);
  console.log("EXERCICE 6 ->", calculateAverage);
  return calculateAverage;
}

function conversion (duration) {
  let timeArray = duration.split(" ");
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  let totalMinutes = 0;

  if (minutes == undefined) { //si no existe la categoría minutos 
    totalMinutes = parseInt(hours * 60);
  } else {
    totalMinutes = parseInt(hours * 60 + minutes);
  }

  //let totalMinutes = parseInt(hours * 60 + minutes);
  return totalMinutes;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let newArray = [...movies];

  newArray.forEach(movie => {
    movie.duration = conversion(movie.duration);
  });

  console.log("EXERCICE 7 ->", newArray);
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const filmsOfYear = movies.filter(movie => movie.year == year);

  const bestMovie = filmsOfYear.reduce((acc, curr) => {
    return Math.max(acc, curr.score);
  }, 0)
  
  const result = filmsOfYear.filter(movie => movie.score.includes(bestMovie));


  //const bestMovie = filmsOfYear.filter(movie => Math.max(movie.score));


  /*
  const newArray = [];
  const bestMovie = filmsOfYear.find(movie => Math.max(movie.score));
  newArray.push(bestMovie);*/

  //const bestMovie = filmsOfYear.find(movie => Math.max(movie.score));

  console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
