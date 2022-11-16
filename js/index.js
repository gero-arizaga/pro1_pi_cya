let api_key = '81faef6942a31915ed87b416fbba64ba'
let url_popu  = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
let url_latest  = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
let url_series = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`;
let listaPeli = document.querySelector('.cont-listas_pelis');
let listaLatest = document.querySelector('.cont-listas_latest');
let listaSeries = document.querySelector('.cont-listas_series')
fetch(url_popu)
.then(function(respuesta) {
    return respuesta.json();
}).then(function(data) {

    console.log(data.results);
    for (let i = 0; i < 5; i++) {
        
        let popular = data.results[i];
        listaPeli.innerHTML += `<article class="item">
        <a href="./detail-movie.html"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt=""></a>
                                        <h3>${popular.title}</h3>
                                        <p>${popular.release_date}</p>
                                        <a href="./detail-movie.html?idPelicula=${popular.id}">Ver mas</a>
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
        <a href="./detail-movie.html"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${latest.poster_path}" alt=""></a>
                                        <h3>${latest.title}</h3>
                                        <p>${latest.release_date}</p>
                                        <a href="./detail-movie.html?idPelicula=${latest.id}">Ver mas</a>
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
        <a href="./detail-movie.html"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${series.poster_path}" alt=""></a>
                                        <h3>${series.title}</h3>
                                        <p>${series.release_date}</p>
                                        <a href="./detail-movie.html?idPelicula=${series.id}">Ver mas</a>
                                    </article>` 
    }



    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});