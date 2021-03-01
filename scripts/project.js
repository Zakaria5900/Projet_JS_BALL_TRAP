// global variable for the project

// default initial width and heigth for the target
var TARGET_WIDTH = 40;
var TARGET_HEIGHT = 40;

// chrono management
// value of time in tenth of seconds
var time = 0;
// timer variable
var chronoTimer = null;


// YOUR NAME HERE
// Zakaria OUAICHOUCHE 

// YOUR CODE BELOW

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function ljust(number) {
  var output = number + '';
  if (output.length < 2){
    output = '0' + output;
  }
  return output;
}

function incrementTime() {
  time += 1;
  tenth.innerText = time % 10;
  seconds.innerText = ljust((time % 1000 - time % 10)/10 % 60);
  minutes.innerText = parseInt(time / 600);
}

window.onload = function(){
  const oneTargetButton =       document.getElementById('create');
  const playground =            document.getElementById('terrain');
  const startButton =           document.getElementById('start');
  const tenth =                 document.getElementById('tenth');
  const seconds =               document.getElementById('seconds');
  const minutes =               document.getElementById('minutes');
  const numberTargetSelect =    document.getElementById('nbtargets');
  const numberRemainingTarget = document.getElementById('remaining');
  var id = 0;

  oneTargetButton.addEventListener('click', (event) => {
    var top =  getRandomInt(370);
    var left = getRandomInt(370);
    terrain.insertAdjacentHTML(
      'beforeend',
      `<div id=${id} class="target on" style="top: ${top}px; left: ${left}px;"></div>`
    );
    var target = document.getElementById(id);
    id ++;

    target.addEventListener('click', (event) => {
      target.classList.add('hit');
      nb = parseInt(numberRemainingTarget.innerText);
      numberRemainingTarget.innerText = nb - 1;

      if (nb - 1 == 0){
        clearInterval(chronoTimer);
        window.alert('gagné en ' + parseInt(time / 600) + '\'' + ljust((time % 1000 - time % 10)/10 % 60) + '\"' + time % 10);
      }

      setTimeout(function() {
        target.parentNode.removeChild(target);
      }, 1000);
    })
  })

  startButton.addEventListener('click', (event) => {
    time = 0;
    numberRemainingTarget.innerText = numberTargetSelect.value;
    chronoTimer = setInterval(incrementTime, 100);
    playground.innerHTML = '';

    times = numberTargetSelect.value;
    for(var i = 0; i < times; i ++){
      oneTargetButton.click();
    }
  })
}



