import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSucess] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const { productPrice, _id, buyerName, buyerEmail, sellerPostId
    } = booking;



    //2(after creating api from backend)
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://used-book-store-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }
        setSucess('')
        setIsLoading(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return
        }



        if (paymentIntent.status === "succeeded") {

            //store payment data to the database
            const payment = {
                productPrice,
                transactionId: paymentIntent.id,
                buyerEmail,
                bookingId: _id,
                sellerPostId: sellerPostId
            }
            fetch('https://used-book-store-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSucess('Congratulations! Your Payment is successful');
                        setTransactionId(paymentIntent.id)
                    }
                })
        }

        setIsLoading(false)

    }

    return (
        <>
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
                <button className='bg-green-500 mt-5 px-5 ' type="submit" disabled={!stripe || !clientSecret || isLoading}>
                    Pay
                </button>
            </form>
            <p className='text-red-500 font-semibold mt-5'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p  >Your transaction Id : <span className='font-semibold'>{transactionId}</span></p>
                </div>
            }

        </>
    );
};

export default CheckoutForm;