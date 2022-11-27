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
            const res = await fetch(`http://localhost:5000/books?email=${user?.email}`)
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

        fetch(`http://localhost:5000/adds`, {
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
                            <th className='bg-nav-color text-white'>No</th>
                            <th className='bg-nav-color text-white'>Image</th>
                            <th className='bg-nav-color text-white'>Book Name</th>
                            <th className='bg-nav-color text-white'>Price</th>
                            <th className='bg-nav-color text-white'>Sale Status</th>
                            <th className='bg-nav-color text-white'>Advertise</th>
                            <th className='bg-nav-color text-white'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            books.map((book, index) => <tr key={book._id}>
                                <th className='bg-category text-white'>{index + 1}</th>
                                <td className='bg-category text-white'><div className="avatar">
                                    <div className="w-14 ">
                                        <img src={book?.productImage} alt="" />
                                    </div>
                                </div></td>
                                <td className='bg-category text-white'>{book?.productName}</td>
                                <td className='bg-category text-white'>${book?.resalePrice}</td>
                                <td className='bg-category text-white'>
                                    {book?.paid ? <p>sold</p> : <label className="btn btn-sm bg-nav-color hover:bg-green-800 border-none">Available</label>}
                                </td>

                                {book?.advertised === 'advertised' || <td className='bg-category text-white'>
                                    {
                                        book?.paid ? '' : <label onClick={() => handleAdvertise(book)} className="btn btn-sm bg-nav-color hover:bg-green-800 border-none">Advertise</label>
                                    }
                                </td>}

                                {book?.advertised === 'advertised' && <td className='bg-category text-white'>
                                    {
                                        book?.advertised && <p className='text-white'>Advertised</p>
                                    }
                                </td>}
                                <td className='bg-category text-white'>
                                    <label className="btn btn-sm btn-error">Delete</label>
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