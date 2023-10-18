const students = [
  {
    firstName: "Philippe",
    lastName: "De Pauw - Waterschoot",
    thumbnail: "images/philippe.png",
    email: "pdp@arteveldehs.be",
  },
  {
    firstName: "Evelien",
    lastName: "Rutsaert",
    thumbnail: "images/evelien.png",
    email: "er@arteveldehs.be",
  },
  {
    firstName: "Olivier",
    lastName: "Parent",
    thumbnail: "images/olivier.png",
    email: "op@arteveldehs.be",
  },
];

const convertStudentToHTMLString = (student) => {
  return `
    <li>
      <h2>${student.firstName} ${student.lastName}</h2>
      <img src="${student.thumbnail}" alt="${student.name}" />
      <a href="mailto:${student.email}">${student.email}</a>
    </li>
  `;
};

// optie 1
let html = "";
for (const student of students) {
  html += convertStudentToHTMLString(student);
}

// optie 2
const html2 = students.map((student) => convertStudentToHTMLString(student)).join("");

const $students = document.getElementById("students");
$students.innerHTML = html;
