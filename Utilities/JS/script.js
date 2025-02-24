window.addEventListener("load", function() {
    setTimeout(function() {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.display = "none";
}, 250);
});

document.querySelector('.back-to-top').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
