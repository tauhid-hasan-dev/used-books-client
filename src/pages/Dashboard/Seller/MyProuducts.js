import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Loader/Loading';

const MyProuducts = () => {
    const { user } = useContext(AuthContext)

    const { data: books = [], isLoading, refetch } = useQuery({
        queryKey: ['books',],
        queryFn: async () => {
            const res = await fetch(`https://used-book-store-server.vercel.app/books?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })


    const handleAdvertise = (book) => {
        const {
            _id,
            categoryId,
            productName,
            productImage,
            location,
            originalPrice,
            resalePrice,
            purchaseYear,
            useOfYear,
            condition,
            dateField,
            sellerName,
            sellerPhone,
            sellerEmail
        } = book;

        const advertisedItem = {
            sellerPostId: _id,
            categoryId,
            productName,
            productImage,
            location,
            originalPrice,
            resalePrice,
            purchaseYear,
            useOfYear,
            condition,
            dateField,
            sellerName,
            sellerPhone,
            sellerEmail,
            advertised: 'advertised',
        }

        fetch(`https://used-book-store-server.vercel.app/adds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertisedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Advertisement Successful!');
                    refetch();
                }
                if (data.message) {
                    toast.success(data.message)
                }

            })

    }



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



    console.log(books);
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
                            <th className='bg-category text-gray-900'>Price</th>
                            <th className='bg-category text-gray-900'>Sale Status</th>
                            <th className='bg-category text-gray-900'>Advertise</th>
                            <th className='bg-category text-gray-900'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            books.map((book, index) => <tr key={book._id}>
                                <th className='bg-banner text-gray-900'>{index + 1}</th>
                                <td className='bg-banner text-gray-900'><div className="avatar">
                                    <div className="w-14 ">
                                        <img src={book?.productImage} alt="" />
                                    </div>
                                </div></td>
                                <td className='bg-banner text-gray-900'>{book?.productName}</td>
                                <td className='bg-banner text-gray-900'>${book?.resalePrice}</td>
                                <td className='bg-banner text-gray-900'>
                                    {book?.paid ? <p className='text-green-600'>SOLD</p> : <label className="  font-semibold  border-none text-gray-900  ">Available</label>}
                                </td>

                                {book?.advertised === 'advertised' || <td className='bg-banner text-gray-900'>
                                    {
                                        book?.paid ? '' : <label onClick={() => handleAdvertise(book)} className="btn btn-sm bg-category hover:bg-orange-200 border-none text-gray-900">Advertise</label>
                                    }
                                </td>}

                                {book?.advertised === 'advertised' && <td className='bg-banner text-gray-900'>
                                    {
                                        book?.advertised && <p className='text-green-600 font-semibold'>Advertised</p>
                                    }
                                </td>}
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

export default MyProuducts;