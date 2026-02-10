let count = 0;

function kaunto() {
  count = count + 1;
  document.getElementById("count").textContent = count;
}
const botan = document.getElementById("botan");
botan.addEventListener("click", kaunto);