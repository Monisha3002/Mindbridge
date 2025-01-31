const events = JSON.parse(localStorage.getItem("events")) || [];
const pastEventsList = document.getElementById("pastEvents");

const pastEvents = events.filter((event) => event.status === "Past");
pastEventsList.innerHTML = pastEvents
  .map((event) => `<li class="past">${event.title} - ${event.date}</li>`)
  .join("");
