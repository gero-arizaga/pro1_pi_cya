//BOTÓN PARA FAVORITOS
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idserie = qsObj.get ('idserie');
let id = idserie;
let boton = document.querySelector ('.boton-fav');
let favoritos = [];
let recuperoStorage = localStorage.getItem('favoritos');
/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage);

};
if (favoritos.includes(idserie)) {
    boton.innerText="Quitar de Favorito";
}
boton.addEventListener("click",function (e) {
    e.preventDefault()
    if(favoritos.includes(id)){
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice,1);
        boton.innerText="Agregar a Favorito";
    }else{
        favoritos.push(id);
        boton.innerText="Quitar de Favorito";
    }
    let favToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos',favToString)
    
});


let alg = new URLSearchParams(this.location.search)
let tv_id = algo.get("q")
console.log(tv_id)

const api_key = '81faef6942a31915ed87b416fbba64ba'

let url = `https://api.themoviedb.org/3/tv/top_rated?${tv_id}?api_key=${api_key}&language=en-US&page=1`
//let url = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_key}&language=en-US&page=1`

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {

        let subtitulos = document.querySelector('.subtitulos');
        let fecha_estreno = document.querySelector('.fecha-estreno');
        let genero_series = document.querySelector('.genero_serie');
        let descripcion_serie = document.querySelector('.descripcion_serie');
        let imagen = document.querySelector('.item-detail');
        
        subtitulos.innerText += `${ data.name }`
        fecha_estreno.innerText += `${ data.first_air_date } `
        genero_series.innerText += `${ data.genres[0].name } `
        descripcion_serie.innerText += `${ data.overview } `
        imagen.innerHTML += `< img src = "https://image.tmdb.org/t/p/w500/${data.poster_path}" alt = "" > `
        
    })
    .catch(function (error) {
        console.log(error);
    })

