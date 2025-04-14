document.addEventListener("DOMContentLoaded", () => {
  const gradeList = document.getElementById("gradeList");

  // Retrieve students from localStorage
  const students = JSON.parse(localStorage.getItem("students")) || [];

  // Check if there are students
  if (students.length === 0) {
    gradeList.innerHTML = "<li>No student data available. Please add from the Home page.</li>";
    return;
  }

  // Display students and their grades
  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${index + 1}. ${student.name}</strong> — Age: ${student.age}, Grade: <span class="grade">${student.grade}</span>`;
    gradeList.appendChild(li);
  });
});
