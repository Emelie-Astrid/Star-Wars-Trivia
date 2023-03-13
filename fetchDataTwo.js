let infoButtonTwo = document.querySelector("#char2-button");
let charInfoTwo = document.querySelector("#char2-info");
let charNameTwo = document.querySelector("#char2-name");
let charImgTwo = document.querySelector("#char2-image");
let characterInfoTwo = [];
let charArrTwo = [];


async function fetchDataTwo() {
    compareDiv.innerHTML = "";
    charInfoTwo.innerHTML = "";
  
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

    charNameTwo.innerText = characterData.name;
    charImgTwo.src = character.pictureUrl;
}

infoButtonTwo.addEventListener("click", () => {
    fetchDataTwo();
});