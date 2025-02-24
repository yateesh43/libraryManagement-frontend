import React from 'react';
const UserModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Add New User</h3>
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
export default UserModal;