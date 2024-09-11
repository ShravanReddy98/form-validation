import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import { useEffect } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
    isAuthenticated
      ? role === "user"
        ? navigate("/")
        : navigate("/admin")
      :role === "user"? navigate("/login"):
      navigate("/admin/login");
  }, [isAuthenticated, navigate, role]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
