import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';


const Register = () => {
    const { createUser, updateUser, logout, googleSignIn } = useContext(AuthContext);
    let location = useLocation();
    const [role, setRole] = useState("buyer");
    const navigate = useNavigate()

    //getting option value on change
    const handleChange = (event) => {
        setRole(event.target.value);
    };

    //receiving token from backend by useToken hook.
    const [registerEmail, setRegisterEmail] = useState('')
    const [token] = useToken(registerEmail);

    const googleProvider = new GoogleAuthProvider();

    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate('/')
    }

    //sign up with email and password
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, role);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserInfo(name, email);
                /* toast.success(`Your are registered as a ${role}, Please login now`) */
                console.log(user);
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message)
            })
    }

    const updateUserInfo = (name, email) => {
        const profile = {
            displayName: name,
        }
        updateUser(profile)
            .then(() => {
                toast.success('Your are Registered!');
                setRegisterEmail(email)
                const userInfo = {
                    name,
                    email,
                    userRole: role,
                }

                //sending book info to the backend 
                fetch(`https://used-book-store-server.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })




            })
            .catch(e => console.log(e.message))
    }

    //sign in with google
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                setRegisterEmail(user?.email)
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    userRole: role,
                }

                //sending book info to the backend 
                fetch(`https://used-book-store-server.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                //jwt saving in client 
                fetch(`https://used-book-store-server.vercel.app/jwt?email=${user?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.accessToken) {
                            localStorage.setItem('usedBooksToken', data.accessToken);
                            navigate(from, { replace: true });
                        }
                    })
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message)
            })
    }




    return (
        <div className="hero bg-bg-login-color">
            <div className="hero-content flex-col  lg:flex-row">
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-black '>
                    <form onSubmit={handleSignUp} className="p-7 lg:p-10  rounded-none border-nav-color border-2  w-[350px]   lg:w-[450px] border " >
                        <p className='text-center text-2xl  font-semibold'>Register</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Valid Email" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Are your seller or buyer </span>
                            </label>
                            <select onChange={handleChange} className="select select-bordered w-full text-slate-900 font-semibold rounded-none">
                                <option value="buyer" disabled selected>Buyer</option>
                                <option value="seller" >Seller</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered text-slate-900 font-semibold rounded-none " required />
                        </div>

                        <div >
                            <input type="checkbox" id="terms" name="terms" value="terms" />
                            <label htmlFor="terms"> {<>
                                Accept <Link to='/terms' className="underline text-black">Terms and Conditions</Link>
                            </>}</label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="border p-3 text-white bg-nav-color hover:bg-green-800  ">Register</button>
                        </div>
                        <div className="text-center">
                            <small className="mr-2">Already have an account?</small>
                            <Link
                                to="/login"
                                className="label-text-alt link link-hover text-black"
                            >
                                Please Login
                            </Link>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        Or
                    </div>
                    <div className='flex flex-row justify-center gap-3 mb-5'>
                        <button onClick={handleGoogleSignIn} className="btn flex gap-2  bg-nav-color hover:bg-green-800 border-none px-24 rounded-none"> <FaGoogle className='text-3xl'></FaGoogle>Login With Google </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Register;