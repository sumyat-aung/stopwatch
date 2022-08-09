const time = document.getElementById("time");
const start = document.getElementById("start");
const cont = document.getElementById("continue");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let clock = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }
  console.log(hours, minutes, seconds);

  let secDis = seconds < 10 ? `0${seconds}` : seconds;
  let minDis = minutes < 10 ? `0${minutes}` : minutes;
  let hourDis = hours < 10 ? `0${hours}` : hours;

  time.textContent = `${hourDis}:${minDis}:${secDis}`;
};

let timeGoing;

start.addEventListener("click", () => {
  clearInterval(timeGoing);
  timeGoing = setInterval(clock, 1000);
});

pause.addEventListener("click", () => {
  clearInterval(timeGoing);
});

cont.addEventListener("click", () => {
  clearInterval(timeGoing);
  timeGoing = setInterval(clock, 1000);
});

reset.addEventListener("click", () => {
  clearInterval(timeGoing);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeGoing = setInterval(clock, 1000);
});
