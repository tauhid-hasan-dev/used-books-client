import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile px-0 lg:px-28 bg-banner pt-3">
                <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-3">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  bg-category">
                    <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white ">
                        <li><NavLink
                            to="/dashboard/myorders"
                            className={({ isActive }) =>
                                isActive ? '  text-text-color ' : undefined
                            }
                        >My Orders</NavLink></li>
                        <li><NavLink
                            to="/dashboard/myproducts"
                            className={({ isActive }) =>
                                isActive ? '  text-text-color ' : undefined
                            }
                        >My Products</NavLink></li>
                        <li><NavLink
                            to="/dashboard/addproduct"
                            className={({ isActive }) =>
                                isActive ? '  text-text-color ' : undefined
                            }
                        >Add Product</NavLink></li>
                        {isAdmin && <>
                            <li><NavLink
                                to="/dashboard/allseller"
                                className={({ isActive }) =>
                                    isActive ? '  text-text-color ' : undefined
                                }
                            >All Seller</NavLink></li>

                            <li><NavLink
                                to="/dashboard/allbuyer"
                                className={({ isActive }) =>
                                    isActive ? '  text-text-color ' : undefined
                                }
                            >All Buyers</NavLink></li>
                            <li><NavLink
                                to="/dashboard/reporteditems"
                                className={({ isActive }) =>
                                    isActive ? '  text-text-color ' : undefined
                                }
                            >Reported Items</NavLink></li>
                        </>}


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;