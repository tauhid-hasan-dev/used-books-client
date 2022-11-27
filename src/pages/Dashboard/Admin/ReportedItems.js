import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loader/Loading';

const ReportedItems = () => {

    const { data: reporteditems = [], isLoading, refetch } = useQuery({
        queryKey: ['reporteditems',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reporteditems`)
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBook = (id) => {
        fetch(`http://localhost:5000/books/${id}`, {
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
                            <th className='bg-nav-color text-white'>No</th>
                            <th className='bg-nav-color text-white'>Image</th>
                            <th className='bg-nav-color text-white'>Book Name</th>
                            <th className='bg-nav-color text-white'>Seller</th>
                            <th className='bg-nav-color text-white'>email</th>
                            <th className='bg-nav-color text-white'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            reporteditems.map((book, index) => <tr key={book._id}>
                                <th className='bg-category text-white'>{index + 1}</th>
                                <td className='bg-category text-white'><div className="avatar">
                                    <div className="w-14 ">
                                        <img src={book?.productImage} alt="" />
                                    </div>
                                </div></td>
                                <td className='bg-category text-white'>{book?.productName}</td>
                                <td className='bg-category text-white'>{book?.sellerName}</td>
                                <td className='bg-category text-white'>{book?.sellerEmail}</td>

                                <td className='bg-category text-white'>
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