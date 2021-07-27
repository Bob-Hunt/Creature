let zillaLeft = 225;
let zillaTop = 550;
let zillaRight = true;

function moveLeft() {
    if (zillaRight === true) {
      zillaLeft -= 1000;
    };
    zillaRight = false;
    zillaLeft -= 10;
    let element = document.getElementById("creature");
    element.className = "gordziller";
    element.style.left = zillaLeft + "px";
    console.log(`MoveLeft: ${zillaLeft}`)
  };

  function moveRight() {
    if (zillaRight !== true) {
      zillaLeft += 1000
      ;
    }
    zillaRight = true;
    zillaLeft += 10;
    let element = document.getElementById("creature");
    element.className = "gordzillerFlip";
    element.style.left = zillaLeft + "px";
    console.log(`MoveRight: ${zillaLeft}`)
  };