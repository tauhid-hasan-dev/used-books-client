import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='text-gray-600  px  flex flex-col gap-2' >
            <p className='text-2xl'>Dear <span className='font-bold'>{user?.displayName}</span>. Wecome to your dashboard! </p>
            <p>You can now navigate sidebar to explore the features </p>
        </div>
    );
};

export default Dashboard;