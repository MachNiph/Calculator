const number = document.querySelectorAll(".number");
const firstoperand = document.querySelector(".first-operand");
const secondoperand = document.querySelector(".second-operand");

number.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.value == "=") {
      try {
        secondoperand.innerHTML = eval(firstoperand.innerHTML);
      } catch (error) {
        secondoperand.innerHTML = "Idiot";
        console.log(error);
      }
    } else if (item.value == "AC") {
      firstoperand.innerHTML = "";
      secondoperand.innerHTML = "";
    } else if (item.value == "Del") {
      var length = firstoperand.innerHTML.length;
      firstoperand.innerHTML = firstoperand.innerHTML.substring(0, length - 1);
    } else {
      firstoperand.innerHTML += item.value;
    }
  });
});
