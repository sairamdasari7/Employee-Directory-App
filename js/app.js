function loadEmployees() {
  const stored = localStorage.getItem("employees");
  return stored ? JSON.parse(stored) : [];
}

function renderEmployees() {
  const container = document.getElementById("employeeList");
  const employees = loadEmployees();
  container.innerHTML = "";

  if (employees.length === 0) {
    container.innerHTML = "<p>No employees found.</p>";
    return;
  }

  employees.forEach(emp => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <p><strong>ID:</strong> ${emp.id}</p>
      <p><strong>Name:</strong> ${emp.firstName} ${emp.lastName}</p>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <div class="card-actions">
        <button onclick="editEmployee(${emp.id})" class="edit">Edit</button>
        <button onclick="deleteEmployee(${emp.id})" class="delete">Delete</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function editEmployee(id) {
  localStorage.setItem("editEmployeeId", id);
  window.location.href = "form.html";
}


function deleteEmployee(id) {
  let employees = loadEmployees();
  employees = employees.filter(emp => emp.id !== id);
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
}

function toggleFilterPanel() {
  document.getElementById("filterPanel").classList.toggle("hidden");
}

function applyFilters() {
  alert("Filters (simulate)");
}

function resetFilters() {
  document.getElementById("filterName").value = '';
  document.getElementById("filterDepartment").value = '';
  document.getElementById("filterRole").value = '';
  applyFilters();
}

function sortEmployees() {
  alert("Sort (simulate)");
}

function changePageSize() {
  alert("Change Page Size (simulate)");
}

window.onload = renderEmployees;
