function converter() {
  const euroRate = 41
  const dollarRate = 39;
  const grn = parseFloat(document.getElementById("SumInGrn").value);
  const euroValue = grn / euroRate;
  const dollarValue = grn / dollarRate;
  document.getElementById("resultInEuro").value = euroValue.toFixed(2);
  document.getElementById("resultInDollar").value = dollarValue.toFixed(2);
}

window.onload = function () {
   document.getElementById("convert").onclick = converter
};
