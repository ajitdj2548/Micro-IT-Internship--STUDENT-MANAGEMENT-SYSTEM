// student.js
document.addEventListener('DOMContentLoaded', () => {
    const studentList = document.getElementById('studentList');
    const addStudentForm = document.getElementById('addStudentForm');
    const studentNameInput = document.getElementById('studentName');
    const studentAgeInput = document.getElementById('studentAge');
    const studentGradeInput = document.getElementById('studentGrade');
    
    // Load stored students from localStorage
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];

    // Render stored students on page load
    storedStudents.forEach(student => addStudentToDOM(student));

    // Event listener for the add student form
    addStudentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newStudent = {
            name: studentNameInput.value.trim(),
            age: studentAgeInput.value.trim(),
            grade: studentGradeInput.value.trim(),
        };
        
        if (newStudent.name && newStudent.age && newStudent.grade) {
            storedStudents.push(newStudent); // Add new student to array
            localStorage.setItem('students', JSON.stringify(storedStudents)); // Update localStorage
            addStudentToDOM(newStudent); // Add new student to DOM
            addStudentForm.reset(); // Reset the form
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Function to add a student to the DOM
    function addStudentToDOM(student) {
        const li = document.createElement('li');
        li.classList.add('student-item');
        li.innerHTML = `
            <strong>${student.name}</strong> - Age: ${student.age} - Grade: ${student.grade}
            <button class="edit-btn" onclick="editStudent(this, '${student.name}')">Edit</button>
            <button class="remove-btn" onclick="removeStudent(this, '${student.name}')">Remove</button>
        `;
        studentList.appendChild(li);
    }

    // Edit student functionality
    window.editStudent = function(button, name) {
        const studentIndex = storedStudents.findIndex(s => s.name === name);
        if (studentIndex !== -1) {
            const student = storedStudents[studentIndex];
            studentNameInput.value = student.name;
            studentAgeInput.value = student.age;
            studentGradeInput.value = student.grade;

            // Remove student from localStorage and DOM before editing
            removeStudent(button, name);
            studentList.removeChild(button.parentElement);
        }
    };

    // Remove student from DOM and localStorage
    window.removeStudent = function(button, name) {
        const studentIndex = storedStudents.findIndex(s => s.name === name);
        if (studentIndex !== -1) {
            storedStudents.splice(studentIndex, 1); // Remove student from array
            localStorage.setItem('students', JSON.stringify(storedStudents)); // Update localStorage
            button.parentElement.remove(); // Remove student from DOM
        }
    };
});
