let compareButton = document.querySelector("#compare-button");

function showCharData () {
    compareDiv.innerHTML = "";
    
    if (charArrOne.length === 0 || charArrTwo.length === 0) {
      alert("Please select two characters");
      return;
    }
    else if (charArrOne[0] === charArrTwo[0]) {
      alert("You have selected the same character");
      return;
    }
    else {
      charInfo.innerHTML = printArrOne.map((info) => `<li>${info}</li>`).join("");
      charInfoTwo.innerHTML = printArrTwo.map((info) => `<li>${info}</li>`).join("");
    }
  
    compareChar();
}

compareButton.addEventListener("click", () => {
    showCharData();
}); 
