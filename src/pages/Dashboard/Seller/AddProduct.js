import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [categoryId, setCategoryId] = useState('01');
    const [condition, setCondition] = useState('Excellent');
    const handleChangeCategory = (event) => {
        setCategoryId(event.target.value);
    };
    const handleChangeCondition = (event) => {
        setCondition(event.target.value);
    };
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const originalPrice = form.originalprice.value;
        const resalePrice = form.resaleprice.value;
        const location = form.location.value;
        const purchaseYear = form.puchaseyear.value;
        const useOfYear = form.useyear.value;
        console.log(productName, categoryId, condition, originalPrice, resalePrice, location, purchaseYear, useOfYear);

    }
    return (
        <div className="hero bg-category py-10 ">
            <div className="hero-content flex-col  lg:flex-row">
                <div className=' flex flex-col items-center text-white '>
                    <form onSubmit={handleAddProduct} className="  rounded-none border-text-color border-none  w-[350px]   lg:w-[800px]  " >
                        <p className='text-center text-2xl lg:text-4xl  font-semibold mb-7'>Add Product</p>

                        {/* first row */}

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Product Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your book name" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Product Image</span>
                                </label>
                                <input type="file" name='image' className="file-input file-input-bordered file-input-accent text-slate-900 font-semibold rounded-none w-full" />
                            </div>
                            <div className="form-control w-[100%]">
                                <label className="label">
                                    <span className="label-text text-text-color text-md" >Select Category </span>
                                </label>
                                <select onChange={handleChangeCategory} className="select select-bordered  text-slate-900 font-semibold rounded-none">
                                    <option value="01" selected>Programming </option>
                                    <option value="02" >History</option>
                                    <option value="03" >Self-Development</option>
                                </select>
                            </div>
                        </div>

                        {/*     second row */}

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Original Price</span>
                                </label>
                                <input type="text" name='originalprice' placeholder="Original price of the book" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Resale Price</span>
                                </label>
                                <input type="text" name='resaleprice' placeholder="Resale price of the book" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>
                            <div className="form-control w-[100%]">
                                <label className="label">
                                    <span className="label-text text-text-color text-md" >Condition </span>
                                </label>
                                <select onChange={handleChangeCondition} className="select select-bordered  text-slate-900 font-semibold rounded-none">
                                    <option value="Excellent" selected>Excellent </option>
                                    <option value="Good" >Good</option>
                                    <option value="Fair" >Fair</option>
                                </select>
                            </div>
                        </div>
                        {/* 3rd row */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Location</span>
                                </label>
                                <input type="text" name='location' placeholder="Your Location" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Year of purchase</span>
                                </label>
                                <input type="text" name='puchaseyear' placeholder="Purchase year" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Years of use</span>
                                </label>
                                <input type="text" name='useyear' placeholder="Total year of usage" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>

                        </div>



                        <div className="form-control mt-6">
                            <button type='submit' className="border p-3 text-text-color bg-nav-color hover:bg-green-800  ">Add Product</button>
                        </div>
                    </form>

                </div >
            </div>
        </div>
    );
};

export default AddProduct;