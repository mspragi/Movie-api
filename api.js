let key = "234775be";
let input = document.getElementById("search");
let form = document.getElementById("moviesearch");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    var SearchKey = input.value;
    Searchmovie(SearchKey);
});

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

// function movieSelected(id){
//     sessionStorage.setItem('movieId',id);
//     window.location = 'movie.html';
//     return false;
// }

// function getMovie(){
//     let movieId = sessionStorage.getItem('movieId');
//     axios.get(`http://www.omdbapi.com/?s=${movieId}&apikey=${key}&`)
//     .then((response)=>{
//         console.log(response);
//         let movie = response.data;
//         let output=`
//         <div class="row>
//         <div class="col-md-4>
//         <img src="${movie.Poster}" class="thumbnail>
//         </div>
//         <div class="col-md-8>
//         <h2>${movie.Title}</h2>
//        <ul class="list-group">
//        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
//        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
//        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
//        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
//        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
//        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
//        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
//      </ul>
//    </div>
//  </div>
//  <div class="row">
//    <div class="well">
//      <h3>Plot</h3>
//      ${movie.Plot}
//      <hr>
//      <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
//      <a href="index.html" class="btn btn-default">Go Back To Search</a>
//    </div>
//  </div>

// `;
//   document.getElementById("template").innerHTML = output;       
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

