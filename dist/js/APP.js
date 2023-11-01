(function () {
  let scrollContainer = document.querySelector(".scroll");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
  });

  backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
  });
})();
function addHorizontalScroll(blockId) {
  let block = document.getElementById(blockId);

  block.addEventListener("wheel", function (evt) {
    let maxScroll = block.scrollWidth - block.offsetWidth;
    let currentScroll = block.scrollLeft + evt.deltaY;

    if (currentScroll > 0 && currentScroll < maxScroll) {
      evt.preventDefault();
      block.scrollLeft = currentScroll;
    } else if (currentScroll <= 0) {
      block.scrollLeft = 0;
    } else {
      block.scrollLeft = maxScroll;
    }
  });
}
