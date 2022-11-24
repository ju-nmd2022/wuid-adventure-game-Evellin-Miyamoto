// window.localStorage.clear();
let box_yellowIsOpen = false;
let box_drawerIsOpen = false;

window.addEventListener("load", function () {
  //This part of the code will declare variables

  const box_yellow = document.getElementById("box_yellow");
  const box_drawer = document.getElementById("box_drawer");
  const key = document.getElementById("key");
  const diamond = document.getElementById("diamond");
  const star_key = document.getElementById("star_key");
  const star_diamond = document.getElementById("star_diamond");
  const info = document.getElementById("info");
  const next_room = document.getElementById("next_room");

  //This part is to define the visibility of the items at the start
  key.style.visibility = "hidden";
  diamond.style.visibility = "hidden";
  star_key.style.visibility = "hidden";
  star_diamond.style.visibility = "hidden";

  //click function yellow box
  box_yellow.addEventListener("click", function () {
    if (box_yellowIsOpen === false) {
      key.style.visibility = "visible";
      star_key.style.visibility = "visible";
      info.innerText = "Congratulations! You've found the key!";
      setTimeout(() => {
        info.innerText = "Looks like your items are somewhere here...";
        if (box_yellowIsOpen & box_drawerIsOpen) {
          info.innerText = "You've found both items! Lets go to the next room!";
        }
      }, 3000);
      box_yellowIsOpen = true;

      saveToLocalStorage();
    } else {
      info.innerText = "Looks like you've already found the key!";
      //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
      setTimeout(() => {
        info.innerText = "Looks like your items are somewhere here...";
      }, 3000);
      box_yellowIsOpen = false;

      saveToLocalStorage();
    }
  });

  //click function drawer box
  box_drawer.addEventListener("click", function () {
    if (box_drawerIsOpen === false) {
      diamond.style.visibility = "visible";
      star_diamond.style.visibility = "visible";
      info.innerText = "Congratulations! You've found the diamond!";
      setTimeout(() => {
        info.innerText = "Looks like your items are somewhere here...";
        if (box_yellowIsOpen & box_drawerIsOpen) {
          info.innerText = "You've found both items! Lets go to the next room!";
        }
      }, 3000);

      box_drawerIsOpen = true;

      saveToLocalStorage();
    } else {
      info.innerText = "Looks like you've already found the diamond!";
      //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

      box_drawerIsOpen = false;

      saveToLocalStorage();
    }
  });
  next_room.addEventListener("click", function () {
    if (box_yellowIsOpen & box_drawerIsOpen) {
      window.location.href = "page3.html";
      saveToLocalStorage();
    }
  });

  //local storage followed from Garrit's class
  readFromLocalStorage();
  if (box_yellowIsOpen) {
    key.style.visibility = "visible";
    star_key.style.visibility = "visible";
  } else if (box_yellowIsOpen === false) {
    key.style.visibility = "hidden";
    star_key.style.visibility = "hidden";
  }

  if (box_drawerIsOpen) {
    diamond.style.visibility = "visible";
    star_diamond.style.visibility = "visible";
  } else if (box_drawerIsOpen === false) {
    diamond.style.visibility = "hidden";
    star_diamond.style.visibility = "hidden";
  }

  function saveToLocalStorage() {
    localStorage.box_drawerIsOpen = box_drawerIsOpen;
    localStorage.box_yellowIsOpen = box_yellowIsOpen;
  }

  function readFromLocalStorage() {
    box_drawerIsOpen = localStorage.box_drawerIsOpen === "true";
    box_yellowIsOpen = localStorage.box_yellowIsOpen === "true";
  }
});
