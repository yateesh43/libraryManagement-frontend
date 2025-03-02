import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/AdminDashboard.css";

const Users = ({ isSidebarOpen, setIsSidebarOpen }) => {
  
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} onSearch={setSearchQuery} />
      <div className="dashboard-main">
        
        <div className="dashboard-content">
          <h1>User Management</h1>

          {/* User Table */}
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>
                      <span className="delete-icon" onClick={() => deleteUser(user.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
