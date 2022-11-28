import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile px-0 lg:px-28 bg-white pt-3">
                <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-3">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  bg-banner rounded-xl">
                    <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-gray-900 ">
                        {
                            isBuyer && <li><NavLink
                                to="/dashboard/myorders"
                                className={({ isActive }) =>
                                    isActive ? '  text-navbar-color font-semibold' : undefined
                                }
                            >My Orders</NavLink></li>
                        }
                        {
                            isSeller && <>
                                <li><NavLink
                                    to="/dashboard/myproducts"
                                    className={({ isActive }) =>
                                        isActive ? '  text-navbar-color  font-semibold' : undefined
                                    }
                                >My Products</NavLink></li>
                                <li><NavLink
                                    to="/dashboard/addproduct"
                                    className={({ isActive }) =>
                                        isActive ? '  text-navbar-color font-semibold' : undefined
                                    }
                                >Add Product</NavLink></li>
                            </>
                        }
                        {isAdmin && <>
                            <li><NavLink
                                to="/dashboard/allseller"
                                className={({ isActive }) =>
                                    isActive ? '  text-navbar-color font-semibold' : undefined
                                }
                            >All Seller</NavLink></li>

                            <li><NavLink
                                to="/dashboard/allbuyer"
                                className={({ isActive }) =>
                                    isActive ? '  text-navbar-color font-semibold' : undefined
                                }
                            >All Buyers</NavLink></li>
                            <li><NavLink
                                to="/dashboard/reporteditems"
                                className={({ isActive }) =>
                                    isActive ? '  text-navbar-color font-semibold' : undefined
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