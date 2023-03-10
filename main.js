let nameListOne = document.querySelector("#name-list-1");
let nameListTwo = document.querySelector("#name-list-2");
let charName = document.querySelector("#char1-name");
let charName2 = document.querySelector("#char2-name");
let infoButtonOne = document.querySelector("#char1-button");
let infoButtonTwo = document.querySelector("#char2-button");
let charImg = document.querySelector("#char1-image");
let charImg2 = document.querySelector("#char2-image");
let charInfo = document.querySelector("#char1-info");
let charInfo2 = document.querySelector("#char2-info");
let compareButton = document.querySelector("#compare-button");
let characterInfoOne = [];
let characterInfoTwo = [];

class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureUrl){
        this.name = name;
        this.gender = gender;
        this.height = Number(height);
        this.mass = Number(mass);
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.movies = movies;
        this.pictureUrl = pictureUrl;
    }
}

async function getNames() {
    let data = await fetch("https://swapi.dev/api/people/?format=json");
    let json = await data.json();
    // console.log(json);
    return json;
}

//List 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
getNames().then((data) => {
    data.results.forEach((person)=> {
        let listName = document.createElement("li");
        listName.innerText = person.name;
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.setAttribute("name", "person");
        radio.setAttribute("value", person.name);
        nameListOne.append(listName);
        listName.prepend(radio);
    });
});

//List 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
getNames().then((data) => {
    data.results.forEach((person)=> {
        let listName = document.createElement("li");
        listName.innerText = person.name;
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.setAttribute("name", "person2");
        radio.setAttribute("value", person.name);
        nameListTwo.append(listName);
        listName.prepend(radio);
    });
});

//Info button one - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

infoButtonOne.addEventListener("click", async () => {
    let selectedRadio = document.querySelector('input[name="person"]:checked');
    if (!selectedRadio) {
      return;
    }
  
    let characterName = selectedRadio.value;
  
    let data = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
    let json = await data.json();
    let characterData = json.results[0];

    // console.log(characterData);
  
    let character = new Character(
      characterData.name,
      characterData.gender,
      characterData.height,
      characterData.mass,
      characterData.hair_color,
      characterData.skin_color,
      characterData.eye_color,
      characterData.films,
      `/assets/${characterData.name.toLowerCase().replace(/ /g, "-")}.jpg`
    );

    // console.log(character.pictureUrl);

    characterInfoOne = [
      `Name: ${character.name}`,
      `Gender: ${character.gender}`,
      `Height: ${character.height} cm`,
      `Mass: ${character.mass} kg`,
      `Hair Color: ${character.hairColor}`,
      `Skin Color: ${character.skinColor}`,
      `Eye Color: ${character.eyeColor}`,
      `Movies: ${character.movies.join(", ")}`,
    ];

    console.log(characterInfoOne);

    charName.innerText = characterData.name;
    charImg.src = character.pictureUrl;

    // console.log(character);
  });

  //Info button two - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  infoButtonTwo.addEventListener("click", async () => {
    let selectedRadio = document.querySelector('input[name="person2"]:checked');
    if (!selectedRadio) {
      return;
    }
  
    let characterName = selectedRadio.value;
  
    let data = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
    let json = await data.json();
    let characterData = json.results[0];

    // console.log(characterData);
  
    let character = new Character(
      characterData.name,
      characterData.gender,
      characterData.height,
      characterData.mass,
      characterData.hair_color,
      characterData.skin_color,
      characterData.eye_color,
      characterData.films,
      `/assets/${characterData.name.toLowerCase().replace(/ /g, "-")}.jpg`
    );
    
    // console.log(character.pictureUrl);

    characterInfoTwo = [
      `Name: ${character.name}`,
      `Gender: ${character.gender}`,
      `Height: ${character.height} cm`,
      `Mass: ${character.mass} kg`,
      `Hair Color: ${character.hairColor}`,
      `Skin Color: ${character.skinColor}`,
      `Eye Color: ${character.eyeColor}`,
      `Movies: ${character.movies.join(", ")}`,
    ];

    console.log(characterInfoTwo);

    charName2.innerText = characterData.name;
    charImg2.src = character.pictureUrl;

    // console.log(character);
  });

  compareButton.addEventListener("click", () => {
    charInfo.innerHTML = characterInfoOne.map((info) => `<li>${info}</li>`).join("");
    charInfo2.innerHTML = characterInfoTwo.map((info) => `<li>${info}</li>`).join("");
  });
