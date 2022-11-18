let recuperoStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperoStorage);
/*  [2,4,6] */

let section = document.querySelector("#lista");
let personajesFavoritos = ''; /* ---------------------->   OJALDRE ACA */

console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay personajes en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos.length; i++) {
        let url =   `https://rickandmortyapi.com/api/character/${favoritos[i]}`

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
            section.innerHTML = personajesFavoritos;

            return data;
        }).catch(function (error) {
            return error;
        });

        
        
    }
}