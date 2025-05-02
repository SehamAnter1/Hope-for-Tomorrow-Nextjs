"use client";

import Auth_Layout from "@/layouts/Auth_Layout";
// import
import Form_Builder from "@/components/Form_Builder";

// page
export default function Login() {
  
  const loginInputs = [
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
  
      
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <Auth_Layout>
    <Form_Builder
      Input_List={loginInputs}
      onSubmit={handleLogin}
      from="auth"
      with_forget_text
      button_label="Sign in"
      social_providers
      bottom_text="Don't have an account?"
      bottom_link="/auth/register"
      bottom_link_text="Sign up"
    />
  </Auth_Layout>
  );
}
