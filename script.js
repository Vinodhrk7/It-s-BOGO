const offerBoxes = document.querySelectorAll(".offer-box");
const totalPrice = document.getElementById("total-price");

function updateDisplay() {
  offerBoxes.forEach((box) => {
    const input = box.querySelector('input[type="radio"]');
    const options = box.querySelector(".options");
    if (input.checked) {
      box.classList.add("selected");
      if (options) options.style.display = "block";
      totalPrice.textContent = `Total: $${input.dataset.price}.00 USD`;
    } else {
      box.classList.remove("selected");
      if (options) options.style.display = "none";
    }
  });
}
 
offerBoxes.forEach((box) => {
  const input = box.querySelector('input[type="radio"]');
  input.addEventListener("change", updateDisplay);
});

updateDisplay();
