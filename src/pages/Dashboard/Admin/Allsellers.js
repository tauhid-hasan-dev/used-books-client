import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Loader/Loading';

const Allsellers = () => {

    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['sellers',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=seller`)
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
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th className='bg-category text-white'>{i + 1}</th>
                                <td className='bg-category text-white'>{seller?.name}</td>
                                <td className='bg-category text-white'>{seller?.email}</td>
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

export default Allsellers;