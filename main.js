//Create a class that you name Character with 
//the properties for name, gender, height, mass, 
//hairColor, height, skinColor, eyeColor, movies 
//and pictureUrl.
class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureUrl){
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.height = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.movies = movies;
        this.pictureUrl = pictureUrl;
    }
}

// let newCharacter = new Character ("Kylo Ren", "Male", "189 cm", "80 kg", "black", "pale", "brown", "3", "link");
// console.log(newCharacter);

//The user should be able to choose two characters (Character 1 & 2) 
//using each list. The lists must consist of at least six names of 
//characters from the Star Wars universe found in the API.

let nameListOne = document.querySelector("#name-list-1");
let nameListTwo = document.querySelector("#name-list-2");
// let listDivOne = document.querySelector("#first-list");
// let listDivTwo = document.querySelector("#second-list");
let infoListOne = document.querySelector("#char-info-1");
let infoListTwo = document.querySelector("#char-info-2");
let infoButtonOne = document.querySelector("#char1-button");
let infoButtonTwo = document.querySelector("#char2-button");
let compareButton = document.querySelector("#compare-button");

async function getNames() {
    let data = await fetch("https://swapi.dev/api/people/?format=json");
    let json = await data.json();
    return json;
}

// let showNames = (obj) => {
//     let listName = document.createElement("li");
//     listName.innerText = `${obj.results.name}`;
//     nameListOne.append(listName);
//     return li;
// }

//List 1
getNames().then((data) => {
    data.results.forEach((person)=> {
        let listName = document.createElement("li");
        listName.innerText = person.name;
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.setAttribute("name", "person");
        nameListOne.append(listName);
        listName.prepend(radio);
    });
});

//List 2
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

//Info buttons

// infoButtonOne.addEventListener("click", async () => {
//     let selectedRadio = document.querySelector('input[name="person"]:checked');
// })

// let characterName = selectedRadio.value;

// let data = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
// let json = await data.json();
// let characterData = json.result[0];

// let character = new Character(
//     characterData.name,
//     characterData.gender,
//     characterData.height,
//     characterData.mass,
//     characterData.hair_color,
//     characterData.skin_color,
//     characterData.eye_color,
//     characterData.films,
//     ""
// );

// let listItem = document.createElement("li");
// listItem.innerText = JSON.stringify(character);
// listDivOne.appendChild(listItem);

infoButtonOne.addEventListener("click", async () => {
    let selectedRadio = document.querySelector('input[name="person"]:checked');
  
    if (!selectedRadio) {
      return;
    }
  
    let characterName = selectedRadio.value;
  
    let data = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
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
      ""
    );
  
    let listItem = document.createElement("li");
    listItem.innerText = JSON.stringify(character);
    infoListOne.appendChild(listItem);
  });

//The user should then be able to click a button to retrieve data 
//about the characters. Once the data is retrieved, 
//create two instances of the Character class, 
//and give the properties of the class values based on the retrieved data. 
//ATTENTION! The API does not provide you with images 
//- So you need to produce these yourself.

//Button, check selected characters
