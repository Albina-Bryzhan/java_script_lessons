function buildTable() {
   const scoreNumber = parseInt(document.querySelector(".form__input").value);
  const table = document.createElement("table");
   document.getElementById("getTable").after(table)
  for (let i = 0; i < scoreNumber; i++) {
    const row = document.createElement("tr");
    table.append(row);
     const column = document.createElement("td");
     row.append(column);
     const inp = document.createElement("input");
     inp.classList.add("input_table");
     column.append(inp);
  }
}
function getResult() {
  let inputs = document.getElementsByClassName("input_table");
  let sum = 0
  for (let i = 0; i < inputs.length; i++) {
    sum += parseInt(inputs[i].value)
  }
   let averageScore = sum / inputs.length;
   let div = document.createElement("div");
   div.innerHTML = `Average Score: ${averageScore.toFixed(2)}`;
   document.getElementById('getSum').after(div)
}

document.getElementById("getTable").onclick = buildTable;

document.getElementById("getSum").onclick = getResult;
