import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../assets/adminDashboard.css";

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`admin-dashboard ${sidebarOpen ? "sidebar-open" : ""}`}>
            {/* Navbar */}
            <div className="navbar">
                <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <h1>Welcome, Admin</h1>
            </div>

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} />

            {/* Main Content */}
            <div className="main">
                <h2>Welcome, Admin</h2>
                <img src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png" alt="Admin" />
            </div>
        </div>
    );
};

export default AdminDashboard;
