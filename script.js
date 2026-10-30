let students = [
  { name: "Ali", dept: "CS", age: 20 },
  { name: "Sara", dept: "SE", age: 21 },
  { name: "Ahmed", dept: "CS", age: 22 },
  { name: "Fatima", dept: "IT", age: 20 },
  { name: "Hassan", dept: "SE", age: 23 }
];

let cardsRow = document.getElementById("cardsRow");
let searchInput = document.getElementById("searchInput");
let noResult = document.getElementById("noResult");

// Render any list of students as Bootstrap cards, using map().
function render(list) {
  cardsRow.innerHTML = list.map(function (student) {
    return '<div class="col-md-4">' +
      '<div class="student-card">' +
      '<h5>' + student.name + '</h5>' +
      '<p>Department: ' + student.dept + '</p>' +
      '<p>Age: ' + student.age + '</p>' +
      '</div>' +
      '</div>';
  }).join("");

  if (list.length === 0) {
    noResult.classList.remove("d-none");
  } else {
    noResult.classList.add("d-none");
  }
}

// Search: filter() keeps only students whose name includes the typed text.
// toLowerCase() makes the search case-insensitive.
searchInput.addEventListener("input", function () {
  let text = searchInput.value.toLowerCase();
  let filtered = students.filter(function (student) {
    return student.name.toLowerCase().includes(text);
  });
  render(filtered);
});

// First load: show all students.
render(students);
