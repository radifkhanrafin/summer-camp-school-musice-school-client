import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocalLogin from '../../SharePage/SocalLogin/SocalLogin';
// import loginAnimation from "../../assets/132033-green-login.json";
// import { Lottie } from 'lottie-react';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <Lottie animationData={loginAnimation}></Lottie> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" {...register("email")} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" {...register("password")} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocalLogin></SocalLogin>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;