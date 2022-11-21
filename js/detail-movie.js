//BOTÓN PARA FAVORITOS
let algo = new URLSearchParams(this.location.search) 
let id_pelicula = algo.get("p")
console.log(id_pelicula)
let boton = document.querySelector ('.boton-fav');
let favoritos_p = '[]';
let recuperoStorage = localStorage.getItem('favoritos_p');
let condition = favoritos_p.includes(id_pelicula)

/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos_p = JSON.parse(recuperoStorage, Array);
    console.log(typeof favoritos_p)

};
if (condition) {
    boton.innerText('Quitar de favoritos')
}
boton.addEventListener("click",function (e) {
    e.preventDefault()
    if(condition){
        let indice = favoritos_p.indexOf(id_pelicula);
        favoritos_p.splice(indice,1);
        boton.innerText="❤ Agregar a Favorito";
    }else{
        favoritos_p.push(id_pelicula);
        boton.innerText="Quitar de Favorito";
    }
    let favToString = JSON.stringify(favoritos_p);
    localStorage.setItem('favoritos_p',favToString)

});

// detalle de peliculas: 



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
        

         subtitulos.innerText = data.title;
         fecha_estreno.innerText = data.release_date;
         genero_pelicula.innerText = data.genres[0].name;
         descripcion_peli.innerText = data.overview;
         imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
         votos.innerText= `Rating: ${data.vote_average}`;
         time.innerText = `${data.runtime} minutes`;
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

//let urlreco = `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba`
let btn = document.querySelector('.botonSimil');



//let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`
let detalle_pelicula = document.querySelector(".cont-detail")

fetch(urlreco)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
       detalle_pelicula.innerText +=
       `<section class="Recomendaciones "> </section>`
       let Recomendaciones = document.querySelector(".Recomendaciones")
        for (let i = 0; i < 5; i++){
            Recomendaciones.innerHTML +=
            `<img id="img" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" ></img>`
        }
        
        console.log(data);
        let botonSimil = document.querySelector(".Show Recomendations")
        botonSimil.addEventListener("click", function (){
            let Recomendaciones = document.querySelector(".Recomendaciones")
            console.log(Recomendaciones.style.display);
            if (Recomendaciones.style.display == "none"){
                Recomendaciones.style.display = "block"
                botonSimil.innerText = "ocultar"
            } else {
                Recomendaciones.style.display = "none"
                botonSimil.innerText = "mostrar"
            }
        })

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })

console.log(favoritos_p)