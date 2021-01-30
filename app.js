// input
const age = document.getElementById("age");
const output = document.getElementById("output");
document.querySelector("#btn-submit").addEventListener("click", calcAge);

// processing and output
function calcAge() {
  console.log(`Your current age is: ${2020 - Number(age.value)}`);
  output.innerText = `Your current age is: ${2020 - Number(age.value)}`;
}
