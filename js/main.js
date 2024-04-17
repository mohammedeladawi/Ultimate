// Skills functionaliy
const skillsSection = document.querySelector(".our-skills");
const progressPercentTag = document.querySelectorAll(
  ".our-skills .skill h3 span"
);
const progressWidth = document.querySelectorAll(
  ".our-skills .skill .the-progress span"
);
let animationStarted = false;

const handleSkillsOnScroll = () => {
  if (scrollY >= skillsSection.offsetTop - 100 && !animationStarted) {
    for (let i = 0; i < progressPercentTag.length; i++) {
      // Increase progress tag
      const progressData = parseInt(progressWidth[i].dataset.width);
      progressTagIncreaser(progressPercentTag[i], progressData);
      // Increase progress width
      progressWidth[i].style.width = `${progressData}%`;
    }
    animationStarted = true;
  }
};

// Increase progressPercentTag content
const progressTagIncreaser = (percentTag, goal) => {
  let countUp = setInterval(() => {
    let percentValue = parseInt(percentTag.textContent);
    percentTag.textContent = `${percentValue + 1}%`;
    if (percentValue == goal) clearInterval(countUp);
  }, 500 / goal);
};

window.addEventListener("scroll", handleSkillsOnScroll);

// Events functionality
const daySpan = document.querySelector(".events .time .days");
const hourSpan = document.querySelector(".events .time .hours");
const minuteSpan = document.querySelector(".events .time .minutes");
const secondSpan = document.querySelector(".events .time .seconds");

function updateCountdown() {
  const goalDate = new Date("Dec 31, 2024 23:59:59").getTime();
  const nowDate = new Date().getTime();
  const diffDate = goalDate - nowDate;

  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  daySpan.textContent = days < 10 ? `0${days}` : days;

  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hourSpan.textContent = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  minuteSpan.textContent = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
  secondSpan.textContent = seconds < 10 ? `0${seconds}` : seconds;

  // Stop the counter when it reaches this time
  if (diffDate <= 0) clearInterval(eventCountDown);
}

const eventCountDown = setInterval(updateCountdown, 1000);

// Display them immediately
updateCountdown();
