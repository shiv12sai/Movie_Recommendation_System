//It Handles UI interaction, validation, and navigation
//Populate dropdown with movie titles
function loadMovies(){
  const movieSelect=document.getElementById("movieSelect");

  movies.forEach(movie => {
    const option = document.createElement("option");
    option.value = movie.title;
    option.textContent = movie.title;
    movieSelect.appendChild(option);
  });
}

function goToResults(){
  const movieSelect = document.getElementById("movieSelect");
  const selectedMovie = movieSelect.value;
  if(selectedMovie === ""){
    alert("Please select a movie!");
    return;
  }
  localStorage.setItem("selectedMovie",selectedMovie);
  window.location.href="result.html";
}
document.addEventListener("DOMContentLoaded", loadMovies);
