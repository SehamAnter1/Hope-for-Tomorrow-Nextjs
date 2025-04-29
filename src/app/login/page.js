"use client";

// import
import Form_Builder from "@/components/Form_Builder";

// page
export default function Login() {
  
    const Input_List = [
        {
            id: 2,
            type: "input",
            fieldName: "email",
            inputType: "email",
            // icon: email_icon,
            label: "email",
            placeholder: "enter_email",
            validator: {
                required: "This field is required",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                },
            },
        },
        {
            id: 3,
            type: "input",
            // icon: password_icon,
            fieldName: "password",
            inputType: "password",
            label: "password",
            placeholder: "enter_password",
            validator: {
                required: "This field is required",
            },
        },
    ];
      
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <Form_Builder 
                    Input_List={Input_List}
                    onSubmit={handleLogin}
                    from="auth"
                    // btn_to={`/auth/${role}/profile`}
                    with_forget_text={true}
                    button_label="login"
                />
    </div>
  );
}
