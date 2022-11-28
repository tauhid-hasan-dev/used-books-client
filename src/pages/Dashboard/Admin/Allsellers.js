import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../Loader/Loading';
import { FaCheckCircle } from 'react-icons/fa';

const Allsellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers',],
        queryFn: async () => {
            const res = await fetch(`https://used-book-store-server.vercel.app/users?role=seller`)
            const data = await res.json();
            return data;
        }
    })

    const handleSellerVerify = (id) => {
        fetch(`https://used-book-store-server.vercel.app/users/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success(`Seller Verified`)
                    refetch();
                }
            })
    }
    const handleSellerDelete = (id) => {
        fetch(`https://used-book-store-server.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    toast.success(`Seller Deleted Successfully`)
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
                            <th className='bg-category text-gray-900'>Verify</th>
                            <th className='bg-category text-gray-900'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th className='bg-banner text-gray-900'>{i + 1}</th>
                                <td className='bg-banner text-gray-900'>{seller?.name}</td>
                                <td className='bg-banner text-gray-900'>{seller?.email}</td>
                                <td className='bg-banner text-gray-900'>
                                    {!seller?.verified && <label onClick={() => handleSellerVerify(seller._id)} className="btn btn-sm  bg-red-400 hover:bg-red-500 border-none">Unverified</label>}
                                    {
                                        seller?.verified && <div className='flex justify-start gap-2 items-center'><p>verified  </p>
                                            <p><FaCheckCircle className='text-blue-700'></FaCheckCircle></p>
                                        </div>
                                    }
                                </td>
                                <td className='bg-banner text-gray-900'>
                                    <label onClick={() => handleSellerDelete(seller._id)} className="btn btn-sm  bg-red-400 hover:bg-red-500 border-none">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;