let algo = new URLSearchParams(this.location.search);
let id_pelicula = algo.get("p");
console.log(id_pelicula);

let boton = document.querySelector(".boton-fav");
let favoritos_p = [];
let recuperoStorage = localStorage.getItem("favoritos_p");

/* Preguntamos si es distinto de nulo-  es verdadero quiero convertirlo de JSON a un array */
if (recuperoStorage != null) {
  favoritos_p = JSON.parse(recuperoStorage);
}
if (favoritos_p.includes(id_pelicula)) {
  boton.innerText = "Quitar de Favorito";
}
boton.addEventListener("click", function (e) {
  e.preventDefault();
  if (favoritos_p.includes(id)) {
    let indice = favoritos_p.indexOf(id);
    favoritos_p.splice(indice, 1);
    boton.innerText = "❤ Agregar a Favorito";
  } else {
    favoritos_p.push(id);
    boton.innerText = "Quitar de Favorito";
  }
  let favToString = JSON.stringify(favoritos_p);
  localStorage.setItem("favoritos_p", favToString);
});
console.log(favoritos_p)

const api_key = "81faef6942a31915ed87b416fbba64ba";
let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`;

let subtitulos = document.querySelector(".subtitulos");
console.log(subtitulos);
let fecha_estreno = document.querySelector(".fecha-estreno");
console.log(fecha_estreno);
let genero_pelicula = document.querySelector(".genero_pelicula");
console.log(genero_pelicula);
let descripcion_peli = document.querySelector(".descripcion_peli");
console.log(descripcion_peli);
let imagen = document.querySelector("#img");
console.log(imagen);
let votos = document.querySelector(".votos");
console.log(votos);
let time = document.querySelector(".time");
console.log(time);

fetch(url)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (data) {
    console.log(data);

    subtitulos.innerText += `${data.title}`
    fecha_estreno.innerText +=  `${data.release_date}`
    genero_pelicula.innerText += `${data.genres[0].name}`
    descripcion_peli.innerText += `${data.overview}`
    imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    votos.innerText += `${data.vote_average}`
    time.innerText += `${data.runtime}`
  })
  .catch(function (error) {
    console.log(error);
  });

// api de recomendaciones pelis:

 fetch(url)
     .then(function (respuesta) {
         return respuesta.json();
     })
     .then(function (data) {
         console.log(data);
        

         subtitulos.innerText = data.title;
         fecha_estreno.innerText = `Fecha de estreno: ${data.release_date}`;
         genero_pelicula.innerHTML = `<p class="genero_pelicula">Genero:<a class='generoDetail' href='./detail-genres.html?id=${data.genres[0].id}'>${data.genres[0].name}</a></p>`;
         descripcion_peli.innerText = data.overview;
         imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
         votos.innerText= `Calificacion: ${data.vote_average}`;
         time.innerText = `Duracion: ${data.runtime} minutes`;
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
let urlreco = `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${api_key}`;

fetch(urlreco)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        let recomendaciones = document.querySelector(".recomendaciones");
        
        for (let i = 0; i < 5; i++) {
            recomendaciones.innerHTML += `<li>
                <a href="detail-movie.html?p=${data.results[i].id}">
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                    <p>${data.results[i].title}</p>
                    <p>${data.results[i].release_date}</p>

                </a>
            </li>`;
        }

        let btn_recomendaciones = document.querySelector(".btn-recomendaciones");

        btn_recomendaciones.addEventListener("click", function (e) {
            e.preventDefault();
            recomendaciones.classList.toggle("ocultar");
        })
    })
    .catch(function (error) {
        console.log(error);
    });
