const com_choice = Math.floor(Math.random() * 10 + 1);

console.log(com_choice);

let number_of_guess = 0;

document.getElementById("submitButton").onclick = function () {
  console.log("Clicked");
  let chosen_value = document.getElementById("inputField").value;
  console.log(chosen_value);

  if (chosen_value == com_choice) {
    alert(
      `${com_choice} is the guessed number. It took you ${++number_of_guess} guesses`
    );
  } else if (chosen_value < com_choice) {
    alert(`Chosen value is small than correct value`);
    number_of_guess++;
  } else if (chosen_value > com_choice) {
    alert(`Chosen value is bigger than correct value`);
    number_of_guess++;
  }
};
