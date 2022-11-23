let api_key = '81faef6942a31915ed87b416fbba64ba';
let recuperopfav = localStorage.getItem('favoritos_p');
let favoritos_p = JSON.parse(recuperopfav);
let recuperosfav = localStorage.getItem('favoritos_s');
let favoritos_s = JSON.parse(recuperosfav);
let section_p = document.querySelector('#lista_p');
let section_s = document.querySelector('#lista_s');
let Peliculas_Favoritas = '';
let Series_Favoritas = ''; 
console.log(favoritos_p);

if (favoritos_p == null || favoritos_p.length == 0) {
    /* Muestres no hay favoritos */
    section_p.innerHTML = '<p>No hay peliculas en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos_p.length; i++) {
        let idmovie = favoritos_p[i]
        let urlp =   `https://api.themoviedb.org/3/movie/${idmovie}?api_key=${api_key}&language=en-US`
        console.log(urlp)

        fetch(urlp)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let poster_p = data.poster_path;
            let title_p = data.title;
            let release_p = data.release_date;
            section_p.innerHTML += `<article class="item">
                    <a href="./detail-movie.html?p=${idmovie}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${poster_p}" alt=""></a>
                    <a href="./detail-movie.html?p=${idmovie}"><h3>${title_p}</h3></a>
                    <a href="./detail-movie.html?p=${idmovie}"><p>${release_p}</p></a>
                    <a href="./detail-movie.html?p=${idmovie}" class="ver_mas">Ver mas</a>
                </article>`;
            return data;
        })
        .catch(function (error) {
            return error;
        });

        
        
    }
}
if (favoritos_s == null || favoritos_s.length == 0) {
    /* Muestres no hay favoritos */
    section_s.innerHTML = '<p>No hay series en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos_s.length; i++) {
        let idserie = favoritos_s[i]
        let urls =   `https://api.themoviedb.org/3/tv/${idserie}?api_key=${api_key}&language=en-US`
        console.log(urls)

        fetch(urls)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let poster_s = data.poster_path;
            let title_s = data.name;
            let release_s = data.first_air_date;
            section_s.innerHTML += `<article class="item">
                    <a href="./detail-serie.html?s=${idserie}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${poster_s}" alt=""></a>
                    <a href="./detail-serie.html?s=${idserie}"><h3>${title_s}</h3></a>
                    <a href="./detail-serie.html?s=${idserie}"><p>${release_s}</p></a>
                    <a href="./detail-serie.html?s=${idserie}" class="ver_mas">Ver mas</a>
                </article>`;
            return data;
        })
        .catch(function (error) {
            return error;
        });

        
        
    }
}





window.addEventListener('load', function (e) {
    this.document.querySelector('#loader').classList.toggle('loader2')
})