let extraInfo = document.querySelector("#extra-information");
let moviesButton = document.querySelector("#movies");
let planetButton = document.querySelector("#homeplanet");
let vehicleButton = document.querySelector("#vehicle");
let moviesDiv = document.querySelector("#movies-div");
let homeplanetDiv = document.querySelector("#homeplanet");
let vehicleDiv = document.querySelector("#vehicle");

class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureUrl){
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.movies = movies;
        this.pictureUrl = pictureUrl;
    }

    async getFirstMovieDate() {
      let movieUrl = this.movies[0];
      let response = await fetch(movieUrl);
      let data = await response.json();
      return data.release_date;
    }

  getMovies() {
  }

  compareHomeplanets() {
  }

  getMostExpensiveBehicle() {
  }
}

async function getNames() {
  let data = await fetch("https://swapi.dev/api/people/?format=json");
  let json = await data.json();
  return json;
}


function getMovieTitles () {

}

//MOVIE BUTTON - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

moviesButton.addEventListener("click", async () => {

});

//MOVIE BUTTON - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

planetButton.addEventListener("click", async () => {

});

//MOVIE BUTTON - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

vehicleButton.addEventListener("click", async () => {

});
