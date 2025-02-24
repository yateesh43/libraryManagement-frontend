import React from 'react';
const BookModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Add New Book</h3>
                <input type="text" placeholder="Enter Book Title" />
                <input type="text" placeholder="Enter Book Author" />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
export default BookModal;