"use client";
import {loadStripe} from "@stripe/stripe-js";
import Button from "@/components/Button";
import axiosInstance from "./axiosInstance";
import toast from "react-hot-toast";
import {apiUrls} from "./apiUrls";
export default function Stipe_Payment({project_id, price}) {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUPLISH_KEY);
    const handleClick = async () => {
        try {
            const response = await axiosInstance.post(apiUrls.payment, {
                project_id: project_id,
                price: price,
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
