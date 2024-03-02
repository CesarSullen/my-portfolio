function playVideo() {
  let hidenElements = document.querySelectorAll(".d-none");
  hidenElements.forEach(function (element) {
    element.classList.remove("d-none");
    element.classList.add("d-flex");
  });

  let ofConfirmation = document.querySelector(".of-confirmation");
  ofConfirmation.classList.add("d-none");

  let packVideo = document.getElementById("packVideo");
  packVideo.play();
}

/* Observer */
const sections = document.querySelectorAll(".to-appear");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
  }
);
sections.forEach((section) => {
  observer.observe(section);
});
