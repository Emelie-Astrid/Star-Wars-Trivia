let extraInfo = document.querySelector("#extra-information");
let vehicleButton = document.querySelector("#vehicle");
let vehicleDiv = document.querySelector("#vehicle");
let movieTitles = [];

class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureUrl, homeWorld){
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.movies = movies;
        this.pictureUrl = pictureUrl;
        this.homeWorld = homeWorld;
    }

    async getFirstMovieDate() {
      let movieUrl = this.movies[0];
      let response = await fetch(movieUrl);
      let data = await response.json();
      return data.release_date;
    }

    async getMovieTitles () {
      let movieTitles = [];
      for (let i = 0; i < this.movies.length; i++) {
        let movieUrl = this.movies[i];
        let response = await fetch(movieUrl);
        let data = await response.json();
        let title = data.title;
        movieTitles.push({title});
      }
      return movieTitles;
    }

    async findHomePlanet() {
      let response = await fetch(this.homeWorld);
      let data = await response.json();
      return data.name;
    }
}

async function getNames() {
  let data = await fetch("https://swapi.dev/api/people/?format=json");
  let json = await data.json();
  return json;
}