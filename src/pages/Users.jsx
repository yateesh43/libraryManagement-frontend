import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
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

  // Delete user by email and show toast notification
  const deleteUser = (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.email !== email));
      toast.success("User deleted successfully!", {  // Added an emoji icon
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          backgroundColor: "#ff4d4d", 
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
        },
      });
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

          {/* Toast Container - Needed for Toasts to Work */}
          <ToastContainer 
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
