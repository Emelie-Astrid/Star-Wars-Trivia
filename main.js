let extraInfo = document.querySelector("#extra-information");
let movieTitles = [];
let vehicleArr = [];

class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureUrl, homeWorld, vehicles, starships){
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
        this.vehicles = vehicles;
        this.starships = starships;
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

    async findVehicle () {
        if (!this.vehicles) {
        return;
      }
      for (let i = 0; i < this.vehicles.length; i++) {
      let vehicleUrl = this.vehicles[i];
      let response = await fetch(vehicleUrl);
      let data = await response.json();
      let name = data.name;
      let price = parseInt(data.cost_in_credits, 10);
      vehicleArr.push({name, price}); 
      }
    }
    
    async findStarship () {
      if (!this.starships) {
        return;
      }
      for (let i = 0; i < this.starships.length; i++) {
        let starshipUrl = this.starships[i];
        let response = await fetch(starshipUrl);
        let data = await response.json();
        let name = data.name;
        let price = parseInt(data.cost_in_credits, 10);
        vehicleArr.push({name, price}); 
      }
    }
}

async function getNames() {
  let data = await fetch("https://swapi.dev/api/people/?format=json");
  let json = await data.json();
  return json;
}