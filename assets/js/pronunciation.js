(function () {
  var link = document.querySelector(".pronunciation-link");
  if (!link) return;

  var audio = new Audio(link.href);
  audio.preload = "none";

  link.addEventListener("click", function (event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    audio.currentTime = 0;
    audio.play().catch(function () {
      window.location.assign(link.href);
    });
  });
})();
