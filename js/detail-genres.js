let api_key = "81faef6942a31915ed87b416fbba64ba";
let qs = location.search;
let objQs = new URLSearchParams(qs);
let idGen = objQs.get("id");
let nombreGen = objQs.get("name");
let genPelis = document.querySelector('.cont-listasPelis')
let urlDetalleGen = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGen}&with_watch_monetization_types=flatrate`;

fetch(urlDetalleGen)
.then(function(response) {
    return response.json();
}
).then(function(data) {
    let arrayGeneros = data.results
     console.log(arrayGeneros);
     let DetalleGen= ''

// se recorre la info de la API y se selecciona para mostrarla al usuario
    for(let i=0; i<4; i++){
        DetalleGen += `
        <article class="cajas">
                <a href="./detail-movie.html?p=${arrayGeneros[i].id}"><img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${arrayGeneros[i].poster_path}" alt=""></a>
                <p class="titulo">${arrayGeneros[i].title}</p>
            </article>
        <p class= "resultadoGen" ${arrayGeneros[i].poster_path} alt = <a href="./detail-genres.html?id=${arrayGeneros[i].id}" class= "detailLink"> </article>`
    }
    genPelis.innerHTML = DetalleGen;
}).catch(function (error) {
    console.log('el error es' + error)
})

//ahora en series
let urlDetalleGenSerie= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=${idGen}`
let genSeries = document.querySelector(".cont-listasSeries")
fetch(urlDetalleGenSerie)
.then(function(response) {
    return response.json();
}
).then(function(data) {
    let arrayGeneros = data.results
     console.log(arrayGeneros);
     let DetalleGen= ''

// se recorre la info de la API y se selecciona para mostrarla al usuario
    for(let i=0; i<4; i++){
        DetalleGen += `
        <article class="cajas">
                <a href="./detail-serie.html?s=${arrayGeneros[i].id}"><img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${arrayGeneros[i].poster_path}" alt=""></a>
                <p class="titulo">${arrayGeneros[i].name}</p>
            </article>
        <p class= "resultadoGen" ${arrayGeneros[i].poster_path} alt = <a href="./detail-genres.html?id=${arrayGeneros[i].id}" class= "detailLink"> </article>`
    }
    genSeries.innerHTML = DetalleGen;
}).catch(function (error) {
    console.log('el error es' + error)
})