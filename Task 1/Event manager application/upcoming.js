const events = JSON.parse(localStorage.getItem("events")) || [];
const upcomingEventsList = document.getElementById("upcomingEvents");

const upcomingEvents = events.filter((event) => event.status === "Upcoming");
upcomingEventsList.innerHTML = upcomingEvents
  .map((event) => `<li class="upcoming">${event.title} - ${event.date}</li>`)
  .join("");
