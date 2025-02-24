import React, { useState } from "react";
import "../assets/adminDashboard.css";

const UserModal = ({ onClose }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        status: "Active",
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New User Data:", userData);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Add New User</h3>
                <input type="text" name="name" placeholder="Enter Name" value={userData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Enter Email" value={userData.email} onChange={handleChange} />
                <select name="status" value={userData.status} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default UserModal;