import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Loader/Loading';

const AllBuyers = () => {

    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['buyers',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=buyer`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    <thead className='bg-banner'>
                        <tr>
                            <th className='bg-nav-color text-white'>No</th>
                            <th className='bg-nav-color text-white'>Name</th>
                            <th className='bg-nav-color text-white'>Email</th>
                            <th className='bg-nav-color text-white'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th className='bg-category text-white'>{i + 1}</th>
                                <td className='bg-category text-white'>{buyer?.name}</td>
                                <td className='bg-category text-white'>{buyer?.email}</td>
                                <td className='bg-category text-white'>
                                    <label className="btn btn-sm  bg-red-400 hover:bg-red-500 border-none">Delete</label>
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