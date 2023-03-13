let firstMovieButton = document.querySelector("#first-movie");
let dateDiv = document.querySelector("#date-div");

async function getFirstMovieDateOne() {
  dateDiv.innerHTML = "";
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
        characterData.hair_color, 
        characterData.skin_color, 
        characterData.eye_color, 
        characterData.films, 
        characterData.pictureUrl);

    let firstMovieDate = await character.getFirstMovieDate();

    let date = document.createElement("p");
    date.innerText = `${firstChar} first appeared in a movie ${firstMovieDate}`;
    dateDiv.append(date);
    } 

    catch (error) {
      console.error(error);
    }
}

async function getFirstMovieDateTwo() {
  dateDiv.innerHTML = "";
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
        characterData.hair_color, 
        characterData.skin_color, 
        characterData.eye_color, 
        characterData.films, 
        characterData.pictureUrl);

    let firstMovieDate = await character.getFirstMovieDate();

    let date = document.createElement("p");
    date.innerText = `${secondChar} first appeared in a movie ${firstMovieDate}`;
    dateDiv.append(date);
    } 
    
    catch (error) {
      console.error(error);
    }
  }

firstMovieButton.addEventListener("click", () => {
    getFirstMovieDateOne();
    getFirstMovieDateTwo();
});