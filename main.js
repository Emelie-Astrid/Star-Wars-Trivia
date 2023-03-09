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

getNames().then((data) => {
    data.results.forEach((person)=> {
        let listName = document.createElement("li");
        listName.innerText = person.name;
        nameListOne.append(listName);
    });
});

getNames().then((data) => {
    data.results.forEach((person)=> {
        let listName = document.createElement("li");
        listName.innerText = person.name;
        nameListTwo.append(listName);
    });
});

