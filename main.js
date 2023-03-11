let nameListOne = document.querySelector("#name-list-1");
let nameListTwo = document.querySelector("#name-list-2");
let infoButtonOne = document.querySelector("#char1-button");
let infoButtonTwo = document.querySelector("#char2-button");
let charImg = document.querySelector("#char1-image");
let charImg2 = document.querySelector("#char2-image");
let charName = document.querySelector("#char1-name");
let charName2 = document.querySelector("#char2-name");
let charInfo = document.querySelector("#char1-info");
let charInfo2 = document.querySelector("#char2-info");
let compareButton = document.querySelector("#compare-button");
let characterInfoOne = [];
let characterInfoTwo = [];
let numInfoOne = [];
let numInfoTwo = [];

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
}

async function getNames() {
    let data = await fetch("https://swapi.dev/api/people/?format=json");
    let json = await data.json();
    return json;
}

//Name list 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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

//Name list 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
      alert("Please select a character");
      return;
    }
  
    let characterName = selectedRadio.value;
  
    let data = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
    let json = await data.json();
    let characterData = json.results[0];

    characterData.height = Number(characterData.height);
    characterData.mass = Number(characterData.mass);
  
    let character = new Character(
      characterData.name,
      characterData.gender,
      Number(characterData.height),
      Number(characterData.mass),
      characterData.hair_color,
      characterData.skin_color,
      characterData.eye_color,
      characterData.films,
      `/assets/${characterData.name.toLowerCase().replace(/ /g, "-")}.jpg`
    );

    console.log(characterData.height, typeof characterData.height);
    
    numInfoOne = [
      characterData.height,
      characterData.mass,
      characterData.films.length
    ]

    console.log(numInfoOne);

    characterInfoOne = [
      `Name: ${character.name}`,
      `Gender: ${character.gender}`,
      `Height: ${character.height} cm`,
      `Mass: ${character.mass} kg`,
      `Hair Color: ${character.hairColor}`,
      `Skin Color: ${character.skinColor}`,
      `Eye Color: ${character.eyeColor}`,
      // `Movies: ${character.movies.join(", ")}`,
      `Number of movies: ${character.movies.length}`,
    ];

    charName.innerText = characterData.name;
    charImg.src = character.pictureUrl;
  });

  //Info button two - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
infoButtonTwo.addEventListener("click", async () => {
  let selectedRadio = document.querySelector('input[name="person2"]:checked');
  if (!selectedRadio) {
    alert("Please select a character");
    return;
  }

  let characterName = selectedRadio.value;

  let data = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
  let json = await data.json();
  let characterData = json.results[0];

  characterData.height = Number(characterData.height);
  characterData.mass = Number(characterData.mass);

  let character = new Character(
    characterData.name,
    characterData.gender,
    Number(characterData.height),
    Number(characterData.mass),
    characterData.hair_color,
    characterData.skin_color,
    characterData.eye_color,
    characterData.films,
    `/assets/${characterData.name.toLowerCase().replace(/ /g, "-")}.jpg`
  );

  console.log(characterData.height, typeof characterData.height);

  numInfoTwo = [
    characterData.height,
    characterData.mass,
    characterData.films.length
  ]

  console.log(numInfoTwo);

  characterInfoTwo = [
    `Name: ${character.name}`,
    `Gender: ${character.gender}`,
    `Height: ${character.height} cm`,
    `Mass: ${character.mass} kg`,
    `Hair Color: ${character.hairColor}`,
    `Skin Color: ${character.skinColor}`,
    `Eye Color: ${character.eyeColor}`,
    // `Movies: ${character.movies.join(", ")}`,
      `Number of movies: ${character.movies.length}`,
  ];

  // console.log(characterInfoTwo);

  charName2.innerText = characterData.name;
  charImg2.src = character.pictureUrl;

  // console.log(character);
});

//Compare button one - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

compareButton.addEventListener("click", () => {
  if (characterInfoOne.length === 0 || characterInfoTwo.length === 0) {
    alert("Please select two characters");
    return;
  }
  // charInfo.innerHTML = "";
  // charInfo2.innerHTML = "";
  
  let heightOne = parseInt(characterInfoOne.height);
  let heightTwo = characterInfoTwo[2];
  console.log(heightOne, typeof heightOne);
  console.log(heightTwo);

  if (heightOne > heightTwo) {
    console.log("char one är längre än char two")
  } else if (heightOne < heightTwo) {
    console.log("char two är längre än char one")
  } else {
    console.log("lika långa");
  }

  charInfo.innerHTML = characterInfoOne.map((info) => `<li>${info}</li>`).join("");
  charInfo2.innerHTML = characterInfoTwo.map((info) => `<li>${info}</li>`).join("");
});