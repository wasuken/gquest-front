import {
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  useNavigate,
  NavLink,
} from "react-router-dom";
import React, { useContext, useState } from "react";
import axios from "axios";

import {useAuth} from './hooks/auth'

import NoMatch from "./containers/NoMatch";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import Navigation from "./containers/Navigation";
import AuthProvider from "./contexts/auth";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navigation />

        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }
  return children;
};

export default App;
