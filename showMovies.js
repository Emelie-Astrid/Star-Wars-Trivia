let moviesButton = document.querySelector("#movies");
let moviesDiv = document.querySelector("#movies-div");
let moviesList = document.querySelector("#movies-list-one");
let moviesListTwo = document.querySelector("#movies-list-two");
let listOne = document.querySelector("#list-one");
let listTwo = document.querySelector("#list-two");
let titlesOne = document.querySelector("#movie-titles-one");
let titlesTwo = document.querySelector("#movie-titles-two");

async function getMovieTitlesOne () {
    moviesList.innerHTML = "";
    moviesListTwo.innerHTML = "";

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

        titlesOne.innerText = `${firstChar} appeared in: `;

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

async function getMovieTitlesTwo () {
    moviesList.innerHTML = "";
    moviesListTwo.innerHTML = "";
    try {
        let selectedRadio = document.querySelector('input[name="person2"]:checked');
  
        if (!selectedRadio) {
            alert("Please select a character");
            return;
        }
        
        let secondChar = selectedRadio.value;

        let data = await fetch(`https://swapi.dev/api/people/?search=${secondChar}`);
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

        let movieTitlesTwo = await character.getMovieTitles();

        titlesTwo.innerText = `${secondChar} appeared in: `;

        for (let i = 0; i < movieTitlesTwo.length; i++) {
            let title = movieTitlesTwo[i].title;
            let li = document.createElement("li");
            li.textContent = title;
            moviesListTwo.appendChild(li);
        }
    } 

    catch (error) {
        console.error(error);
    }
}

moviesButton.addEventListener("click", async () => {
    getMovieTitlesOne();
    getMovieTitlesTwo();
});