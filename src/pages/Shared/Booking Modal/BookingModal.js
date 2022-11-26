import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ setBooking, book }) => {
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const productName = form.productname.value;
        const productPrice = form.productprice.value;
        const buyerPhone = form.buyerphone.value;
        const meetingLocation = form.meetinglocation.value;

        console.log(buyerName, buyerEmail, productName, productPrice, buyerPhone, meetingLocation);

        const bookedItemInfo = {
            productName,
            productPrice,
            buyerName,
            buyerEmail,
            buyerPhone,
            meetingLocation,
            productImage: book?.productImage,
            sellerPostId: book?._id
        }

        //sending booking info 
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedItemInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Congratulations! Booking Completed.')
                }
                console.log(data);
            })


        setBooking(null);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative ">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold pb-5">You are going to book <span className='text-text-color'>{book?.productName}</span></h3>
                    <form onSubmit={handleBooking} className='flex flex-col gap-5 font-normal '>
                        <input name='productname' defaultValue={book?.productName} readOnly type="text" placeholder="Product name" className="text-black input input-sm input-bordered w-full " />
                        <input name='productprice' defaultValue={book?.resalePrice} readOnly type="text" placeholder="Price" className=" text-black input input-sm input-bordered w-full " />
                        <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Full Name" className="text-black input input-sm input-bordered w-full " />
                        <input name='email' defaultValue={user?.email} readOnly type="email" placeholder="Email" className=" text-black input input-sm input-bordered w-full " />
                        <input name='buyerphone' type="text" placeholder="Phone Number" className=" text-black input input-sm input-bordered w-full " />
                        <input name='meetinglocation' type="text" placeholder="Meeting Location" className=" text-black input input-sm input-bordered w-full " required />
                        <input type="Submit" value='Submit' className="text-white border-none bg-banner hover:bg-category btn btn-sm w-full " required />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;