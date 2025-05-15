"use client";

import Auth_Layout from "@/layouts/Auth_Layout";
import Form_Builder from "@/components/Form_Builder";

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

    const handleRegister = (values) => {
        console.log(values);
    };

    return (
        <Auth_Layout>
            <Form_Builder
                Input_List={registerInputs}
                onSubmit={handleRegister}
                from="auth"
                button_label="Sign up"
                bottom_text="Already have an account?"
                bottom_link="/auth/login"
                bottom_link_text="Sign in"
            />
        </Auth_Layout>
    );
}
