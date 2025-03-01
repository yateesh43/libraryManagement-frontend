import React, { useState, useEffect } from 'react';

const BookModal = ({ book, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: 'Fiction',
    status: 'Available'
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{book ? 'Edit Book' : 'Add New Book'}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              value={formData.author}
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Genre</label>
            <select
              className="form-control select-dropdown"
              value={formData.genre}
              onChange={(e) => setFormData({...formData, genre: e.target.value})}
            >
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Science Fiction</option>
              <option>Fantasy</option>
              <option>Mystery</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Status</label>
            <select
              className="form-control select-dropdown"
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option>Available</option>
              <option>Unavailable</option>
            </select>
          </div>
          
          <button type="submit" className="btn-primary">
            {book ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookModal;