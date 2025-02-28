import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Users from "./pages/Users.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route should redirect to Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/books" element={<Books />} /> 
        {/* <Route path="/user-dashboard" element={<UserDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;