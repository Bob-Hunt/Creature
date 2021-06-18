let zillaLeft = 225;
let zillaTop = 550;

function moveLeft() {
    let element = document.getElementById("creature");
    zillaLeft -= 10;
    element.className = "gordziller";
    element.style.left = zillaLeft + "px";
    return zillaLeft;
  }

  function moveRight() {
    let element = document.getElementById("creature");
    zillaLeft += 10;
    element.className = "gordzillerFlip";
    element.style.left = zillaLeft + "px";
    return zillaLeft;
  }

