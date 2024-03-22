import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./pages/header";
import AdminAdd from "./Admin/AdminAdd";
import LoadingScreen from "./pages/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      axios
        .get(`https://cv-e0zq.onrender.com/api/user/${email}`)
        .then((response) => {
          setUserProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {userProfile && userProfile.Admin ? (
            <Route path="/admin/add" element={<AdminAdd />} />
          ) : null}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
