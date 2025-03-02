import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable"; // Import UserTable component
import "../assets/AdminDashboard.css";

const Users = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [users, setUsers] = useState([
    { name: "Goku", email: "goku@anime.com", status: "Active" },
    { name: "Luffy", email: "luffy@anime.com", status: "Inactive" },
    { name: "Naruto", email: "naruto@anime.com", status: "Active" },
    { name: "Sasuke", email: "sasuke@anime.com", status: "Inactive" },
    { name: "Ichigo", email: "ichigo@anime.com", status: "Active" },
    { name: "Levi", email: "levi@anime.com", status: "Active" },
    { name: "Eren", email: "eren@anime.com", status: "Inactive" },
    { name: "Gojo", email: "gojo@anime.com", status: "Active" },
    { name: "Light Yagami", email: "light@anime.com", status: "Inactive" },
    { name: "Tanjiro", email: "tanjiro@anime.com", status: "Active" }
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query (name, email, status)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Delete user by email
  const deleteUser = (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.email !== email));
    }
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} onSearch={setSearchQuery} />

      <div className="dashboard-main">
        <div className="dashboard-content">
          <h1>User Management</h1>
          <p>Showing {filteredUsers.length} users</p>

          {/* Search Input & Clear Button */}
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search users..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="clear-search-btn">Clear</button>
            )}
          </div>

          {/* User Table Component */}
          <UserTable users={filteredUsers} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Users;
