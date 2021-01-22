window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchForm").addEventListener("submit", loadMovies);
});

function loadMovies(e) {
    let input = document.getElementById("btn_movie");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.themoviedb.org/3/movie/now_playing?api_key=2599a98628cbf552614bfb7036c9e71f`, true);
    xhr.onload = function () {
            let movies = document.getElementById("movie");
            movies.innerHTML = "";
            let res = JSON.parse(this.responseText);
            res.results.forEach(function (movie) {
                movies.innerHTML += `
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <p><a onclick="movieSelected('${movie.id}')" href="#" id="movie">${movie.title}</a></p>
                        </div>
                        <div class="col-md-4">
                            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid">
                        </div>
                        <div class="col-md-4">
                            <p style="text-align:right;">${movie.release_date}</p>
                        </div>
                    </div>
                </div>
                <br>
                `;
            });
    }

    xhr.send();

    e.preventDefault();
  }