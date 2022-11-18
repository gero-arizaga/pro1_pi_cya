let api_key = '81faef6942a31915ed87b416fbba64ba'
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let personaje = qsObj.get('busqueda');
    
let url = ``;
    
    fetch(url)
    .then(function(response) {
        return response.json();
    }
    ).then(function(data) {
         //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
         console.log(data);
         let arrayDePersonajes = data.results;
    
         //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
         let seccion = document.querySelector('.container');
         let allCharacters = [];
    
         console.log(arrayDePersonajes);
         //2 Qué: recorro la información de la api y la organizo para mostarla en el html
         for(let i=0; i<arrayDePersonajes.length; i++){
             //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
             allCharacters += `<a href="./detalle.html?buscador=${arrayDePersonajes[i].id}"><article>
                                 <img src=${arrayDePersonajes[i].image} alt='${arrayDePersonajes[i].name}' />
                                 <p>Name: ${arrayDePersonajes[i].name} </p>
                                 <p>Status: ${arrayDePersonajes[i].status} </p>
                             </article></a>`
         }
         //Con toda la estructura html completa ahora la paso al DOM
         seccion.innerHTML = allCharacters;
        return data;
    }
    ).catch(function(error) {
        return error;
    }
    );

