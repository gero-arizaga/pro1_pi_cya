let api_key = '81faef6942a31915ed87b416fbba64ba'
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let personaje = qsObj.get('busqueda');

let urlbusqueda = `https://api.themoviedb.org/3/movie?api_key= ${api_key}&language=en-US&page=1`

let searchBar = document.getElementById("searchBar");

function runSearch (keyword) {
    let url = `${urlbusqueda}${api_key}&query=${keyword}`;
    document.getElementById("results-list").innerHTML = "";
    fetch(url)
    .then(result => result.json())
    .then(function (data) {
    let seriesSearchResult = data.results;
    console.log(seriesSearchResult);
    if (data.results.length !== 0){
        let resultsList = document.getElementById("resultado-busqueda");
        for (let i = 0; i < seriesSearchResult.length; i++) {
        id = seriesSearchResult[i].id
        if (seriesSearchResult[i].busqueda !== null) {
            resultsList.innerHTML += "<ul class='result'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='https://image.tmdb.org/t/p/original/" + seriesSearchResult[i].poster_path + "' alt=''></a></li></ul>"
            } 
        else {
            resultsList.innerHTML += "<ul class='result'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='assets/IMG/noimage.png' alt=''></a></li></ul>"
            }
        }
    } 
    else {
        let resultTitle = document.getElementById("results-title")
        resultTitle.innerHTML = "No search results found";
    }
  }
    )}
    
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
    )
