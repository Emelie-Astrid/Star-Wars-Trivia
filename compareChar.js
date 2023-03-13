let compareDiv = document.querySelector("#comparison");

function compareChar () {
    dateDiv.innerHTML = "";
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
    else if (charArrOne[6] === charArrTwo[6]){
      let comp = document.createElement("p");
      comp.innerText = `${charTwoName} and ${charOneName} appear in the same number of movies`;
      compareDiv.append(comp);
    }
  
    //Gender - - - - - - - - - - - - - - - - - - - - - - - - - - - -
     if (charArrOne[1] === charArrTwo[1]) {
      let comp = document.createElement("p");
      comp.innerText = `${charOneName} and ${charTwoName} are the same gender`;
      compareDiv.append(comp);
    }
  
    //Haircolor - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    if (charArrOne[4] === charArrTwo[2]) {
      let comp = document.createElement("p");
      comp.innerText = `${charOneName} and ${charTwoName} have the same hair color`;
      compareDiv.append(comp);
    } 
    
    //Skincolor - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   if (charArrOne[7] === charArrTwo[7]) {
      let comp = document.createElement("p");
      comp.innerText = `${charOneName} and ${charTwoName} have the same skincolor`;
      compareDiv.append(comp);
    }
}