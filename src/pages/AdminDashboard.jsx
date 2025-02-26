import React, { useState } from 'react';
import '../assets/AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <ul>
                    <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</li>
                    <li className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>Users</li>
                    <li className={activeTab === 'books' ? 'active' : ''} onClick={() => setActiveTab('books')}>Books</li>
                    <li className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>Reports</li>
                    <li onClick={() => console.log('Logout')}>Logout</li>
                </ul>
            </div>
            <div className="content">
                <h1>Welcome, Admin</h1>
                {activeTab === 'dashboard' && (
                    <div className="card-container">
                        <div className="card">Total Users <span>150</span></div>
                        <div className="card">Total Genres <span>48</span></div>
                        <div className="card">Books Bought (December) <span>500</span></div>
                        <div className="card">Books Rented (December) <span>50</span></div>
                    </div>
                )}
                {activeTab === 'users' && (
                    <div>
                        <h2>User List</h2>
                        <button onClick={toggleModal}>Add New User</button>
                        {/* User Table */}
                        {/* Add User Modal */}
                        {modalOpen && <div className="modal">Add User Form</div>}
                    </div>
                )}
                {activeTab === 'books' && (
                    <div>
                        <h2>Books List</h2>
                        <button onClick={toggleModal}>Add New Book</button>
                        {/* Books Table */}
                        {/* Add Book Modal */}
                        {modalOpen && <div className="modal">Add Book Form</div>}
                    </div>
                )}
                {/* Additional Tab Content */}
            </div>
        </div>
    );
};

export default AdminDashboard;