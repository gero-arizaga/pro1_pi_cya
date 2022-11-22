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


const api_key = "81faef6942a31915ed87b416fbba64ba";
let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`;

//seleccione todos los elementos del DOM

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

let urlreco = `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${api_key}`;

fetch(urlreco)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
      //capture el elemento  html donde quiero hacer una modificacion
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
            e.preventDefault();          //evita el comport x default del hipervinculo
            recomendaciones.classList.toggle("ocultar"); //si oculatr no existe lo anade, de lo contrario la elimina 
        })
    })
    .catch(function (error) {
        console.log(error);
    });
