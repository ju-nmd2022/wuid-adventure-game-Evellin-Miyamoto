// window.localStorage.clear();
let box_pillowIsOpen = false;

window.addEventListener("load", function () {
  //This part of the code will declare variables
  const box_pillow = document.getElementById("box_pillow");
  const fuel = document.getElementById("fuel");
  const star_fuel = document.getElementById("star_fuel");
  const next_Door = document.getElementById("next_Door");
  let info3 = document.getElementById("info3");
  // const next = this.document.getElementById("next");

  //This part is to define the visibility of the items at the start
  fuel.style.visibility = "hidden";
  star_fuel.style.visibility = "hidden";

  //click function pillow box
  box_pillow.addEventListener("click", function () {
    if (box_pillowIsOpen === false) {
      fuel.style.visibility = "visible";
      star_fuel.style.visibility = "visible";
      info3.innerText = "Congratulations! You've found the fuel";
      setTimeout(() => {
        info3.innerText = "Open the door!";
      }, 3000);

      box_pillowIsOpen = true;
      saveToLocalStorage();
    } else {
      info3.innerText = "Looks like you've already found the fuel!";
      //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
      setTimeout(() => {
        info3.innerText = "Open the door!";
      }, 3000);

      saveToLocalStorage();
      box_pillowIsOpen = false;
    }
  });
  next_Door.addEventListener("click", function () {
    if (box_pillowIsOpen) {
      window.location.href = "page4.html";
      saveToLocalStorage();
    } else {
      info3.innerText = "You still have one item left!";
      setTimeout(() => {
        info3.innerText = "Maybe one of them is here...";
      }, 3000);
    }
  });

  //local storage
  readFromLocalStorage();
  if (box_pillowIsOpen) {
    fuel.style.visibility = "visible";
    star_fuel.style.visibility = "visible";
  } else if (box_pillowIsOpen === false) {
    fuel.style.visibility = "hidden";
    star_fuel.style.visibility = "hidden";
  }

  function saveToLocalStorage() {
    localStorage.box_pillowIsOpen = box_pillowIsOpen;
  }

  function readFromLocalStorage() {
    box_pillowIsOpen = localStorage.box_pillowIsOpen === "true";
  }
});
