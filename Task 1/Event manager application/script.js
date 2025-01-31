const events = JSON.parse(localStorage.getItem("events")) || [];

document.getElementById("eventForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;

  const event = {
    id: Date.now(),
    title,
    date,
    status: getStatus(new Date(date)),
  };

  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
  e.target.reset();
});

function getStatus(date) {
  const today = new Date();
  return date >= today ? "Upcoming" : "Past";
}
