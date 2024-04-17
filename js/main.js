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
    console.log(percentTag.textContent);
    if (percentValue == goal) clearInterval(countUp);
  }, 500 / goal);
};

window.addEventListener("scroll", handleSkillsOnScroll);
