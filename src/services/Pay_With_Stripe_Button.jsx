"use client";
import {loadStripe} from "@stripe/stripe-js";
import Button from "@/components/Button";
import axiosInstance from "./axiosInstance";
import toast from "react-hot-toast";
export default function Stipe_Payment() {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUPLISH_KEY);
    const handleClick = async () => {
        try {
            const response = await axiosInstance.post(`api/payment/`, {
                project_id: 8,
                price: 50,
            });

            const {id} = response.data;

            // Get Stripe.js instance
            const stripe = await stripePromise;

            // Redirect to Stripe Checkout
            const {error} = await stripe.redirectToCheckout({sessionId: id});

            if (error) {
                toast.error("Stripe Checkout error:", error.message);
            }
        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    };

    return (
            <Button className onClick={handleClick}>
                Checkout
            </Button>
    );
}
