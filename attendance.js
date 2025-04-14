// attendance.js
// Simulate click on student list to mark attendance

document.addEventListener('DOMContentLoaded', () => {
  const attendanceList = document.getElementById('attendanceList');
  const students = JSON.parse(localStorage.getItem('students')) || [];

  students.forEach(student => {
    const li = document.createElement('li');
    li.textContent = `${student.name} - Present`;
    attendanceList.appendChild(li);
  });
});
