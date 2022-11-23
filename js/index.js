
let api_key = '81faef6942a31915ed87b416fbba64ba'
let url_popu  = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
let url_latest  = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
let url_series = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`;
let listaPeli = document.querySelector('.cont-listas_pelis');
let listaLatest = document.querySelector('.cont-listas_latest');
let listaSeries = document.querySelector('.cont-listas_series')

window.addEventListener('load', function (e) {
    this.document.querySelector('#loader').classList.toggle('loader2')
})
fetch(url_popu)
.then(function(respuesta) {
    return respuesta.json();
}).then(function(data) {

    console.log(data.results);
    for (let i = 0; i < 5; i++) {
        
        let popular = data.results[i];
        listaPeli.innerHTML += `<article class="item">
        <a href="./detail-movie.html?p=${popular.id}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt=""></a>
                                <a href="./detail-movie.html?p=${popular.id}"><h3>${popular.title}</h3></a>
                                <a href="./detail-movie.html?p=${popular.id}"><p>${popular.release_date}</p></a>
                                <a href="./detail-movie.html?p=${popular.id}" class="ver_mas">Ver mas</a>
                                    </article>` 
    }



    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});









fetch(url_latest)
.then(function(respuesta) {
    return respuesta.json();
}).then(function(data) {

    console.log(data.results);
    for (let i = 0; i < 5; i++) {
        
        let latest = data.results[i];
        listaLatest.innerHTML += `<article class="item">
        <a href="./detail-movie.html?p=${latest.id}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${latest.poster_path}" alt=""></a>
                                        <a href="./detail-movie.html?p=${latest.id}"<h3>${latest.title}</h3> </a><br>
                                        <a href="./detail-movie.html?p=${latest.id}"<p>${latest.release_date}</p> </a>
                                        <a href="./detail-movie.html?p=${latest.id}">Ver mas </a>
                                    </article>` 
    }



    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});

fetch(url_series)
.then(function(respuesta) {
    return respuesta.json();
}).then(function(data) {

    console.log(data.results);
    for (let i = 0; i < 5; i++) {
        
        let series = data.results[i];
        listaSeries.innerHTML += `<article class="item">
        <a href="./detail-serie.html?s=${series.id}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${series.poster_path}" alt=""></a>
                                        <a href="./detail-serie.html?s=${series.id}"<h3>${series.name}</h3> </a><br>
                                        <a href="./detail-serie.html?s=${series.id}"<p>${series.first_air_date}</p> </a>
                                        <a href="./detail-serie.html?s=${series.id}">Ver mas</a>
                                    </article>` 
    }



    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});
