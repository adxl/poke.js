import React, { Suspense, useState } from "react";
import "./App.css";
import { AuthProvider } from "@hooks/auth";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Logout from "./pages/Logout";

const Login = React.lazy(() => import("@pages/Login"))
const Home = React.lazy(() => import("@pages/Home"))

function App() {
  return (
    <div className="container" id="app">
      <AuthProvider>
        <Suspense fallback={<Spinner aria-label="Chargement..." color="pink" size="xl" />}>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login/>} />
              <Route exact path="/logout" element={<Logout />} />
              <Route path="/home" element={<ProtectedRoutes el={Home} />} />
            </Routes>
          </Router>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
