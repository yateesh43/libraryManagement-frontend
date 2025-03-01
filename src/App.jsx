import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Users from "./pages/Users.jsx";
import Books from "./pages/Books.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<AdminDashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
        />
        <Route
          path="/users"
          element={<Users isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
        />
        <Route
          path="/books"
          element={<Books isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
        />
      </Routes>
    </Router>
  );
}

export default App;