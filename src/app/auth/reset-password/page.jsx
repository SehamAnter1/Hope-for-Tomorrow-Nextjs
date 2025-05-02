"use client";

import Form_Builder from "@/components/Form_Builder";
import Auth_Layout from "@/layouts/Auth_Layout";

export default function Reset_Password() {
  const resetPasswordInputs = [
    {
      id: 1,
      type: "input",
      fieldName: "password",
      inputType: "password",
      label: "New Password",
      placeholder: "Enter at least 8+ characters",
      validator: {
        required: "Required",
      },
    },
    {
      id: 2,
      type: "input",
      fieldName: "confirmPassword",
      inputType: "password",
      label: "Confirm New Password",
      placeholder: "Re-enter new password",
      validator: {
        required: "Required",
        validate: (value, { password }) => password === value || "Passwords don't match",
      },
    },
  ];

  const handleResetPassword = (values) => {
    console.log(values);
  };

  return (
    <Auth_Layout>
      <Form_Builder
        Input_List={resetPasswordInputs}
        onSubmit={handleResetPassword}
        from="auth"
        button_label="Reset Password"
        bottom_text="Remember your password?"
        bottom_link="/auth/login"
        bottom_link_text="Back to Login"
      />
    </Auth_Layout>
  );
}
