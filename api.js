let key = "234775be";
let input = document.getElementById("search");
let form = document.getElementById("moviesearch");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    var SearchKey = input.value;
    Searchmovie(SearchKey);
});


window.addEventListener("DOMContentLoaded", (event) => {
    Searchmovie();
})

async function Searchmovie(SearchKey){
    let BASE_URL = `http://www.omdbapi.com/?s=${SearchKey}&apikey=${key}&` ;
    try{
        let res = await window.fetch(BASE_URL);
        let movie = await res.json();
        console.log(movie);
        let output = [];
        for(let movies of movie.Search){
            let setDefaultPoster =
            movies.Poster === "N/A" ? "../images/broken-1.png" : movies.Poster;
            output += `<div class = "col-md-3">
            <div class="well text-center">
            <img src = "${setDefaultPoster}" class = "img-card-top" alt = "${movies.Title}">
            <h4>${movies.Title}</h4>
            <a onclick="movieSelected('${movies.imdbID}')" class="
            btn btn-primary" href="#">Details</a>
            </div>
            </div>`;
        document.getElementById("template").innerHTML = output;
        }
    }
    catch(error){
        console.log(error);
    }
}


