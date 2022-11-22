let api_key = "81faef6942a31915ed87b416fbba64ba";
let qs = location.search;
let objQs = new URLSearchParams(qs);
let idGenero = objQs.get("id");
let nameGenero = objQs.get("name");
let generoPeli = document.querySelector('.cont-listasPelis')
let urlDetailG = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenero}&with_watch_monetization_types=flatrate`;

fetch(urlDetailG)
.then(function(response) {
    return response.json();
}
).then(function(data) {
    let listaGeneros = data.results
     console.log(listaGeneros);
     let listaPelis= ''

// se recorre la info de la API y se selecciona para mostrarla al usuario
    for(let i=0; i<4; i++){
        listaPelis += `
        <article class="cajas">
                <a href="./detail-movie.html?p=${listaGeneros[i].id}"><img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${listaGeneros[i].poster_path}" alt=""></a>
                <p class="titulo">${listaGeneros[i].title}</p>
            </article>
        <p class= "generoElegido" ${listaGeneros[i].poster_path} alt = <a href="./detail-genres.html?p=${listaGeneros[i].id}" class= "linkDetalle"> </article>`
    }
    generoPeli.innerHTML = listaPelis;
}).catch(function (error) {
    console.log('el error es' + error)
})

//ahora en series
let urlDetailS= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=${idGenero}`
let generoSerie = document.querySelector(".cont-listasSeries")
fetch(urlDetailS)
.then(function(response) {
    return response.json();
}
).then(function(data) {
    let listaGeneros2 = data.results
     console.log(listaGeneros2);
     let listaSeries= ''

// se recorre la info de la API y se selecciona para mostrarla al usuario
    for(let i=0; i<4; i++){
        listaSeries += `
        <article class="cajas">
                <a href="./detail-serie.html?s=${listaGeneros2[i].id}"><img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${listaGeneros2[i].poster_path}" alt=""></a>
                <p class="titulo">${listaGeneros2[i].name}</p>
            </article>
        <p class= "resultadoGen" ${listaGeneros2[i].poster_path} alt = <a href="./detail-genres.html?id=${listaGeneros2[i].id}" class= "detailLink"> </article>`
    }
    generoSerie.innerHTML = listaSeries;
}).catch(function (error) {
    console.log('el error es' + error)
})