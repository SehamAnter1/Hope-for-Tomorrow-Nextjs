"use client";
import OtpInput from "react-otp-input";

export default function Otp_Input_Field({value, onChange, error}) {
    return (
        <div className="flex flex-col gap-2">
             <OtpInput
        value={value}
        onChange={onChange}
        numInputs={6}
        renderInput={(props) => (
          <input
            {...props}
            className="!w-12 !h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        )}
        shouldAutoFocus
        containerStyle="flex justify-between gap-2"
      />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
