// window.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("searchForm").addEventListener("submit", loadMovies);
// });

var archivo = document.getElementById("searchForm");
if(archivo)
{
    archivo.addEventListener("submit",loadMovies,false);
}

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

  function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'detalle.php';
    return false;
}

function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
  
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2599a98628cbf552614bfb7036c9e71f`)
      .then((response) => {
        console.log(response);
        let movie = response.data;
  
        let output =`
          <div class="row">
            <div class="col-md-4">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid">
            </div>
            <div class="col-md-8">
              <h2>${movie.title}</h2>
              <ul class="list-group">
                <li class="list-group-item"><strong>Genero:</strong> ${movie.genres}</li>
                <li class="list-group-item"><strong>Fecha Estreno:</strong> ${movie.release_date}</li>
                <li class="list-group-item"><strong>Estado:</strong> ${movie.status}</li>
                <li class="list-group-item"><strong>Sinopsis:</strong> ${movie.overview}</li>
                <li class="list-group-item"><strong>Metascore:</strong> ${movie.vote_average}/10 <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" class="img-fluid" width=3%;></li>
                <li class="list-group-item"><strong>Votaciones:</strong> ${movie.vote_count}</li>
                <li class="list-group-item"><strong>Lema/Eslogan:</strong> ${movie.tagline}</li>
                <li class="list-group-item"><strong>Duracion:</strong> ${movie.runtime} m</li>
              </ul>
            </div>
          </div>
          <br>
          <a class="btn btn-primary" href="index.php">Volver a Cartelera</a>
        `;
  
        $('#movie').html(output);
      })
  }

// function getMovie() {
//     let movieId = sessionStorage.getItem('movieId');
//     // Make a request for a user with a given ID
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://api.themoviedb.org/3/movie/${movieId}?api_key=2599a98628cbf552614bfb7036c9e71f`,true);
//     xhr.onload = function () {
//         if (this.status === 200) {
//             let movie = JSON.parse(response.data);
//             Console.log(movie)
//         }
//     }
// } 