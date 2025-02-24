import React, { useState } from "react";
import "../assets/adminDashboard.css";

const BookModal = ({ onClose }) => {
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        genre: "",
        status: "Available",
    });

    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Book Data:", bookData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Add New Book</h3>
                <input type="text" name="title" placeholder="Enter Book Title" value={bookData.title} onChange={handleChange} />
                <input type="text" name="author" placeholder="Enter Book Author" value={bookData.author} onChange={handleChange} />
                <select name="genre" value={bookData.genre} onChange={handleChange}>
                    <option value="">Choose Genre</option>
                    <option value="Education">Education</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Biography">Biography</option>
                </select>
                <select name="status" value={bookData.status} onChange={handleChange}>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BookModal;
