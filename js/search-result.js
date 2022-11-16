let api_key = '81faef6942a31915ed87b416fbba64ba'

// barra de busqueda 
let searchBaseUrl = ""

let searchBar = document.getElementById("searchBar");
function runSearch(keyword) {
  let url = "".$(searchBaseUrl, apiKey, "&query=", keyword)
  document.getElementById("results-list").innerHTML = "";
  fetch(url)
    .then(result => result.json())
    .then(function (data) {
      let seriesSearchResult = data.results;
        if (data.results.length !== 0){
          let resultsList = document.getElementById("results-list");
          for (let i = 0; i < seriesSearchResult.length; i++) {
            id = seriesSearchResult[i].id
            if (seriesSearchResult[i].poster_path !== null) {
            resultsList.innerHTML += "<ul class='result'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='https://image.tmdb.org/t/p/original/" + seriesSearchResult[i].poster_path + "' alt=''></a></li></ul>"
          } else {
            resultsList.innerHTML += "<ul class='result'><li>" + seriesSearchResult[i].name + "</li>" + "<li><a id='detalles' onclick='serieSelected("+ id +")' href='page5-detalle-series.html'><img class='series-img' src='assets/IMG/noimage.png' alt=''></a></li></ul>"
          }
        }
      } else {
        let resultTitle = document.getElementById("results-title")
        resultTitle.innerHTML = "No search results found";
      }
    
    })
}

