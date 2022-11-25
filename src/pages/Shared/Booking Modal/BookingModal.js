import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ setBooking, book }) => {
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        setBooking(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative ">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold pb-5">You are going to book <span className='text-text-color'>{book.productName}</span></h3>
                    <form onSubmit={handleBooking} className='flex flex-col gap-5 font-normal '>
                        <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Full Name" className="text-black input input-sm input-bordered w-full " />
                        <input name='email' defaultValue={user?.email} readOnly type="email" placeholder="Email" className=" text-black input input-sm input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className=" text-black input input-sm input-bordered w-full " />
                        <input type="Submit" value='Complete Booking' className="text-white border-none bg-banner hover:bg-category btn btn-sm w-full " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;