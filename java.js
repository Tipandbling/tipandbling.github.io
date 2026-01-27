 function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
  }
  $(document).ready(function () {
  $("#searchBar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".card").filter(function () {
      $(this).toggle($(this).attr("data-name").toLowerCase().includes(value));
    });
  });
});
let container = document.querySelector(".slider-container");
let scrollAmount = 0;


if (container) {
    setInterval(() => {
        container.scrollBy({ left: 250, behavior: "smooth" });

        scrollAmount += 250;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            container.scrollTo({ left: 0, behavior: "smooth" });
            scrollAmount = 0;
        }
    }, 2000); 
}
const videoCards = document.querySelectorAll(".video-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight - 100;

  videoCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("show");
    }
  });
});
document.querySelectorAll(".video-card video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});
window.addEventListener("load", () => {
  document.querySelector(".fade-in").classList.add("show");
});
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight - 100;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
});





