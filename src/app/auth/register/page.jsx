"use client";

import Auth_Layout from "@/layouts/Auth_Layout";
import Form_Builder from "@/components/Form_Builder";
import axiosInstance from "@/services/axiosInstance";
import { apiUrls } from "@/services/apiUrls";
import { logAndDisplayErrors } from "@/utilis/helpers";
import toast from "react-hot-toast";
import { registerUser } from "@/services/authRequests";
import Link from "next/link";

export default function Register() {
  const registerInputs = [
    {
      id: 1,
      type: "input",
      fieldName: "first_name",
      inputType: "input",
      label: "First Name",
      placeholder: "Seham",
      validator: {
        required: "Required",
      },
    },
    {
      id: 1,
      type: "input",
      fieldName: "last_name",
      inputType: "text",
      label: "Last Name",
      placeholder: "Anter",
      validator: {
        required: "Required",
      },
    },
    {
      id: 1,
      type: "input",
      fieldName: "email",
      inputType: "email",
      label: "Email",
      placeholder: "example.email@gmail.com",
      validator: {
        required: "Required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email",
        },
      },
    },
    {
      id: 2,
      type: "input",
      fieldName: "password",
      inputType: "password",
      label: "Password",
      placeholder: "Enter at least 8+ characters",
      validator: {
        required: "Required",
      },
    },
    {
      id: 3,
      type: "input",
      fieldName: "confirmPassword",
      inputType: "password",
      label: "Confirm Password",
      placeholder: "Re-enter password",
      validator: {
        required: "Required",
        validate: (value, { password }) => password === value || "Passwords don't match",
      },
    },
  ];

  const handleRegister = async (values) => {
   await registerUser(values)
  };

  return (
    <Auth_Layout>
      <div className="grid gap-[10px]">
      <Form_Builder
        Input_List={registerInputs}
        onSubmit={handleRegister}
        from="auth"
        button_label="Sign up"
        bottom_text="Already have an account?"
        bottom_link="/auth/login"
        bottom_link_text="Sign in"
      />
      
        <h2 className={"font-semibold text-[14px] text-gray-500"} >
                Have an account?
                <Link className={"text-primary"} href="/auth/login"> Login</Link>
              </h2>
            </div>
    </Auth_Layout>
  );
}
