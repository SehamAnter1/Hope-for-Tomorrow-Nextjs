"use client";

import Auth_Layout from "@/layouts/Auth_Layout";
// import
import Form_Builder from "@/components/Form_Builder";
import Stipe_Payment from "@/services/Pay_With_Stripe_Button";
import {useState} from "react";

// page
export default function Page({params}) {
    const {id} = params;
    const input_list = [
        {
            id: 1,
            type: "input",
            fieldName: "amount",
            inputType: "number",
            label: "amount",
            placeholder: "Amount",
            validator: {
                required: "Required",
            },
        },
        {
            id: 2,
            type: "textarea",
            fieldName: "message",
            inputType: "text",
            label: "Donation Message",
            placeholder: "Donation Message",
            validator: {
                required: false,
            },
        },
    ];
    const [watchedData, setwatchedData] = useState();
console.log("watchedData",watchedData)
    const handleLogin = (values) => {
        console.log(values);
    };
    return (
        <Auth_Layout className={"grid"}>
            <Form_Builder
                Input_List={input_list}
                onSubmit={handleLogin}
                from="auth"
                with_forget_text
                button_label="Sign in"
                watchedData={watchedData}
                setwatchedData={setwatchedData}
                bottom_link_text="Sign up"
            />
            <Stipe_Payment project_id={id} price={+watchedData?.amount} />
        </Auth_Layout>
    );
}
