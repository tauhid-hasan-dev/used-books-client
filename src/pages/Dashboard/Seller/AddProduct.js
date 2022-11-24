import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [categoryId, setCategoryId] = useState('00');
    const [condition, setCondition] = useState('');
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
        console.log(productName, categoryId, condition);

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
                                    <span className="label-text text-text-color text-lg">Product Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-lg">Product Image</span>
                                </label>
                                <input type="file" name='image' className="file-input file-input-bordered file-input-accent text-slate-900 font-semibold rounded-none w-full" />
                            </div>
                            <div className="form-control w-[100%]">
                                <label className="label">
                                    <span className="label-text text-text-color text-lg" >Select Category </span>
                                </label>
                                <select onChange={handleChangeCategory} className="select select-bordered  text-slate-900 font-semibold rounded-none">
                                    <option value="01" >Programming </option>
                                    <option value="02" >History</option>
                                    <option value="02" >Self-Development</option>
                                </select>
                            </div>
                        </div>

                        {/*     second row */}

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-lg">Original Price</span>
                                </label>
                                <input type="text" name='originalprice' placeholder="Your Full Name" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-lg">Resale Price</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>
                            <div className="form-control w-[100%]">
                                <label className="label">
                                    <span className="label-text text-text-color text-lg" >Condition </span>
                                </label>
                                <select onChange={handleChangeCondition} className="select select-bordered  text-slate-900 font-semibold rounded-none">
                                    <option value="Excellent" >Excellent </option>
                                    <option value="Good" >Good</option>
                                    <option value="Fair" >Fair</option>
                                </select>
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