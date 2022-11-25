import { useQuery } from '@tanstack/react-query';
import React from 'react';



const Myorders = () => {

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings`)
            const data = await res.json();
            return data;
        }
    })

    console.log(bookings.length)

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    <thead className='bg-banner'>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-14 ">
                                        <img src={booking?.productImage} alt="" />
                                    </div>
                                </div></td>
                                <td>{booking?.productName}</td>
                                <td>${booking?.productPrice}</td>
                                <td>
                                    <label htmlFor="confirmation-modal" className="btn btn-sm bg-banner hover:bg-category border-none">Pay</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;