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

  // ✅ IMAGE FIX (inside onload)

  const images = [
    "img/pooja1.jpg",
    "img/pooja2.jpg",
    "img/pooja3.jpg"
  ];

  let savedImage = localStorage.getItem("poojaImage");

  if (!savedImage) {
    savedImage = images[Math.floor(Math.random() * images.length)];
    localStorage.setItem("poojaImage", savedImage);
  }

  const img = document.querySelector(".pooja-img");
  if (img) {
    img.src = savedImage;
  }

};
</script>
const poojas = [
  {
    name: "Satyanarayan Puja",
    img: "img/satyanarayan.jpg"
  },
  {
    name: "Ganesh Puja",
    img: "img/ganesh.jpg"
  },
  {
    name: "Navgrah Puja",
    img: "img/navgrah.jpg"
  }
];

document.querySelectorAll(".pandit-card").forEach((card, i) => {
  const img = card.querySelector("img");
  if (img && poojas[i]) {
    img.src = poojas[i].img;
  }
});
