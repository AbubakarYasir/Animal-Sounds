// Detecting Button Press
var buttons = document.getElementsByClassName("sounds");

function handleClick() {
  var buttonNumber = this.innerHTML;
  makeSound(buttonNumber);
  buttonAnimation(buttonNumber);
}
for (var i = 0; i < buttons.length; i++) {
  document
    .querySelectorAll(".sounds")
    [i].addEventListener("click", handleClick);
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var cat = new Audio("./sounds/Cat.mp3");
      cat.play();
      break;
    case "a":
      var dog = new Audio("./sounds/Dog.mp3");
      dog.play();
      break;
    case "s":
      var cow = new Audio("./sounds/Cow.mp3");
      cow.play();
      break;
    case "d":
      var jaguar = new Audio("./sounds/Jaguar.mp3");
      jaguar.play();
      break;
    case "j":
      var elk = new Audio("./sounds/Elk.mp3");
      elk.play();
      break;
    case "k":
      var elephant = new Audio("./sounds/Elephant.mp3");
      elephant.play();
      break;
    case "l":
      var pigeon = new Audio("./sounds/Pigeon.mp3");
      pigeon.play();
      break;
    default:
      console.log(key, "is not a valid Input.");
      break;
  }
}

function buttonAnimation(currentKey) {
  // Adding Shadow to active Button
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
