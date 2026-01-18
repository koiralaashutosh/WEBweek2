async function fetchMovie() {
  const movies = await fetch("https://swapi.info/api/films");
  const movieData = await movies.json();

  let moviesData = [];

  for (let movie of movieData) {
    moviesData.push(movie.title);
  }

  moviesData.sort();
  console.log(moviesData);
}

fetchMovie();
