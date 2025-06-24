import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";
import { apiUrls } from "@/services/apiUrls";

// Login

export const loginUser = async (credentials) => {
  const res = await axiosInstance.post(apiUrls.login, credentials);
  console.log("res",res)
  const { access } = res.data;
  Cookies.set("authToken", access, { expires: 7, secure: true, sameSite: "Lax" });
    Cookies.set("userData", JSON.stringify(res.data), { expires: 7 });

  return res.data;
};

// Register
export const registerUser = async (data) => {
  const res = await axiosInstance.post(apiUrls.register, data);
  return res.data;
};

// Verify OTP
export const verifyOTP = async (data) => {
  const res = await axiosInstance.post(apiUrls.verifyOtp, data);
  return res.data;
};

// Resend OTP
export const resendOTP = async (email) => {
  const res = await axiosInstance.post(apiUrls.resendOtp, { email });
  return res.data;
};

// Forgot Password (send reset link or code)
export const requestPasswordReset = async (email) => {
  const res = await axiosInstance.post(apiUrls.requestReset, { email });
  return res.data;
};

// Reset Password (after token/OTP)
export const resetPassword = async (data) => {
  const res = await axiosInstance.post(apiUrls.resetPassword, data);
  return res.data;
};

// Get current user profile 
export const getProfile = async () => {
  const res = await axiosInstance.get(apiUrls.profile);
  return res.data;
};

// Logout
export const logoutUser = () => {
  Cookies.remove("authToken");
};
