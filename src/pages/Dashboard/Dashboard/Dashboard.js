import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='text-white text-3xl' >
            <p>{`Dear ${user?.displayName}. Wecome to your dashboard!`} </p>
        </div>
    );
};

export default Dashboard;