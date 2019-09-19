// client-side js
// run by the browser each time your view template is loaded

console.log('hello world!');

const movie = [
   'title: Avengers: Endgame, year: 2019, direct: Russo',
  'title: Pay It Forward, year: 2004, direct: Lender',
  'title: The Princess Bride, year: 1987, direct: Reiner',
   'title: A Beautiful Mind, year: 2001, direct: Howard',
   'title: Black Panther, year: 2018, direct: Coogler' 
];

const movieList = document.getElementById('movie');
const movieForm = document.forms[0];
const movieInput = dreamsForm.elements['movie'];


const appendNewMovie = function(movie) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = movie;
  movieList.appendChild(newListItem);
}


movie.forEach( function(movie) {
  appendNewMovie(movie);
});


movieForm.onsubmit = function(event) {
  event.preventDefault();

  movie.push(movieInput.value);
  appendNewMovie(movieInput.value);


  movieInput.value = '';
  movieInput.focus();
};
