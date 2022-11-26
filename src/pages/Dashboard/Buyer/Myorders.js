import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Loader/Loading';


const Myorders = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('usedBooksToken')}`
                }
            })
            console.log(res)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(bookings.length)

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    <thead className='bg-banner'>
                        <tr>
                            <th className='bg-nav-color text-white'>No</th>
                            <th className='bg-nav-color text-white'>Image</th>
                            <th className='bg-nav-color text-white'>Book Name</th>
                            <th className='bg-nav-color text-white'>Price</th>
                            <th className='bg-nav-color text-white'>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th className='bg-category text-white'>{i + 1}</th>
                                <td className='bg-category text-white'><div className="avatar">
                                    <div className="w-14 ">
                                        <img src={booking?.productImage} alt="" />
                                    </div>
                                </div></td>
                                <td className='bg-category text-white'>{booking?.productName}</td>
                                <td className='bg-category text-white'>${booking?.productPrice}</td>
                                <td className='bg-category text-white'>
                                    <label htmlFor="confirmation-modal" className="btn btn-sm  bg-nav-color hover:bg-green-800 border-none">Pay</label>
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