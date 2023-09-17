const form = document.querySelector("form");

// Input
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

// Output
const yearDisplay = document.getElementById("yearDisplay");
const monthDisplay = document.getElementById("monthDisplay");
const dayDisplay = document.getElementById("dayDisplay");

let date = new Date();
let year = date.getFullYear();
let month = 1 + date.getMonth();
let day = date.getDate();

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");

  let validation = true;

  inputs.forEach((i) => {
    if (!i.value) {
      validation = false;
      i.style.borderColor = "red";
      i.nextElementSibling.textContent = "This field is required";
      i.previousElementSibling.style.color = "red";
    } else if (monthInput.value > 12) {
      monthInput.previousElementSibling.style.color = "red";
      monthInput.style.borderColor = "red";
      monthInput.nextElementSibling.textContent = "must be valid month";
      validation = false;
    } else if (dayInput.value > 31) {
      dayInput.previousElementSibling.style.color = "red";
      dayInput.style.borderColor = "red";
      dayInput.nextElementSibling.textContent = "must be valid day";
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
      day = day + months[month - 1]; // 47 ... 17 + 30
      month = month - 1; // 8 ...  сентябрь 9 месяц 30 дней
      console.log(day);
      console.log(month);
    }
    if (monthInput.value > month) {
      month = month + 12; // 21 ... 9 + 12
      year = year - 1; // 2022
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    yearDisplay.innerHTML = y;
    monthDisplay.innerHTML = m;
    dayDisplay.innerHTML = d;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});
