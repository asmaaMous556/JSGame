var character = document.getElementById("character");
var mushroom = document.getElementById("block");

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    character.classList.add("jump");

    setTimeout(() => {
      character.classList.remove("jump");
    }, 800);
  }
};

let interval = setInterval(() => {
  var characterTop = window.getComputedStyle(character).getPropertyValue("top");
  var mushroomLeft = window.getComputedStyle(mushroom).getPropertyValue("left");

  if (
    parseInt(mushroomLeft) <= 20 &&
    parseInt(mushroomLeft) > 0 &&
    parseInt(characterTop) >= 210
  ) {
    mushroom.style.left = mushroomLeft;

    mushroom.classList.remove("moving-animation");
    confirm("You Lost !");
    document.getElementById("overlay").style.display = "block";
    clearInterval(interval);
    playAudio();
  }
}, 10);

function playAudio() {
  var audio = new Audio();
  audio.src = "./assets/Super Mario Bros - Lose a Life.mp3";
  // when the sound has been loaded, execute your code
  audio.volume = 0.5;
  audio.muted = false;

  audio.play().catch((e) => {
    audio.play();
  });

  // without this line it's not working although I have "muted" in HTML
}
