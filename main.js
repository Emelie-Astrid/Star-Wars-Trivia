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

let newCharacter = new Character ("Kylo Ren", "Male", "189 cm", "80 kg", "black", "pale", "brown", "3", "link");

console.log(newCharacter);
