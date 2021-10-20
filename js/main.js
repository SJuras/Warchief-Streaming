// toggle menu
function toggleMenu(){
  const sidemenu = document.querySelector(".sidemenu");
  const toggle = document.querySelector(".toggle");
  sidemenu.classList.toggle("active");
  toggle.classList.toggle("active");
}
// toggle menu END

// adds class sticky to header when scrolling down.
window.addEventListener('scroll', function(){
  var header = document.querySelector(".header");
  header.classList.toggle('sticky', window.scrollY > 0);
});
// sticky header END

// countdown time
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// switch visibility from clock to live info once the countdown reaches 0;
const clock = document.querySelectorAll(".clock");
const live = document.querySelectorAll(".live-info");

const currentYear = new Date().getFullYear();

// hardcoded zero-date
const streamingDate = new Date("January 1 2022 00:00:00");

// update COuntdown Timer
function updateCountdownTimer(){
  const currentTime = new Date();
  const diff = streamingDate - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

  // show live info, hide clock once countdown reaches zeros.
  if(d === 00 && h === 00 && m === 00 && s === 00){
    live.classList.add("live");
    clock.classList.add("not-visible");
  }
}

setInterval(updateCountdownTimer, 1000);

// countdown timer END


// Parallax
const parallax = document.getElementById("para");

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
