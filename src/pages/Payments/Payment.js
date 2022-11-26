import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Loader/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    console.log(booking)
    console.log(booking.productPrice)
    const { productName, productPrice } = booking;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl">Book Name: {productName}</h3>
            <p className="text-xl">Total Price: {productPrice}</p>
            <div className='border-2  p-5 m-20 ' >
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;