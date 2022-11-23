let api_key = '81faef6942a31915ed87b416fbba64ba'
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let busqueda = qsObj.get('busqueda');


let urlBusquedaPeli = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${busqueda}`;
let urlBusquedaSerie = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&query=${busqueda}`;

let tituloP = document.querySelector('.titulosBusqueda');
let listaP = document.querySelector('.resultadoBusquedaP');
let listaS = document.querySelector('.resultadoBusquedaS');


fetch(urlBusquedaPeli)
.then(function (respuesta) {
    return respuesta.json()
}
)
.then(function (data) {
    console.log(data);
    if (data.results.length == 0) {
        tituloP.innerHTML = `No hay resultados para su búsqueda <strong>"${busqueda}"</strong>`
        listaP.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/6202/6202861.png" alt="">`
    } else {
        tituloP.innerHTML = `Estos son los titulos que coinciden con tu busqueda de <strong>"${busqueda}"</strong>:`
        for (let i = 0; i < 5; i++) {
        let busqueda = data.results[i]
        listaP.innerHTML += ` <article class="item">
        <a href="./detail-movie.html?p=${busqueda.id}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${busqueda.poster_path}" alt=""></a>
                                <a href="./detail-movie.html?p=${busqueda.id}"><h3>${busqueda.title}</h3></a>
                                <a href="./detail-movie.html?p=${busqueda.id}"><p>${busqueda.release_date}</p></a>
                                <a href="./detail-movie.html?p=${busqueda.id}" class="ver_mas">Ver mas</a>
                                    </article>` 
    }}

    return data;
}
)
.catch(function (error) {
    return error;
}
)

fetch(urlBusquedaSerie)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log(data);
    if (data.results.length == 0) {
        tituloS.innerHTML = `No hay resultados para su búsqueda: <strong>"${busqueda}"</strong>`
        listaS.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/6202/6202861.png" alt="">`
    } else {
 
        for (let i = 0; i < 5; i++) {
        let busquedaS = data.results[i]
        listaS.innerHTML += `<article class="item">
        <a href="./detail-serie.html?s=${busquedaS.id}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${busquedaS.poster_path}" alt=""></a>
                                        <a href="./detail-serie.html?s=${busquedaS.id}"<h3>${busquedaS.name}</h3> </a><br>
                                        <a href="./detail-serie.html?s=${busquedaS.id}"<p>${busquedaS.first_air_date}</p> </a>
                                        <a href="./detail-serie.html?s=${busquedaS.id}">Ver mas</a>
                                    </article>` 
    }}

    return data;
}
)
.catch(function (error) {
    return error;
}
)
window.addEventListener('load', function (e) {
    this.document.querySelector('#loader').classList.toggle('loader2')
})