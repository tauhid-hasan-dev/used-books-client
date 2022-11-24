import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;

                console.log(user)
            })
            .catch(err => {
                toast.error(err.message)
            })

    }
    return (
        <div className="hero bg-bg-login-color">
            <div className="hero-content flex-col  lg:flex-row">
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-black '>
                    <form onSubmit={handleSignIn} className="p-7 lg:p-10  rounded-none border-nav-color border-2  w-[350px]   lg:w-[450px] border " >
                        <p className='text-center text-2xl  font-semibold'>Login</p>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Valid Email" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered text-slate-900 font-semibold rounded-none " required />
                        </div>

                        <div>
                            <label htmlFor="terms">
                                Forgot Password?
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="border p-3 text-white bg-nav-color hover:bg-green-800  ">Login</button>
                        </div>
                        <div className='text-center'>
                            <small className='mr-2'>New to RareBooks?</small>
                            <Link to='/register' className=" text-blue-500 label-text-alt link link-hover  text-white">Register Now</Link>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        Or
                    </div>
                    <div className='flex flex-row justify-center gap-3 mb-5'>
                        <button className="btn flex gap-2  bg-nav-color hover:bg-green-800 border-none px-24 rounded-none"> <FaGoogle className='text-3xl'></FaGoogle>Login With Google </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Login;