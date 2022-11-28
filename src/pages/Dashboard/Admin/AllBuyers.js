import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Loader/Loading';

const AllBuyers = () => {

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers',],
        queryFn: async () => {
            const res = await fetch(`https://used-book-store-server.vercel.app/users?role=buyer`)
            const data = await res.json();
            return data;
        }
    })

    const handleBuyerDelete = (id) => {
        fetch(`https://used-book-store-server.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    toast.success(`Buyer Deleted Successfully`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    <thead className='bg-banner'>
                        <tr>
                            <th className='bg-category text-gray-900'>No</th>
                            <th className='bg-category text-gray-900'>Name</th>
                            <th className='bg-category text-gray-900'>Email</th>
                            <th className='bg-category text-gray-900'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th className='bg-banner text-gray-900'>{i + 1}</th>
                                <td className='bg-banner text-gray-900'>{buyer?.name}</td>
                                <td className='bg-banner text-gray-900'>{buyer?.email}</td>
                                <td className='bg-banner text-gray-900'>
                                    <label onClick={() => handleBuyerDelete(buyer._id)} className="btn btn-sm  bg-red-400 hover:bg-red-500 border-none">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;