"use client";

import {useState} from "react";
import Otp_Input_Field from "@/components/Otp_Input_Field";
import Auth_Layout from "@/layouts/Auth_Layout";
import Button from "@/components/Button";

export default function OTP() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[0-9]{6}$/.test(otp)) {
            setError("Enter a valid 6-digit OTP");
            return;
        }
        setError("");
        console.log("Submitted OTP:", otp);
        // Call your verification API here
    };

    return (
        <Auth_Layout>
            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-6">
                <div>
                    <label className="block mb-2 text-sm font-medium">Enter OTP</label>
                    <Otp_Input_Field value={otp} onChange={setOtp} error={error} />
                </div>
                <Button >
                    Verify OTP
                </Button>
                <p className="text-sm text-center">
                    Didn't receive the code?{" "}
                    <a href="/auth/forgot-password" className="text-primary font-medium">
                        Resend OTP
                    </a>
                </p>
            </form>
        </Auth_Layout>
    );
}
