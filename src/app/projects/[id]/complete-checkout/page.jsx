"use client";

import Auth_Layout from "@/layouts/Auth_Layout";
// import
import Form_Builder from "@/components/Form_Builder";
import Stipe_Payment from "@/services/Pay_With_Stripe_Button";
import {useState} from "react";
import axiosInstance from "@/services/axiosInstance";
import {apiUrls} from "@/services/apiUrls";
import {loadStripe} from "@stripe/stripe-js";

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
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUPLISH_KEY);
    const handleClick = async (values) => {
        try {
            const response = await axiosInstance.post(apiUrls.payment, {
                project_id: id,
                price: +values.amount,
            });

            // Get Stripe.js instance
            const stripe = await stripePromise;

            // Redirect to Stripe Checkout
            const {error} = await stripe.redirectToCheckout({sessionId: response.data.id});

            if (error) {
                toast.error("Stripe Checkout error:", error.message);
            }
        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    };
    return (
        <Auth_Layout className={"grid"}>
            <Form_Builder Input_List={input_list} onSubmit={handleClick} button_label="Check Out!" />
        </Auth_Layout>
    );
}
