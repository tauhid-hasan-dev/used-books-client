import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Loader/Loading';


const Myorders = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings',],
        queryFn: async () => {
            const res = await fetch(`https://used-book-store-server.vercel.app/bookings?email=${user?.email}`, {
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
                            <th className='bg-category text-gray-900'>No</th>
                            <th className='bg-category text-gray-900'>Image</th>
                            <th className='bg-category text-gray-900'>Book Name</th>
                            <th className='bg-category text-gray-900'>Price</th>

                            <th className='bg-category text-gray-900 text-center'>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th className='bg-banner text-gray-900'>{i + 1}</th>
                                <td className='bg-banner text-gray-900'><div className="avatar">
                                    <div className="w-14 ">
                                        <img src={booking?.productImage} alt="" />
                                    </div>
                                </div></td>
                                <td className='bg-banner text-gray-900'>{booking?.productName}</td>
                                <td className='bg-banner text-gray-900'>${booking?.productPrice}</td>

                                <td className='bg-banner text-gray-900 text-center'>
                                    {booking?.productPrice && !booking?.paid && <Link to={`/dashboard/payment/${booking?._id}`}><button className='btn btn-sm  bg-category hover:bg-orange-300 border-none text-gray-900'>Pay</button></Link>}
                                    {booking?.productPrice && booking?.paid && <span className='font-bold text-green-600 '>PAID</span>}
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