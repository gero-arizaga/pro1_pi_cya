
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
        boton.innerText="Agregar a Favorito";
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

const api_key = '81faef6942a31915ed87b416fbba64ba'
let Url = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_key}&language=en-US&page=1`


let subtitulos = document.querySelector('.subtitulos');
let fecha_estreno = document.querySelector('.fecha-estreno');
let genero_series = document.querySelector('.genero_serie');
let descripcion_serie = document.querySelector('.descripcion_serie');
let imagen = document.querySelector('#img');
let vote = document.querySelector('.vote');
let time = document.querySelector('.time');


//let url = `https://api.themoviedb.org/3/tv/top_rated${tv_id}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
let url = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_key}&language=en-US&page=1`


fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {


         let subtitulos = document.querySelector('.subtitulos');
         let fecha_estreno = document.querySelector('.fecha-estreno');
         let genero_series = document.querySelector('.genero_serie');
         let descripcion_serie = document.querySelector('.descripcion_serie');
         let imagen = document.querySelector('#img');
         let vote = document.querySelector('.vote');
         let time = document.querySelector('.time');


        
        subtitulos.innerText = `${ data.name }`
        fecha_estreno.innerText = `${ data.first_air_date } `
        genero_series.innerText = `${ data.genres[0].name } `
        descripcion_serie.innerText = `${ data.overview } `
        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        vote.innerText = `${data.vote_average}`
        time.innerText = `${data.runtime}`


    })
    .catch(function (error) {
        console.log(error);
    })

   
   
    // boton de ver series similares 
   
    let botonSimil = document.getElementById(".botonSimil");
    window.onclick = function(event) {
         if (event.target == botonSimil) {
             botonSimil.style.display = "none";
         }
     }



     