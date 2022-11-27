import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../Loader/Loading';
import { FaCheckCircle } from 'react-icons/fa';

const Allsellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=seller`)
            const data = await res.json();
            return data;
        }
    })

    const handleSellerVerify = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
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
        fetch(`http://localhost:5000/users/${id}`, {
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
                            <th className='bg-nav-color text-white'>No</th>
                            <th className='bg-nav-color text-white'>Name</th>
                            <th className='bg-nav-color text-white'>Email</th>
                            <th className='bg-nav-color text-white'>Verify</th>
                            <th className='bg-nav-color text-white'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-banner'>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th className='bg-category text-white'>{i + 1}</th>
                                <td className='bg-category text-white'>{seller?.name}</td>
                                <td className='bg-category text-white'>{seller?.email}</td>
                                <td className='bg-category text-white'>
                                    {!seller?.verified && <label onClick={() => handleSellerVerify(seller._id)} className="btn btn-sm  bg-red-400 hover:bg-red-500 border-none">Unverified</label>}
                                    {
                                        seller?.verified && <div className='flex justify-start gap-2 items-center'><p>verified  </p>
                                            <p><FaCheckCircle className='text-blue-700'></FaCheckCircle></p>
                                        </div>
                                    }
                                </td>
                                <td className='bg-category text-white'>
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