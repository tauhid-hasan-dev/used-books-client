import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const [categoryId, setCategoryId] = useState('01');
    const [condition, setCondition] = useState('Excellent');
    let today = new Date().toLocaleString();
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
        const image = form.image.files[0];
        const sellerName = form.sellername.value;
        const sellerPhone = form.sellerphone.value;
        console.log(productName, categoryId, condition, originalPrice, resalePrice, location, purchaseYear, useOfYear);

        const formdata = new FormData();
        formdata.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=1357b7af2e2bd0d85c5b8b326f53f9cd`;
        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const productImage = imageData.data.url;
                    console.log(productImage)
                    const bookInfo = {
                        categoryId,
                        productName,
                        productImage,
                        location,
                        originalPrice,
                        resalePrice,
                        purchaseYear,
                        useOfYear,
                        condition,
                        dateField: today,
                        sellerName,
                        sellerPhone
                    }

                    //sending book info to the backend 
                    fetch(`http://localhost:5000/allbooks`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(bookInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })

                }


            })
            .catch(err => console.log(err.message))



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
                                    <span className="label-text text-text-color text-md">Book Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your book name" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Book Image</span>
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
                        {/*  fourth row */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Seller Name</span>
                                </label>
                                <input type="text" name='sellername' placeholder="Seller Name" className="input input-bordered  text-slate-900 font-semibold rounded-none" defaultValue={user?.displayName} readOnly required />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-text-color text-md">Seller phone no</span>
                                </label>
                                <input type="text" name='sellerphone' placeholder="Seller Phone No" className="input input-bordered  text-slate-900 font-semibold rounded-none" required />
                            </div>
                        </div>



                        <div className="form-control mt-6">
                            <button type='submit' className="border rounded  p-3 border-text-color hover:bg-text-color font-semibold hover:border-text-color  hover:text-nav-color   ">Add Product</button>
                        </div>
                    </form>

                </div >
            </div>
        </div>
    );
};

export default AddProduct;