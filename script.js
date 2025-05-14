// Age Calculation
function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.textContent = "Please select your date of birth.";
    result.classList.add("fade-in");
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    result.textContent = "You cannot be born in the future!";
    result.classList.add("fade-in");
    return;
  }

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  result.textContent = `You are ${ageYears} year(s), ${ageMonths} month(s), and ${ageDays} day(s) old.`;
  result.classList.add("fade-in");
}

// Random Gradient Background
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  const color4 = getRandomColor();

  const background = document.querySelector(".background");
  background.style.background = `linear-gradient(-45deg, ${color1}, ${color2}, ${color3}, ${color4})`;
  background.style.backgroundSize = "400% 400%";
  background.style.animation = "gradientShift 15s ease infinite";
}

window.onload = () => {
  setRandomGradient();
  setInterval(setRandomGradient, 15000); // Change background every 15s
};
