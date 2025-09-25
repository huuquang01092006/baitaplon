document.addEventListener("DOMContentLoaded", () => {
  const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
  const tbody = document.querySelector("#userTable tbody");

  tbody.innerHTML = users.length
    ? users
        .map(
          (user) => `
        <tr>
          <td>${user.username}</td>
          <td>${user.phone}</td>
          <td>${user.request}</td>
        </tr>`
        )
        .join("")
    : `<tr><td colspan="3" style="text-align:center;color:#999">Chưa có người dùng nào</td></tr>`;
});
