let api_key = '81faef6942a31915ed87b416fbba64ba'
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
/*  [2,4,6] */

let section = document.querySelector("#lista");
let peliculasFavoritas = ''; /* ---------------------->   OJALDRE ACA */

console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay peliculas en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos.length; i++) {
        let url =   `https://api.themoviedb.org/3/tv/top_rated?${favoritos[i]}`

        fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            personajesFavoritos += `<article>
                                        <img src=${data.image} alt='${data.name}' />
                                        <p>Name: <a href="./detallePersonaje.html?idPersonaje=${data.id}"> ${data.name}</a> </p>
                                        <p>Status: ${data.status} </p>
                                    </article>`;
            section.innerHTML = pelicualsFavoritas;

            return data;
        }).catch(function (error) {
            return error;
        });

        
        
    }
}