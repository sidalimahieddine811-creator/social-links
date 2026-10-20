
const qrContainer = document.getElementById("qrcode");

if (!qrContainer) {
  alert("QR container not found!");
} else if (typeof QRCode === "undefined") {
  qrContainer.innerHTML =
    "<p style='color:#ff7777'>QR library not loaded. Check internet.</p>";
} else {
  qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text: "https://example.com",
    width: 200,
    height: 200,
    colorDark: "#080d18",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
