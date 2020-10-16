// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (moviesList) => {
  const movieDirectorsList = moviesList.map((x) => x.director);
  
  return movieDirectorsList;
}

//just for debugging purposes
let movies = [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Steven Spielberg",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {
    "title": "The Godfather: Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  }]

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// const getAllDirectors = (moviesList) => {
//     const movieDirectorsList = moviesList.map((movie) => movie.director);
//     const removedDuplicates = movieDirectorsList.reduce((acc, currentValue) => {
//       if (acc.includes(currentValue)) {
//         return acc;
//       } else {
//         return [...acc, currentValue];
//       }
//     }, []);
//     return removedDuplicates;
//   };

//Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//x is used even it does not make sense for now, it made me understand iteration better
const howManyMovies = (moviesList) => {
  let stevenDramaMovie= moviesList.filter((x) => x.director === "Steven Spielberg" && x.genre.includes("Drama"));
  
  return stevenDramaMovie;
}
howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = moviestList => {
  if(moviestList.length ===0) {return 0};
  let total = moviestList.map(x => x["rate"]);
  let average = total.reduce((a,b) => a+b);

  return Number((average / moviestList.length).toFixed(2));
};
ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = moviesList => {
  let dramaMovies = moviesList.filter(dramas => dramas["genre"].includes("Drama"));
  if (dramaMovies.length === 0){return 0};
  let dramaRates= dramaMovies.map(movies => movies["rate"]);
  let average = rates.reduce((a,b) => a+b);
  
  return Number((average / dramaMovies.length).toFixed(2));
}
dramaMoviesRate(movies);
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (moviesList) => {
  return moviesList.sort(function (a, b) {
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesList) {
  let moviesTitle = moviesList.map(array => array.title)
  let titleArray = moviesTitle.sort()
  //from 0 to 20
  let slicedTitleArray = titleArray.slice(0, 20)
  return slicedTitleArray
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average