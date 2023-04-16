
function getTotalPrice() {
  const typeTransportPrice = parseFloat(
    document.querySelector(".transport__type").value
  );

  const food = document.getElementsByName("food");
  let foodPriceSum = 0;
  for (const el of food) {
    if (el.checked) foodPriceSum += parseFloat(el.value);
  }

  // Я розумію,що в радіо баттоні лише одна кнопка може бути checked, 
//   але як це перевірити окрім цього варіанту не знаю
  const guide = document.getElementsByName("guides");
  let guidePrice = 0;
  for (const el of guide) {
    if (el.checked) guidePrice += parseFloat(el.value);
  }

  const total = typeTransportPrice + guidePrice + foodPriceSum;
  document.getElementById("result").innerText = total;
}

window.onload = function () {
  document.getElementsByTagName("button")[0].onclick = getTotalPrice;
};
