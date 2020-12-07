// Selecting Elements

const heightInput = document.querySelector(".height");
const weightInput = document.querySelector(".weight");
const btnCalculate = document.querySelector(".calculate");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

// Functions
// Function for adding and removing hidden class from reset and btnCalculate
const btnReset = function () {
  reset.classList.remove("hidden");
  btnCalculate.classList.add("hidden");
};
// Function to display result for false input
const falseInput = function () {
  result.textContent = `Please enter the valid input`;
  btnReset();
};

// Adding hidden class to reset button
reset.classList.add("hidden");

// Displaying results
btnCalculate.addEventListener("click", function () {
  // Calculating BMI
  let BMI = ((weightInput.value / heightInput.value ** 2) * 10000).toFixed(2);

  //   Checking the false input
  if (weightInput.value === "" || weightInput.value < 0) {
    falseInput();
  } else if (heightInput.value === "" || heightInput.value < 0) {
    falseInput();
  }
  // Checking BMI Range and displaying Input
  else if (BMI < 18.6) {
    result.textContent = `Your BMI is "${BMI}" (You're underweight as your BMI is less than "18.6")`;
    btnReset();
  } else if (BMI > 24.9) {
    result.textContent = `Your BMI is "${BMI}" (You're overweight as your BMI is greater than "24.9")`;
    btnReset();
  } else {
    result.textContent = `Your BMI is "${BMI}" (You've normal range BMI as your BMI is between "18.6 - 24.9")`;
    btnReset();
  }
});

// Reset Button Functionality

reset.addEventListener("click", function () {
  reset.classList.add("hidden");
  btnCalculate.classList.remove("hidden");
  result.textContent = "";
  heightInput.value = "";
  weightInput.value = "";
});
