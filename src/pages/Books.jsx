import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/AdminDashboard.css";

const Books = ({ isSidebarOpen, setIsSidebarOpen }) => {
  
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Moby Dick", author: "Herman Melville" },
  ];

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} />
      <div className="dashboard-main">
        
        <div className="dashboard-content">
          <h1>Books List</h1>
          <table className="books-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Books;
