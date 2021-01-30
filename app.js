const age = document.getElementById("age");
document.querySelector("#btn-submit").addEventListener("click", calcAge);
function calcAge() {
  console.log(`Your current age is: ${2020 - Number(age.value)}`);
}
