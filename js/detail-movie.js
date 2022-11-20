//BOTÓN PARA FAVORITOS
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idmovie = qsObj.get ('idmovie');
let id = idmovie;
let boton = document.querySelector ('.boton-fav');
let favoritos_p = [];
let recuperoStorage = localStorage.getItem('favoritos_p');

/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos_p = JSON.parse(recuperoStorage);

};
if (favoritos_p.includes(idmovie)) {
    boton.innerText="Quitar de Favorito";
}
boton.addEventListener("click",function (e) {
    e.preventDefault()
    if(favoritos_p.includes(id)){
        let indice = favoritos_p.indexOf(id);
        favoritos_p.splice(indice,1);
        boton.innerText="Agregar a Favorito";
    }else{
        favoritos_p.push(id);
        boton.innerText="Quitar de Favorito";
    }
    let favToString = JSON.stringify(favoritos_p);
    localStorage.setItem('favoritos_p',favToString)
    
});


let algo = new URLSearchParams(this.location.search)
let id_pelicula = algo.get("p")
console.log(id_pelicula)

const api_key = '81faef6942a31915ed87b416fbba64ba'
let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`


let subtitulos = document.querySelector('.subtitulos');
let fecha_estreno = document.querySelector('.fecha-estreno');
let genero_pelicula = document.querySelector('.genero_pelicula');
let descripcion_peli = document.querySelector('.descripcion_peli');
let imagen = document.querySelector('#img');
let votos = document.querySelector('.votos');
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
        votos.innerText= data.vote_average
        time.innerText = data.runtime;
    })
    .catch(function (error) {
        console.log(error);
    })

 //boton ver  pelis similares  -- chequear codigo

 let botonSimil = document.getElementById(".botonSimil");
window.onclick = function(event) {
     if (event.target == botonSimil) {
         botonSimil.style.display = "none";
     }
 }



 // ver titulos  similares -- chequear codigo

<<<<<<< HEAD
//let Newurl = `https://api.themoviedb.org/3/movie/${movie_id}/alternative_titles?api_key${api_key}`
=======
let urlreco = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
let btn = document.querySelector('.botonSimil');
>>>>>>> 7d37ad4 (erorres)

fetch(urlreco)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data);
         return data;
        
    })
    .catch(function (error) {
        console.log(error);
        return error;
    })

