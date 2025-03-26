document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm");
  const userTable = document.getElementById("userTable");
  const resetButton = document.getElementById("resetButton");

  if (userForm) {
    userForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let newUser = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      userForm.reset();
      alert("User Registered Successfully!");
    });
  }

  if (userTable) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach((user) => {
      let row = userTable.insertRow();
      row.insertCell(0).textContent = user.name;
      row.insertCell(1).textContent = user.email;
      row.insertCell(2).textContent = user.contact;
      row.insertCell(3).textContent = user.address;
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      localStorage.removeItem("users");
      alert("All user data has been cleared!");
      location.reload();
    });
  }
});
