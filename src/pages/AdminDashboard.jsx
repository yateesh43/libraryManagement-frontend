import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/AdminDashboard.css";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="dashboard-main">
        <Navbar isSidebarOpen={isSidebarOpen} />
        <div className="dashboard-content">
          <h1>Welcome, Admin</h1>
          <div className="dashboard-cards">
            <div className="card">Total Users: 150</div>
            <div className="card">Total Genres: 48</div>
            <div className="card">Books Bought: 500</div>
            <div className="card">Books Rented: 50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
