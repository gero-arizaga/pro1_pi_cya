let algo = new URLSearchParams(this.location.search)
let id_serie = algo.get("q")
console.log(id_serie)

const api_key = '81faef6942a31915ed87b416fbba64ba'
let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${api_key}&language=en-US`

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {

        let subtitulos = document.querySelector('.subtitulos');
        let fecha_estreno = document.querySelector('.fecha-estreno');
        let genero_series = document.querySelector('.genero_serie');
        let descripcion_serie = document.querySelector('.descripcion_serie');
        let imagen = document.querySelector('.item-detail');

        subtitulos.innerText += `${data.title}`
        fecha_estreno.innerText += `${data.release_date}`
        genero_series.innerText += `${data.genres[0].name}`
        descripcion_serie.innerText += `${data.overview}`
        imagen.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">`
        
    })
    .catch(function (error) {
        console.log(error);
    })