function sum() {
  const num1 = parseFloat(document.getElementById("Your-first-number").value);
  const num2 = parseFloat(document.getElementById("Your-second-number").value);
  const sum = num1 + num2;
  document.getElementById("result").value = sum;
}
function difference() {
  const num1 = parseFloat(document.getElementById("Your-first-number").value);
  const num2 = parseFloat(document.getElementById("Your-second-number").value);
  const difference = num1 - num2;
  document.getElementById("result").value = difference;
}
function product() {
  const num1 = parseFloat(document.getElementById("Your-first-number").value);
  const num2 = parseFloat(document.getElementById("Your-second-number").value);
  const product = num1 * num2;
  document.getElementById("result").value = product;
}
function devided() {
  const num1 = parseFloat(document.getElementById("Your-first-number").value);
  const num2 = parseFloat(document.getElementById("Your-second-number").value);
  const devided = num1 / num2;
  document.getElementById("result").value = devided.toFixed(2);
}
window.onload = function () {
  document.getElementById("sum").onclick = sum;
  document.getElementById("difference").onclick = difference;
  document.getElementById("product").onclick = product;
  document.getElementById("devided").onclick = devided;
};