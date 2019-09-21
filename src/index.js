document.addEventListener("DOMContentLoaded", () => {
  document.querySelector().addEventListener("submit", function(event) {
    document.getElementById("tasks").innerHTML += "";
    event.preventDefault();
}, false);
});

