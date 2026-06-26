<script>
window.onload = function () {

  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {

    if (buttons[i].innerText.includes("Check Availability")) {

      buttons[i].onclick = function () {

        const card = this.closest(".pandit-card");

        let name = "Pandit";
        if (card && card.querySelector("h3")) {
          name = card.querySelector("h3").innerText;
        }

        alert("🕉️ Checking availability for " + name +
        "\n\n📅 We will confirm slots on WhatsApp soon!");
      }
    }
  }

};
</script>
const images = [
  "img/pooja1.jpg",
  "img/pooja2.jpg",
  "img/pooja3.jpg"
];

let savedImage = localStorage.getItem("poojaImage");

if (!savedImage) {
  // first time → pick random image
  savedImage = images[Math.floor(Math.random() * images.length)];
  localStorage.setItem("poojaImage", savedImage);
}

document.querySelector(".pooja-img").src = savedImage;
