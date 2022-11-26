import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { productPrice, _id, buyerName, buyerEmail
    } = booking;


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        //1
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        //1
        if (error) {
            setCardError(error.message)
        }

    }

    return (
        <>
            <p>this issi ssi</p>
            {/* //paste it from github(1) */}
            <form className='bg-white p-5' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='bg-green-500 mt-5 px-5 ' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-red-500 font-semibold mt-5'>{cardError}</p>

        </>
    );
};

export default CheckoutForm;