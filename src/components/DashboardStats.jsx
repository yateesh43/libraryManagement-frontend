import React from "react";
import "../assets/adminDashboard.css";

const DashboardStats = () => {
    return (
        <div className="dashboard-container">
            <div className="stats-card"> <h3>Total Users</h3> <p>150</p> </div>
            <div className="stats-card"> <h3>Total Genres</h3> <p>48</p> </div>
            <div className="stats-card"> <h3>Books Buyed (December)</h3> <p>500</p> </div>
            <div className="stats-card"> <h3>Books Rented (December)</h3> <p>50</p> </div>
        </div>
    );
};

export default DashboardStats;

