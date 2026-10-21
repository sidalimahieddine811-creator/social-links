
const qrContainer = document.getElementById("qrcode");

if (!qrContainer) {
  console.error("QR container not found!");
} else if (typeof QRCode === "undefined") {
  qrContainer.textContent =
    "QR library not loaded. Please check your internet connection.";
} else {
  qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text: "https://sidalimahieddine811-creator.github.io/social-links/",
    width: 240,
    height: 240,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
