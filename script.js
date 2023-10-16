const add = document.getElementById("add");
const add2 = document.getElementById("add2");
const button = document.getElementById("button");

function performOperation(x, y) {
  return parseFloat(x.value) + parseFloat(y.value);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (add != NaN || add2 != NaN) {
    let result = document.createElement("p");
    result.textContent = `Result is: ${performOperation(add, add2)}`;
    document.body.appendChild(result);
    add.value = "";
    add2.value = "";
  }
});
