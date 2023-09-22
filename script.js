const form = document.querySelector("form");

// Input
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

// Output
const yearDisplay = document.getElementById("yearDisplay");
const monthDisplay = document.getElementById("monthDisplay");
const dayDisplay = document.getElementById("dayDisplay");

// Date
let date = new Date();
let year = date.getFullYear();
let month = 1 + date.getMonth();
let day = date.getDate();
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function errorUI(input, errorTxt) {
  input.style.borderColor = "red";
  input.nextElementSibling.textContent = errorTxt;
  input.previousElementSibling.style.color = "red";
}

function validate() {
  const inputs = document.querySelectorAll("input");

  let validation = true;

  inputs.forEach((i) => {
    if (!i.value) {
      validation = false;
      errorUI(i, "This field is required");
    } else if (monthInput.value > 12) {
      errorUI(monthInput, "must be valid month");
      validation = false;
    } else if (dayInput.value > 31) {
      errorUI(dayInput, "must be valid day");
      validation = false;
    } else if (yearInput.value > year) {
      errorUI(yearInput, "must be in the past");
      validation = false;
    } else {
      i.previousElementSibling.style.color = "hsl(0, 1%, 44%)";
      i.style.borderColor = "hsl(0, 0%, 86%)";
      i.nextElementSibling.textContent = "";
      validation = true;
    }
  });
  return validation;
}

function handleSubmit() {
  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }
    if (monthInput.value < month) {
      year = year;
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    dayDisplay.innerHTML = d;
    monthDisplay.innerHTML = m;
    yearDisplay.innerHTML = y;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

console.log(month);
