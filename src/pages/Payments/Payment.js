import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking)
    console.log(booking.productPrice)
    return (
        <div>
            <p>Payment</p>
        </div>
    );
};

export default Payment;