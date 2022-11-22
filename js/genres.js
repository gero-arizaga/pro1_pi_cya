let api_key = '81faef6942a31915ed87b416fbba64ba'
let url_generosPeli = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
let url_generosTV = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}&language=en-US`
let generosPeli = document.querySelector('.generosPadre')
let generoSeries = document.querySelector('.generosSeries')


fetch(url_generosPeli)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    for(let i = 0; i < 6; i++){
        let generoPeli = data.genres[i].name
        generosPeli.innerHTML += `<article class="generos">
                                  <a class="generoa" href="./detail-genres.html?id=${data.genres[i].id}">${generoPeli}</a>  </article>` 
    }
})
.catch(function(error) {
    console.log(error);
    return error;
})