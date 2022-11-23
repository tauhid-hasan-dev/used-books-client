import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message)
            })
    }




    return (
        <div className="hero bg-bg-login-color">
            <div className="hero-content flex-col  lg:flex-row">
                {/* <div className="text-center lg:text-left w-1/2">
                    <img src={image} alt="" />
                </div> */}
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-slate-300 '>
                    <form onSubmit={handleSignUp} className="p-7 lg:p-10  rounded-none border-slate-600 w-[350px]   lg:w-[450px] border " >
                        <p className='text-center text-2xl  font-semibold'>Register</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Valid Email" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>
                        <select className="select select-bordered w-full text-slate-900 font-semibold rounded-none">
                            <option disabled selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered text-slate-900 font-semibold " required />

                        </div>

                        <div >
                            <input type="checkbox" id="terms" name="terms" value="terms" />
                            <label htmlFor="terms"> {<>
                                Accept <Link to='/terms' className="underline text-slate-300">Terms and Conditions</Link>
                            </>}</label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="border p-3 text-white  hover:bg-slate-600  ">Register</button>
                        </div>
                        <div className="text-center">
                            <small className="mr-2">Already have an account?</small>
                            <Link
                                to="/login"
                                className="label-text-alt link link-hover text-white"
                            >
                                Please Login
                            </Link>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        Or login with with google
                    </div>
                    <div className='flex flex-row justify-center gap-3 mb-5 w-[100%]'>
                        <button className="btn rounded-full  flex gap-2 "> <FaGoogle className='text-3xl'></FaGoogle> google </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Register;