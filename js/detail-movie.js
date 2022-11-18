let algo = new URLSearchParams(this.location.search)
let id_pelicula = algo.get("q")
console.log(id_pelicula)

const api_key = '81faef6942a31915ed87b416fbba64ba'
let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {

        let subtitulos = document.querySelector('.subtitulos');
        let fecha_estreno = document.querySelector('.fecha-estreno');
        let genero_pelicula = document.querySelector('.genero_pelicula');
        let descripcion_peli = document.querySelector('.descripcion_peli');
        let imagen = document.querySelector('.item-detail');

        subtitulos.innerText += `${data.title}`
        fecha_estreno.innerText += `${data.release_date}`
        genero_pelicula.innerText += `${data.genres[0].name}`
        descripcion_peli.innerText += `${data.overview}`
        imagen.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">`
        
    })
    .catch(function (error) {
        console.log(error);
    })

                            /* agregar peliculas  a favoritos:  */

    /*   array vacio - para luego rellenarlo */
let favoritos = [];

/* recuperamos el storage */
let recuperoStorage = localStorage.getItem('favoritos');
    /* ["2"] */
/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage);
    /* [2] */
};

/* Validar si este id existe en el favoritos (localsStorage) */
if (favoritos.includes(id_pelicula)) {
    btn.innerText="Quitar de Favorito";
}

/* Agregarle un evento al boton de agregar a favorito */
btn.addEventListener("click",function (e) {
    e.preventDefault()
    
    /* Si lo incluye, que lo elimine del array y al boton le ponga "Agregar Favorito" */
    if(favoritos.includes(id)){
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice,1);
        btn.innerText="Agregar a Favorito";
    }else{
    /* Si NO lo incluye, que lo agregue al array y al boton le ponga "Quitar Favorito" */
        favoritos.push(id);
        btn.innerText="Quitar de Favorito";
    }

    /* Si lo incluye o no, quiero poder subir el array al localStorage ->
    Pero tengo que pasarlo a JSON primeramente*/
    let favToString = JSON.stringify(favoritos);
/*      ["2","4","5"]                [2,4,5]        */
    /* Cuando este en JSON ahora si puedo subirlo al localStorage */
    localStorage.setItem('favoritos',favToString)
});

