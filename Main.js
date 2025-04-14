studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

    const student = { name, age, grade };

    // Save to localStorage
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    const li = document.createElement("li");
    li.textContent = `${name}, Age: ${age}, Grade: ${grade}`;
    studentList.appendChild(li);

    studentForm.reset();
});
