let nameListOne = document.querySelector("#name-list-1");
let nameListTwo = document.querySelector("#name-list-2");
let charName = document.querySelector("#char1-name");
let charName2 = document.querySelector("#char2-name");
let infoButtonOne = document.querySelector("#char1-button");
let infoButtonTwo = document.querySelector("#char2-button");
let charImg = document.querySelector("#char1-image");
let charImg2 = document.querySelector("#char2-image");
let compareButton = document.querySelector("#compare-button");

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

    console.log(characterData);
  
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

    console.log(character.pictureUrl);

    charName2.innerText = characterData.name;
    charImg2.src = character.pictureUrl;

    // console.log(character);
  });
//The user should then be able to click a button to retrieve data 
//about the characters. Once the data is retrieved, 
//create two instances of the Character class, 
//and give the properties of the class values based on the retrieved data. 
//ATTENTION! The API does not provide you with images 
//- So you need to produce these yourself.

//Button, check selected characters
