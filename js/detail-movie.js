
let algo = new URLSearchParams(this.location.search)
let id_pelicula = algo.get("q")
console.log(id_pelicula)

const api_key = '81faef6942a31915ed87b416fbba64ba'
let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`


let subtitulos = document.querySelector('.subtitulos');
let fecha_estreno = document.querySelector('.fecha-estreno');
let genero_pelicula = document.querySelector('.genero_pelicula');
let descripcion_peli = document.querySelector('.descripcion_peli');
let imagen = document.querySelector('#img');
let pepe = document.querySelector('.votos');
let time = document.querySelector('.time');


fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data);
        let dato =data.runtime;

        subtitulos.innerText = data.title;
        fecha_estreno.innerText = data.release_date;
        genero_pelicula.innerText = data.genres[0].name;
        descripcion_peli.innerText = data.overview;
        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        pepe.innerText= data.vote_average
        time.innerText = data.runtime;
    })
    .catch(function (error) {
        console.log(error);
    })

 //boton ver  pelis similares 

 let botonSimil = document.getElementById(".botonSimil");
window.onclick = function(event) {
     if (event.target == botonSimil) {
         botonSimil.style.display = "none";
     }
 }
 




