//BOTÓN PARA FAVORITOS
let alg = new URLSearchParams(this.location.search);
let id_pelicula = alg.get("p");
let boton = document.querySelector ('.boton-favs');
let favoritos_s = [];
let recuperoStorage = localStorage.getItem('favoritos_s');

/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos_s = JSON.parse(recuperoStorage);
    console.log(typeof favoritos_s);

};
let condition = favoritos_s.includes(id_pelicula);
console.log(condition)
if (favoritos_s.includes(id_pelicula)) {
    boton.innerText = "Quitar de favoritos";
}
boton.addEventListener("click",function (e) {
    e.preventDefault()
    if(recuperoStorage != null){
        recuperoStorage = localStorage.getItem('favoritos_s');
        favoritos_s = JSON.parse(recuperoStorage);
        console.log(typeof favoritos_s);
    
    };
    console.log(favoritos_p.includes(id_pelicula))
    if (favoritos_s.includes(id_pelicula)) {
        let indice = favoritos_s.indexOf(id_pelicula);
        favoritos_s.splice(indice,1);
        console.log(indice);
        boton.innerText="❤ Agregar a Favorito";
        console.log('post agregar a favoritos', favoritos_s);
    }else{
        favoritos_s.push(id_pelicula);
        boton.innerText="Quitar de Favorito";
        console.log(favoritos_s);
    }
    let favToString = JSON.stringify(favoritos_s);
    console.log('actualizando storage', favToString)
    localStorage.setItem('favoritos_s',favToString);

});
console.log(favoritos_p)



let algo = new URLSearchParams(this.location.search)
let tv_id = algo.get("s")
console.log(tv_id)

const api_key = '81faef6942a31915ed87b416fbba64ba';
let Url = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_key}//&language=en-US//&page=1`;
console.log(Url)

let subtitulos = document.querySelector('.subtitulos');
let fecha_estreno = document.querySelector('.fecha-estreno');
let genero_series = document.querySelector('.genero_serie');
let descripcion_serie = document.querySelector('.descripcion_serie');
let imagen = document.querySelector('#img');
let vote = document.querySelector('.vote');
let time = document.querySelector('.time');



let url = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_key}&language=en-US&page=1`
console.log(url)

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {

        console.log(data);

       ///
        


        
        subtitulos.innerText += data.name; 
        fecha_estreno.innerText += `Fecha de estreno: ${data.first_air_date}`;
        genero_series.innerHTML += `<a class='generoDetail' href='./detail-genres.html?id=${data.genres[0].id}'>${data.genres[0].name}</a>`;
        descripcion_serie.innerText += data.overview ;
        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        vote.innerText += `Calificacion: ${data.vote_average}`;


    })
    .catch(function (error) {
        console.log(error);
    })

   
   
    // api de ver series recomendadas:  
   
     let urlreco = `https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba`;
     fetch(urlreco)
         .then(function (respuesta) {
             return respuesta.json();
         })
         .then(function (data) {
             let recomendaciones = document.querySelector(".recomendaciones");
             console.log(recomendaciones)
             
             for (let i = 0; i < 5; i++) {
                 recomendaciones.innerHTML += `<li>
                     <a href="detail-serie.html?s=${data.results[i].id}">
                         <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                         <p>${data.results[i].name}</p>
                         <p>${data.results[i].first_air_date}</p>

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
     
     
     

     