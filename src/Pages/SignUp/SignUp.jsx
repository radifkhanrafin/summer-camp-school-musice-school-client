import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvaiders/AuthProvaider';
import SocalLogin from '../../SharePage/SocalLogin/SocalLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const SignUp = () => {
    const navigate = useNavigate()
    const [hidePass, setHidePass] = useState(true);
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        if (data.password === data.Confrim_password) {
            createUser(data.email, data.password)
                .then((result) => {
                    updateUserProfile(data.name, data.photo)
                        .then(updateData => {
                            navigate('/login')
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    const user = result.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    // ..
                });
        }
        setError("password don't match")
        console.log(createUser)

    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <Lottie animationData={loginAnimation}></Lottie> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" {...register("name")} required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" {...register("email")} required />

                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={hidePass ?  'password': 'text'} placeholder="password" className="input input-bordered" {...register("password")} required />
                            </div>
                            <span className='text-error'>{error && error}</span>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={hidePass ?  'password': 'text'} placeholder="Confirm password" className="input input-bordered" {...register("Confrim_password")} required />

                            </div>
                            <button onClick={() => setHidePass(!hidePass)} className='flex  items-center gap-1 ml-3 my-2'>
                                {/*  */}
                                {hidePass ? <><FaEye /> Show Password</> : <><FaEyeSlash />  Hide Password</>}
                            </button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" className="input input-bordered" {...register("photo")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select className='input input-bordered' {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="number" placeholder="Contact Number" className="input input-bordered" {...register("phone")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Present address" className="input input-bordered" {...register("address")} />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary w-full' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='flex justify-between p-3 mb-3'>
                        <SocalLogin></SocalLogin>
                        <Link to='/login'><button className='btn btn-primary'>Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;