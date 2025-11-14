function loadRecords() {
    let admissions = JSON.parse(localStorage.getItem("admissions")) || [];
    let tbody = document.querySelector("#recordsTable tbody");
    let search = document.getElementById("searchInput").value.toLowerCase();
    let courseFilter = document.getElementById("courseFilter").value;
    tbody.innerHTML = "";
    let filtered = admissions.filter(student => {
        let matchesSearch = student.name.toLowerCase().includes(search) ||
                            student.mobile.toLowerCase().includes(search) ||
                            student.email.toLowerCase().includes(search);
        let matchesCourse = courseFilter === "" || student.course === courseFilter;
        return matchesSearch && matchesCourse;
    });
    if (filtered.length === 0) {
        tbody.innerHTML = "<tr><td colspan='10' style='text-align:center;'>No records found</td></tr>";
        return;
    }
    filtered.forEach((student, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.father}</td>
            <td>${student.mother}</td>
            <td>${student.dob}</td>
            <td>${student.mobile}</td>
            <td>${student.email}</td>
            <td>${student.address}</td>
            <td>${student.course}</td>
            <td>${student.date}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}
document.getElementById("searchInput").addEventListener("input", loadRecords);
document.getElementById("courseFilter").addEventListener("change", loadRecords);
document.getElementById("downloadBtn").addEventListener("click", function () {
    let table = document.getElementById("recordsTable");
    let rows = table.querySelectorAll("tr");
    let csv = [];
    rows.forEach(row => {
        let cols = row.querySelectorAll("th, td");
        let data = [];
        cols.forEach(col => data.push(col.innerText));
        csv.push(data.join(","));
    });
    let csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
    let link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "admissions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
window.onload = loadRecords;