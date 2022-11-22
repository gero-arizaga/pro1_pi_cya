
//BOTÓN PARA FAVORITOS
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idserie = qsObj.get ('idserie');
let id = idserie;
let boton = document.querySelector ('.boton-fav');
let favoritos_s = [];
let recuperoStorage = localStorage.getItem('favoritos_s');

/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos_s = JSON.parse(recuperoStorage);

};
if (favoritos_s.includes(idserie)) {
    boton.innerText="Quitar de Favorito";
}
boton.addEventListener("click",function (e) {
    e.preventDefault()
    if(favoritos_s.includes(id)){
        let indice = favoritos_s.indexOf(id);
        favoritos_s.splice(indice,1);
        boton.innerText="❤ Agregar a Favorito";
    }else{
        favoritos_s.push(id);
        boton.innerText="Quitar de Favorito";
    }
    let favToString = JSON.stringify(favoritos_s);
    localStorage.setItem('favoritos_s',favToString)
    
});




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

         let subtitulos = document.querySelector('.subtitulos');
         console.log(subtitulos);
         let fecha_estreno = document.querySelector('.fecha-estreno');
         console.log(fecha_estreno)
         let genero_series = document.querySelector('.genero_serie');
        console.log(genero_series)
         let descripcion_serie = document.querySelector('.descripcion_serie');
            console.log(descripcion_serie)
         let imagen = document.querySelector('#img');
            console.log(imagen)
         let vote = document.querySelector('.vote');
            console.log(vote)
        


        
        subtitulos.innerText += ` ${ data.name }`
        fecha_estreno.innerText += ` ${ data.first_air_date } `
        genero_series.innerText += ` ${ data.genres.name } `  
        genero_series.innerText += ` ${ data.genres[0].name } `
        descripcion_serie.innerText += ` ${ data.overview } `
        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        vote.innerText += ` ${data.vote_average}`


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
                     <a href="detail-serie.html?p=${data.results[i].id}">
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
     
     
     

     