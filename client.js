// client-side js
// run by the browser each time your view template is loaded

console.log('hello world!');

const movie = [
  'Avengers: Endgame',
  'A Beautiful Mind',
  'Pay it Forward'
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
