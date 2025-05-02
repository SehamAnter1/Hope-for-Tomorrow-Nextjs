import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";

export const handleSubscribe = async (data) => {
  try {
    const response = await axiosInstance.post(`api/subscribe/`, {
      email: data.email,
    });
    if(response.status===200||response.status===201){
        console.log("response",response)
        toast.success("Subscription successful!");
    }
    return response.data;

  } catch (error) {
    console.error("Subscription error:", error);
    toast.error(`Error: ${error.response?.data?.message || error.message}`);
    throw error; 
  }
};
