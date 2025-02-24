import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardStats from "../components/DashboardStats";
import UserModal from "../components/UserModal";
import BookModal from "../components/BookModal";
import "../assets/adminDashboard.css";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [showUserModal, setShowUserModal] = useState(false);
    const [showBookModal, setShowBookModal] = useState(false);

    return (
        <div className="admin-dashboard">
            <Sidebar setActiveTab={setActiveTab} />
            <div className="main">
                <div className="header">
                    <h1>Welcome, Admin</h1>
                    <div className="profile">
                        <span>Admin Name</span>
                        <img src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png" alt="Profile" />
                    </div>
                </div>
                <div className="content">
                    {activeTab === "dashboard" && <DashboardStats />}
                    {activeTab === "users" && <button onClick={() => setShowUserModal(true)}>Add User</button>}
                    {activeTab === "books" && <button onClick={() => setShowBookModal(true)}>Add Book</button>}
                    {showUserModal && <UserModal onClose={() => setShowUserModal(false)} />}
                    {showBookModal && <BookModal onClose={() => setShowBookModal(false)} />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
