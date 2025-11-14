document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let student = {
        name: document.getElementById("name").value,
        father: document.getElementById("father").value,
        mother: document.getElementById("mother").value,
        dob: document.getElementById("dob").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        course: document.getElementById("course").value,
        date: new Date().toLocaleString()
    };
    let admissions = JSON.parse(localStorage.getItem("admissions")) || [];
    admissions.push(student);
    localStorage.setItem("admissions", JSON.stringify(admissions));
    alert("Admission Form Submitted Successfully ✅");
    document.getElementById("admissionForm").reset();
});