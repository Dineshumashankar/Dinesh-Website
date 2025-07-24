// Change text from "Hi" to "Hello" after 1 second
setTimeout(() => {
  document.getElementById("hi-text").textContent = "Hello";
}, 3000);
function showPopup(index) {
  const popup = document.getElementById("popupImage");
  const image = document.getElementById("popupImg");

  image.src = `images/skill${index}.png`; // skill1.png, skill2.png...
  popup.classList.add("show");

  // Optional: auto-close after 3s
  setTimeout(() => popup.classList.remove("show"), 3000);
}
