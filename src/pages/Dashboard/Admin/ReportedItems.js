import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loader/Loading';

const ReportedItems = () => {

    const { data: reporteditems = [], isLoading, refetch } = useQuery({
        queryKey: ['reporteditems',],
        queryFn: async () => {
            const res = await fetch(`https://used-book-store-server.vercel.app/reporteditems`)
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBook = (id) => {
        fetch(`https://used-book-store-server.vercel.app/books/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    toast.success(`Deleted Successfully`)
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
                            <th className='bg-category text-gray-900'>Image</th>
                            <th className='bg-category text-gray-900'>Book Name</th>
                            <th className='bg-category text-gray-900'>Seller</th>
                            <th className='bg-category text-gray-900'>email</th>
                            <th className='bg-category text-gray-900'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            reporteditems.map((book, index) => <tr key={book._id}>
                                <th className='bg-banner text-gray-900'>{index + 1}</th>
                                <td className='bg-banner text-gray-900'><div className="avatar">
                                    <div className="w-14 ">
                                        <img src={book?.productImage} alt="" />
                                    </div>
                                </div></td>
                                <td className='bg-banner text-gray-900'>{book?.productName}</td>
                                <td className='bg-banner text-gray-900'>{book?.sellerName}</td>
                                <td className='bg-banner text-gray-900'>{book?.sellerEmail}</td>

                                <td className='bg-banner text-gray-900'>
                                    <label onClick={() => handleDeleteBook(book._id)} className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;