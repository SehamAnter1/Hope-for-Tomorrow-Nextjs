"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { loginUser, logoutUser } from "@/services/authRequests";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = Cookies.get("authToken");
  const userData = Cookies.get("userData");

  const fetchUserFromCookies = () => {
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (err) {
        console.error("Invalid user cookie:", err);
        logout();
      }
    }
    setLoading(false);
  };

  const login = async (credentials) => {
    // setUser(res.user);
  };

  const logout = () => {
    Cookies.remove("authToken");
    Cookies.remove("userData");
    setUser(null);
  };

  useEffect(() => {
    fetchUserFromCookies();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
