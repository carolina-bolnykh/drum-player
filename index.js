for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", onClick);
}

function onClick(){
  var classOfButton = this.className;

  switch (classOfButton) {
    case "w drum":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a drum":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "s drum":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "d drum":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j drum":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k drum":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "l drum":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    default: console.log(classOfButton);
  }

  //detecting keyboard press
  document.addEventListener("keydown", function(event) {
      makeSound(event.key);
    });
  }

  function makeSound(key){
    switch (key) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;

      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;

      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
      break;

      default:;
  }

}
