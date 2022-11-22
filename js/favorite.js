let api_key = '81faef6942a31915ed87b416fbba64ba'

/* Recuperar localStorage */
let recuperopfav = localStorage.getItem('favoritos_p');
/*  ["2"] */

let favoritos_p = JSON.parse(recuperopfav);
/*  [2,4,6] */

let section = document.querySelector('#lista_p');
let Peliculas_Favoritas = ''; /* ---------------------->   OJALDRE ACA */

console.log(favoritos_p);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos_p == null || favoritos_p.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay peliculas en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos_p.length; i++) {
        let idmovie = favoritos_p[i]
        let url =   `https://api.themoviedb.org/3/movie/${idmovie}?api_key=${api_key}&language=en-US`
        console.log(url)

        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let peli_f = data[i];
            console.log(peli_f.release_date);
            Peliculas_Favoritas.innerHTML = `<article>
                    <a href="./detail-movie.html?p=${idmovie}"> <img class="imagenes" src="https://image.tmdb.org/t/p/w500/${peli_f.poster_path}" alt=""></a>
                    <a href="./detail-movie.html?p=${idmovie}"><h3>${peli_f.title}</h3></a>
                    <a href="./detail-movie.html?p=${idmovie}"><p>${peli_f.release_date}</p></a>
                    <a href="./detail-movie.html?p=${idmovie}" class="ver_mas">Ver mas</a>
                </article>` 
            section += Peliculas_Favoritas;
            return data;
        })
        .catch(function (error) {
            return error;
        });

        
        
    }
}