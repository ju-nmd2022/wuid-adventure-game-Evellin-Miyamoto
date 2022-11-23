const play = document.getElementById("play");
const result = document.getElementById("result");
let user_choice = document.getElementById("user_choice");
let star = document.getElementById("star");

star.style.visibility = "hidden";

//stackoverflow.com/questions/19892420/javascript-form-comparing-randomly-generated-number-to-user-input
play.addEventListener("click", function () {
  let computer = Math.round(Math.random() * 5);
  console.log(computer);

  let user_choice = document.getElementById("user_choice").value;
  if (user_choice == computer) {
    console.log("you won");
    result.innerText = "Congratulations you won!!";
    star.style.visibility = "visible";
  } else {
    result.innerText = "You lost! Keep trying...";
    console.log("you lost");
    star.style.visibility = "hidden";
  }
});
