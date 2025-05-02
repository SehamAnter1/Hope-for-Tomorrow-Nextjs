"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProfile, loginUser, logoutUser } from "@/services/authRequests";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = Cookies.get("authToken");

  const fetchUser = async () => {
    if (!token) return setLoading(false);

    try {
      const data = await getProfile(); 
      setUser(data);
    } catch (error) {
      console.error("Error fetching user", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const res = await loginUser(credentials);
    Cookies.set("authToken", res.token, { expires: 7 });
    await fetchUser();
  };

  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
