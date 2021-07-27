let zillaLeft = 225;
let zillaTop = 550;
let zillaRight = true;
let isDown = false;

let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

leftBtn.addEventListener('mousedown', function(e){
    isDown = true;
    if (zillaRight === true) {
      zillaLeft -= 1000;
    };
    zillaRight = false;
    zillaLeft -= 10;
    let element = document.getElementById("creature");
    element.className = "gordziller";
    element.style.left = zillaLeft + "px";
    console.log(`MoveLeft: ${zillaLeft}`);
}, true);

leftBtn.addEventListener('mouseup', function(){
    isDown = false;
}, true);

rightBtn.addEventListener('mousedown', function(e) {
    isDown = true;
    if (zillaRight !== true) {
      zillaLeft += 1000;
    };
    zillaRight = true;
    zillaLeft += 10;
    let element = document.getElementById("creature");
    element.className = "gordzillerFlip";
    element.style.left = zillaLeft + "px";
    console.log(`MoveRight: ${zillaLeft}`)
}, true);

rightBtn.addEventListener('mouseup', function(){
    isDown = false;
}, true);
