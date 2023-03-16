let vehicleButton = document.querySelector("#vehicle");
let vehicleDiv = document.querySelector("#vehicle");
let rideinfo = document.querySelector("#ride-info");
let rideinfoTwo = document.querySelector("#ride-info-two");
let highestPriceShip = { price: 0 };
let highestPriceShipTwo = { price: 0 };

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

        let starshipList = await character.findStarships();
        let vehicleList = await character.findVehicles();

        let rides = starshipList.concat(vehicleList);
        let highestPriceShip = { price: 0 };
        rideinfo.innerText = "";

        rides.forEach(ride => {
            if (ride.price && ride.price > highestPriceShip.price) {
                highestPriceShip = ride;
            }
        });
        
        if (highestPriceShip.name) {
            rideinfo.innerText =`The most valuable ride of ${firstChar} is the "${highestPriceShip.name}" with a price of ${highestPriceShip.price} credits.`
        }
        else if(rides.length === 0) {
            rideinfo.innerText = `${firstChar} has no ride`;
        }
        else {
            rideinfo.innerText =`None of the rides of ${firstChar} has a price`
        }
    } 

    catch (error) {
        console.error(error);
    }
}

async function getMostExpensiveRideTwo () {
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
            characterData.hairColor, 
            characterData.skinColor, 
            characterData.eyeColor, 
            characterData.movies,
            characterData.pictureUrl,
            characterData.homeWorld,
            characterData.vehicles, 
            characterData.starships);

            let starshipList = await character.findStarships();
            let vehicleList = await character.findVehicles();
    
            let rides = starshipList.concat(vehicleList);
            let highestPriceShipTwo = { price: 0 };
            rideinfoTwo.innerText = "";

            rides.forEach(ride => {
                if (ride.price && ride.price > highestPriceShipTwo.price) {
                    highestPriceShipTwo = ride;
                }
            });
        
        if (highestPriceShipTwo.name) {
            rideinfoTwo.innerText =`The most valuable ride of ${secondChar} is the "${highestPriceShipTwo.name}" with a price of ${highestPriceShipTwo.price} credits.`
        }
        else if(rides.length === 0) {
            rideinfoTwo.innerText = `${secondChar} has no ride`;
        }
        else {
            rideinfoTwo.innerText =`None of the rides of ${secondChar} has a price`
        }
    } 

    catch (error) {
        console.error(error);
    }
}

vehicleButton.addEventListener("click", () => {
    getMostExpensiveRide();
    getMostExpensiveRideTwo();
})