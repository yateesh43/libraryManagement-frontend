import React from "react";
import "../assets/adminDashboard.css";

const Sidebar = ({ setActiveTab }) => {
    return (
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <button onClick={() => setActiveTab("dashboard")} className="sidebar-btn">Dashboard</button>
            <button onClick={() => setActiveTab("users")} className="sidebar-btn">Users</button>
            <button onClick={() => setActiveTab("books")} className="sidebar-btn">Books</button>
            <button className="sidebar-btn">Reports</button>
            <button className="sidebar-btn">Logout</button>
        </div>
    );
};

export default Sidebar;
