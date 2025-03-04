import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Books from "./pages/Books";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Reports from "./pages/Reports";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  
  return (
    <div className="admin-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navbar isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="dashboard" element={<AdminDashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="users" element={<Users isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="books" element={<Books isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="reports" element={<Reports isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </div>
  );
};

export default App;
