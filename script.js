document.querySelectorAll(".card button")
.forEach(button => {
  button.addEventListener("click", () => {
    window.open(
      "https://wa.me/919876543210?text=I want to book a puja.",
      "_blank"
    );
  });
});

document.getElementById("callBtn")
.addEventListener("click", () => {
  window.location.href = "tel:+919876543210";
});
