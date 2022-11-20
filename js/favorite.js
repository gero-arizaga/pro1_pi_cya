/* Recuperar localStorage */
let recuperoStorage = localStorage.getItem('favoritos_p');
/*  ["2"] */

let favoritos_p = JSON.parse(recuperoStorage);
/*  [2,4,6] */

let section = document.querySelector("#lista");
let Peliculas_Favoritas = ''; /* ---------------------->   OJALDRE ACA */

console.log(favoritos_p);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos_p == null || favoritos_p.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay peliculas en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos_p.length; i++) {
        let url =   `https://api.themoviedb.org/3/movie/${favoritos_p[i]}`

        fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            Peliculas_Favoritas += `<article>
                                        <img src=${data.image} alt='${data.name}' />
                                        <p>Name: <a href="./detallePersonaje.html?idPersonaje=${data.id}"> ${data.name}</a> </p>
                                        <p>Status: ${data.status} </p>
                                    </article>`;
            section.innerHTML = Peliculas_Favoritas;

            return data;
        }).catch(function (error) {
            return error;
            console.log(error);
        });

        
        
    }
}