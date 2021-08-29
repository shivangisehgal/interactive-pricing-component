const slider = document.getElementById("slider_range");
const yearly = document.getElementById("switch");

slider.addEventListener("input", function() {
  var slider_val = slider.value;
  var price, price_display;
  switch (slider_val) {
    case "1":
      price = "8.00";
      price_display = "10K";
      break;
    case "2":
      price = "12.00";
      price_display = "50K";
      break;
    case "3":
      price = "16.00";
      price_display = "100K";
      break;
    case "4":
      price = "24.00";
      price_display = "500K";
      break;
    case "5":
      price = "36.00";
      price_display = "1M";
      break;
  }
  if (yearly.checked) {
    price = ((price / 100) * 75).toFixed(2);
  }
  document.getElementById("slider_val").innerText = price_display;
  document.querySelector(".amount").innerHTML = price;

  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)" +
    value +
    "%, #b3b3b3 " +
    value +
    "%, #b3b3b3 100%)";
});

yearly.addEventListener("click", function() {
  var price_new = document.querySelector(".amount").innerHTML;
  if (this.checked) {
    price_new = ((price_new / 100) * 75).toFixed(2);
  }
  if (!this.checked) {
    price_new = ((price_new / 3) * 4).toFixed(2);
  }
  document.querySelector(".amount").innerHTML = price_new;
});
