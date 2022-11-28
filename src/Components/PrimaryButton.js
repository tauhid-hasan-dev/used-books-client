import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button type='submit' className="border p-3 text-white bg-nav-color hover:bg-green-800  ">{children}</button>
    );
};

export default PrimaryButton;