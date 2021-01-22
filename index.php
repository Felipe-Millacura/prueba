<!doctype html>
<html lang="en">
    <head>
    <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <title>Prueba</title>
    </head>
    <body>
        <form id="searchForm">
        <br>
            <div class="container">
                <div class="row">
                    <button class="btn btn-primary" id="btn_movie">Ver Cartelera</button>
                </div>
            </div>
            </form>
            <div class="container">
                <h1>Prueba</h1>
                <p class="lead">Listado de películas en el cine.</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre de la Pelicula.</th>
                            <th>Fecha de Estreno</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="movie"></td>
                            <td id="release"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script src="moviedb.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
  </body>
</html>