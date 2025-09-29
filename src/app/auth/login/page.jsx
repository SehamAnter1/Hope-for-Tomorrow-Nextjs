"use client";

import Auth_Layout from "@/layouts/Auth_Layout";
import Form_Builder from "@/components/Form_Builder";
import { loginUser } from "@/services/authRequests";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const registerInputs = [
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
  ];
  const { user, setUser } = useAuth();
  const handleLogin = async (values) => {
    try {
      const data = await loginUser(values);
      setUser(data);
      redirect("/home");

      console.log("user", user, "data", data);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <Auth_Layout>
      <div className="grid gap-[10px]">
        <Form_Builder
          Input_List={registerInputs}
          onSubmit={handleLogin}
          from="auth"
          button_label="Login"
          bottom_text="Already have an account?"
          bottom_link="/auth/login"
          bottom_link_text="Sign in"
        />
        <h2 className={"font-semibold text-[14px] text-gray-500"} >
          Dont's have account?
          <Link className={"text-primary"} href="/auth/register"> Signup</Link>
        </h2>
      </div>
    </Auth_Layout>
  );
}
