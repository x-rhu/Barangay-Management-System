// Fetch users from PHP backend
async function loadUsers() {
    try {
        const response = await fetch("fetch_users.php"); // Calls PHP script
        const users = await response.json();

        const tableBody = document.getElementById("userTableBody");
        tableBody.innerHTML = ""; // Clear existing rows

        if (users.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center;">No users found</td></tr>`;
            return;
        }

        // Loop through users and generate table rows
        users.forEach(user => {
            let fullName = `${user.firstName} ${user.middleName ? user.middleName + ' ' : ''}${user.lastName}`.trim();

            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${fullName}</td>
                <td>${user.gender}</td>
                <td>${user.address}</td>
                <td>${user.mobile}</td>
                <td>${user.status}</td>
                <td>
                    <button class="view-btn" onclick="viewUser(${user.id})">View</button>
                    <button class="edit-btn" onclick="editUser(${user.id})">Edit</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// View and Edit Button Actions
function viewUser(userId) {
    alert(`Viewing user with ID: ${userId}`);
}

function editUser(userId) {
    alert(`Editing user with ID: ${userId}`);
}

// Load users when page loads
window.onload = loadUsers;
