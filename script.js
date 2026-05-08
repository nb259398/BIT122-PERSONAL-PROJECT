// Run when the page loads
window.onload = function() {
  console.log("NB Computer Services website loaded successfully!");
};

// Contact form validation
document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields before submitting.");
        event.preventDefault();
      } else {
        alert("✅ Thank you, your message has been sent!");
      }
    });
  }

  // Back to Top button functionality
  let backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });


  // Dynamic footer date
  let footerDate = document.getElementById("footerDate");
  if (footerDate) {
    let year = new Date().getFullYear();
    footerDate.textContent = "© " + year + " NB Computer Services";
  }
});
