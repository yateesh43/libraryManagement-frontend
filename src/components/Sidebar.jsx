import React from "react";
import "../assets/adminDashboard.css";

const Sidebar = ({ activeItem, setActiveItem, sidebarOpen }) => {
    const menuItems = [
        { name: "Dashboard", icon: "fa-solid fa-chart-line" },
        { name: "Users", icon: "fa-solid fa-users" },
        { name: "Books", icon: "fa-solid fa-book" },
        { name: "Reports", icon: "fa-solid fa-file-alt" },
        { name: "Logout", icon: "fa-solid fa-sign-out-alt" },
    ];
    
    return (
        <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
            <h2>Admin Dashboard</h2>
            {menuItems.map((item) => (
                <div 
                    key={item.name} 
                    className={`sidebar-item ${activeItem === item.name ? "active" : ""}`}
                    onClick={() => setActiveItem(item.name)}
                >
                    <i className={item.icon}></i>
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
