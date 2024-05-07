const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearCount = document.getElementById("year-count");

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
  month: "long",
});

dayName.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumber.innerText = date.getDate();

yearCount.innerText = date.getFullYear();