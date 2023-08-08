let display = document.getElementById('display');
let secs = 0;
let mins = 0;
let hrs = 0;
let intervalId;
let isTimerWorking = false;

function Start() {
  if (isTimerWorking == false) {
    isTimerWorking = true;
    intervalId = setInterval(timer, 1000);
  }
}

function timer() {
  secs = parseInt(secs);
  mins = parseInt(mins);
  hrs = parseInt(hrs);

  secs += 1;

  if (secs == 60) {
    mins += 1;
    secs = 0;
  }

  if (mins == 60) {
    hrs += 1;
    mins = 0;
  }

  secs = pads(secs);
  mins = pads(mins);
  hrs = pads(hrs);

  display.innerHTML = hrs + ":" + mins + ":" + secs;
}

function pads(units) {
  return ('0' + units).slice(-2);
}

function Reset() {
  clearInterval(intervalId);
  display.innerHTML = '00:00:00';
  isTimerWorking = false;
  secs = 0;
  mins = 0;
  hrs = 0;
}

function Pause()
{
   if(isTimerWorking == true)
   {
      clearInterval(intervalId);
      isTimerWorking = false;
   }
}