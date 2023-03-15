let moviesButton = document.querySelector("#movies");
let moviesDiv = document.querySelector("#movies-div");
let moviesList = document.querySelector("#movies-list-one");
let moviesListTwo = document.querySelector("#movies-list-two");

async function getMovieTitlesOne () {
    moviesList.innerHTML = "";
    try {
        let selectedRadio = document.querySelector('input[name="person"]:checked');
  
    if (!selectedRadio) {
        alert("Please select a character");
        return;
    }
    
    let firstChar = selectedRadio.value;

    let data = await fetch(`https://swapi.dev/api/people/?search=${firstChar}`);
    let json = await data.json();
    let characterData = json.results[0];

    let character = new Character(
        characterData.name, 
        characterData.gender, 
        characterData.height, 
        characterData.mass, 
        characterData.hairColor, 
        characterData.skinColor, 
        characterData.eyeColor, 
        characterData.films, 
        characterData.pictureUrl);

    let movieTitlesOne = await character.getMovieTitles();

    for (let i = 0; i < movieTitlesOne.length; i++) {
        let title = movieTitlesOne[i].title;
        let li = document.createElement("li");
        li.textContent = title;
        moviesList.appendChild(li);
    }
    } 

    catch (error) {
        console.error(error);
      }
}

moviesButton.addEventListener("click", async () => {
    getMovieTitlesOne();
});