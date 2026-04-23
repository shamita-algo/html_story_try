// Show the button after scrolling down
window.onscroll = function() {
    let btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Scroll to top when clicked
  document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("backToTopBtn");
    btn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  