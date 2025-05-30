function handleSelectChange() {
  selectElement = document.getElementById("dataSelect");
  console.log(selectElement.value);
  if (selectElement.value == "students") {
    loadStudents();
  }
  // TODO: add conditionals to call functions for video games, movies, and restaurants
}

function loadStudents() {
  fetch("/api/students")
    .then((res) => res.json())
    .then((data) => generateTableBody(data));
}

// TODO: Add more functions for loading video games, movies, and restaurants
// OR modify loadStudents to loadData and handle the request dynamically

function generateTableBody(data) {
  console.log(Object.keys(data[0]));
  tableBody = document.getElementById("tableContent");
  for (let i = 0; i < data.length; i++) {
    tableRow = document.createElement("tr");
    generateAppendCell(data[i].name, tableRow);
    generateAppendCell(data[i].major, tableRow);
    generateAppendCell(data[i].clubs.join(", "), tableRow);
    generateAppendCell(data[i].gpa, tableRow);
    tableBody.appendChild(tableRow);
  }
}

function generateAppendCell(text, parentElement) {
  childElement = document.createElement("td");
  childElement.innerHTML = text;
  parentElement.appendChild(childElement);
}

// addEventListener("DOMContentLoaded", handleContentLoaded);
