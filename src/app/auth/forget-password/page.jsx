"use client";

import Form_Builder from "@/components/Form_Builder";
import Auth_Layout from "@/layouts/Auth_Layout";

export default function Forget_Password() {
  const forgotPasswordInputs = [
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
  ];

  const handleForgotPassword = (values) => {
    console.log(values);
  };

  return (
    <Auth_Layout>
      <Form_Builder
        Input_List={forgotPasswordInputs}
        onSubmit={handleForgotPassword}
        from="auth"
        button_label="Submit"
        bottom_text="Remember your password?"
        bottom_link="/auth/login"
        bottom_link_text="Back to Login"
      />
    </Auth_Layout>
  );
}
