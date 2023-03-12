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
let compareDiv = document.querySelector("#comparison");
let characterInfoOne = [];
let characterInfoTwo = [];
let charArrOne = [];
let charArrTwo = [];

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

//INFO BUTTON ONE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

infoButtonOne.addEventListener("click", async () => {
    compareDiv.innerHTML = "";

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

    charArrOne = [
      characterData.name,
      characterData.gender,
      characterData.height,
      characterData.mass,
      characterData.hair_color,
      characterData.eye_color,
      characterData.films.length,
      characterData.skin_color
    ]

    printArrOne = [
      `Name: ${character.name}`,
      `Gender: ${character.gender}`,
      `Height: ${character.height} cm`,
      `Mass: ${character.mass} kg`,
      `Hair color: ${character.hairColor}`,
      `Skin color: ${character.skinColor}`,
      `Eye color: ${character.eyeColor}`,
      `Number of movies: ${character.movies.length}`,
    ];

    charName.innerText = characterData.name;
    charImg.src = character.pictureUrl;

    charInfo.innerHTML = printArrOne.map((info) => `<li>${info}</li>`).join("");
    charInfo.setAttribute("hidden", "");
  });

//INFO BUTTON TWO - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

infoButtonTwo.addEventListener("click", async () => {
  compareDiv.innerHTML = "";
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

  charArrTwo = [
    characterData.name,
    characterData.gender,
    characterData.height,
    characterData.mass,
    characterData.hair_color,
    characterData.eye_color,
    characterData.films.length,
    characterData.skin_color
  ]

  console.log(characterData.hair_color)

  printArrTwo = [
    `Name: ${character.name}`,
    `Gender: ${character.gender}`,
    `Height: ${character.height} cm`,
    `Mass: ${character.mass} kg`,
    `Hair color: ${character.hairColor}`,
    `Skin color: ${character.skinColor}`,
    `Eye color: ${character.eyeColor}`,
    `Number of movies: ${character.movies.length}`,
  ];

  charName2.innerText = characterData.name;
  charImg2.src = character.pictureUrl;
  charInfo2.innerHTML = printArrTwo.map((info) => `<li>${info}</li>`).join("");
  charInfo2.setAttribute("hidden", "");
});

//Function show info - - - - - - - - - - - - - - - - - - - - - - -

function showInfo () {
  compareDiv.innerHTML = "";
  
  if (charArrOne.length === 0 || charArrTwo.length === 0) {
    alert("Please select two characters");
    return;
  }
  else if (charArrOne[0] === charArrTwo[0]) {
    alert("You have selected the same character");
    return;
  }

  compareChar();

  // charInfo.innerHTML = characterInfoOne.map((info) => `<li>${info}</li>`).join("");
  // charInfo2.innerHTML = characterInfoTwo.map((info) => `<li>${info}</li>`).join("");
  charInfo.removeAttribute("hidden", "");
  charInfo2.removeAttribute("hidden", "");
}

//Function compare characters - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function compareChar () {

  let charOneName = charArrOne[0];
  let charTwoName = charArrTwo[0];

  //Height - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  if (charArrOne[2] > charArrTwo[2]) {
    let comp = document.createElement("p");
    comp.innerText = `${charOneName} is taller than ${charTwoName}`;
    compareDiv.append(comp);
  }
  else if (charArrOne[2] < charArrTwo[2]) {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} is taller than ${charOneName}`;
    compareDiv.append(comp);
  }
  else {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} and ${charOneName} are the same height`;
    compareDiv.append(comp);
  }
  
  //Mass - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  if (charArrOne[3] > charArrTwo[3]) {
    let comp = document.createElement("p");
    comp.innerText = `${charOneName} is heavier than ${charTwoName}`;
    compareDiv.append(comp);
  }
  else if (charArrOne[3] < charArrTwo[3]) {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} is heavier than ${charOneName}`;
    compareDiv.append(comp);
  }
  else {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} and ${charOneName} are the same weight`;
    compareDiv.append(comp);
  }
  
  //Number of movies - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  if (charArrOne[6] > charArrTwo[6]) {
    let comp = document.createElement("p");
    comp.innerText = `${charOneName} appears in more movies than ${charTwoName}`;
    compareDiv.append(comp);
  }
  else if (charArrOne[6] < charArrTwo[6]) {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} appears in more movies than ${charOneName}`;
    compareDiv.append(comp);
  }
  else {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} and ${charOneName} appear in the same number of movies`;
    compareDiv.append(comp);
  }

  //Gender - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  if (charArrOne[1] === charArrTwo[1]) {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} and ${charOneName} are the same gender`;
    compareDiv.append(comp);
  }
  else {
    console.log("not same gender");
  }

  //Haircolor - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  if (charArrOne[4] === charArrTwo[2]) {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} and ${charOneName} have the same hair color`;
    compareDiv.append(comp);
  } 
  else {
    console.log("not same haircolor");
  }
  
  //Skincolor - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  if (charArrOne[7] === charArrTwo[7]) {
    let comp = document.createElement("p");
    comp.innerText = `${charTwoName} and ${charOneName} have the same skincolor`;
    compareDiv.append(comp);
  }
  else {
    console.log("not same skincolor");
  }
}

//COMPARE BUTTON - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

compareButton.addEventListener("click", () => {
  showInfo();
});










//      ||