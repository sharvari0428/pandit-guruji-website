document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(
      link.getAttribute("href")
    ).scrollIntoView({
      behavior: "smooth"
    });
  });
});
alert("🕉️ Your booking request has been submitted!\nPandit Guruji will contact you shortly.");
window.open(
  "https://wa.me/919876543210?text=Namaste%20Guruji,%20I%20would%20like%20to%20book%20a%20puja.",
  "_blank"
);
document.querySelectorAll(".book-btn, .availability-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const bookingSection = document.querySelector("#booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
