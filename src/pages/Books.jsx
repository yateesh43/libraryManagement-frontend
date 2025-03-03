import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BookModal from "../components/BookModal";
import "../assets/AdminDashboard.css";

const Books = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", status: "Available" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", status: "Unavailable" },
    { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", status: "Available" },
    { id: 4, title: "Moby Dick", author: "Herman Melville", genre: "Classic", status: "Unavailable" },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", status: "Available" },
    { id: 6, title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery", status: "Unavailable" },
    { id: 7, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science Fiction", status: "Available" },
    { id: 8, title: "Steve Jobs", author: "Walter Isaacson", genre: "Biography", status: "Available" },
    { id: 9, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Non-Fiction", status: "Available" },
    { id: 10, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", status: "Unavailable" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (book = null) => {
    setCurrentBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addOrUpdateBook = (book) => {
    if (book.id) {
      setBooks((prevBooks) => prevBooks.map((b) => (b.id === book.id ? book : b)));
    } else {
      const newBook = { ...book, id: books.length + 1 };
      setBooks([...books, newBook]);
    }
  };

  const deleteBook = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      const updatedBooks = books.filter((book) => book.id !== id).map((book, index) => ({ ...book, id: index + 1 }));
      setBooks(updatedBooks);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} />
      <div className="dashboard-main">
        <div className="dashboard-content">
          <h1>Books List</h1>
          <p>Showing {filteredBooks.length} books</p>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search books..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="clear-search-btn">Clear</button>
            )}
          </div>
          
          <button className="add-book-btn" onClick={() => openModal()}>Add New Book</button>
          <table className="books-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.status}</td>
                  <td>
                    <FaEdit className="action-icon edit-icon" title="Edit" onClick={() => openModal(book)} />
                    <FaTrash className="action-icon delete-icon" title="Delete" onClick={() => deleteBook(book.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <BookModal isOpen={isModalOpen} onClose={closeModal} onSave={addOrUpdateBook} bookData={currentBook} />
    </div>
  );
};

export default Books;
