const student = {
  firstName: "Michael",
  lastName: "Vanderpoorten",
  gender: 0,
  birthDay: 705535200000,
  courses: [
    {
      name: "Computer Systems",
      lecturers: ["Adriaan Glibert", "Claire Geeraerts"],
    },
    {
      name: "Programming 1",
      lecturers: ["Michael Vanderpoorten", "Philippe De Pauw Waterschoot"],
    },
    {
      name: "Web Design",
      lecturers: ["Wachem Huyge", "Evelien Rutsaert"],
    },
  ],
};

function generateStringForGender(genderCode) {
  /*
  andere optie met if
  if (genderCode === 0) {
    return "male";
  } else if (genderCode === 1) {
    return "female";
  } else {
    return "X";
  } */

  switch (genderCode) {
    case 0:
      return "male";
    case 1:
      return "female";
    default:
      return "X";
  }
}

function generateStringForLecturers(lecturers) {
  return lecturers.join(", ");
}

function generateStringForCourses(courses) {
  let output = "";
  for (const course of courses) {
    output += `
    Course: ${course.name}
    Lecturers: ${generateStringForLecturers(course.lecturers)}
    ------------------------------------------------`;
  }
  return output;
}

function generateStringForCoursesAlt(courses) {
  return courses.map((course) => {
    return `
    Course: ${course.name}
    Lecturers: ${generateStringForLecturers(course.lecturers)}`;
  }).join(`
    ------------------------------------------------`);
}

function generateStringForStudent(student) {
  return `
    ======================================================
    |                STUDENT INFORMATION                 |
    ======================================================
    PERSONAL
    ======================================================
    Name: ${student.firstName} ${student.lastName}
    Gender: ${generateStringForGender(student.gender)}
    Day of birth: ${new Date(student.birthDay).toLocaleString()}
    ======================================================
    COURSES
    ======================================================
    ${generateStringForCoursesAlt(student.courses)}
    ======================================================
  `;
}

const template = generateStringForStudent(student);
console.log(template);
