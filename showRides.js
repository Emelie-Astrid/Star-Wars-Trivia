let vehicleButton = document.querySelector("#vehicle");
let vehicleDiv = document.querySelector("#vehicle");

async function getMostExpensiveRide () {
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
            characterData.movies,
            characterData.pictureUrl,
            characterData.homeWorld,
            characterData.vehicles, 
            characterData.starships);

        await character.findStarship();
        await character.findVehicle();

        console.log(JSON.stringify(vehicleArr));


        let highestPrice = vehicleArr.reduce((acc, current) => {
            if (current.price && current.price > acc) {
              return current.price;
            }
            return acc;
          }, 0);
          
          console.log(highestPrice);

    } 

    catch (error) {
        console.error(error);
    }
}

vehicleButton.addEventListener("click", () => {
    getMostExpensiveRide();
})