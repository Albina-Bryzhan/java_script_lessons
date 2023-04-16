function getRandomNum(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function buildTable(rows, columns) {
  const table = document.createElement("table");
  let t = document.querySelector(".text");
  t.after(table)
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    table.append(row);
    for (let j = 0; j < columns; j++) {
      const column = document.createElement("td");
      column.innerHTML = getRandomNum(1, 99);
      row.append(column);
    }
  }
}

buildTable(3, 4);
