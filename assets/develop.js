// Replays the negative-to-positive transition on the hero plate.
(function () {
  var plate = document.querySelector("[data-develop]");
  var button = document.querySelector("[data-replay]");
  if (!plate || !button) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  button.hidden = false;
  button.addEventListener("click", function () {
    plate.classList.remove("develop");
    void plate.offsetWidth;
    plate.classList.add("develop");
  });
})();
