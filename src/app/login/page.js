"use client";

// import
import Form_Builder from "@/components/Form_Builder";
import { z } from "zod";

// schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "At least 6 characters" }),
});

// page
export default function Login() {
  
     const loginFields = [
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
        {
          name: "bio",
          label: "Bio",
          type: "textarea",
          placeholder: "Tell us about yourself",
        },
        {
          name: "role",
          label: "Role",
          type: "select",
          placeholder: "Select your role",
          options: [
            { value: "admin", label: "Admin" },
            { value: "user", label: "User" },
            { value: "guest", label: "Guest" },
          ],
        },
      ];
      
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <Form_Builder fields={loginFields} schema={loginSchema} onSubmit={handleLogin} />
    </div>
  );
}
