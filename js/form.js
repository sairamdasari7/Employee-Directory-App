const form = document.getElementById("employeeForm");
const empIdInput = document.getElementById("empId");
const editId = localStorage.getItem("editEmployeeId");

if (editId) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const emp = employees.find(e => e.id == editId);
  if (emp) {
    empIdInput.value = emp.id;
    document.getElementById("firstName").value = emp.firstName;
    document.getElementById("lastName").value = emp.lastName;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("role").value = emp.role;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const updatedEmployee = {
    id: empIdInput.value ? Number(empIdInput.value) : Date.now(),
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value,
    role: document.getElementById("role").value
  };

  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  if (editId) {
    // Update existing employee
    employees = employees.map(emp => (emp.id == editId ? updatedEmployee : emp));
  } else {
    // Add new employee
    employees.push(updatedEmployee);
  }

  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.removeItem("editEmployeeId");

  window.location.href = "index.html";
});
