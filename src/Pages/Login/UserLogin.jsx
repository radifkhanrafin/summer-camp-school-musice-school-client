import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import SocalLogin from '../../SharePage/SocalLogin/SocalLogin';
import useAuth from '../../UseHooks/useAuth/useAuth';

const UserLogin = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        login(data.email, data.password)
            .then(result => {
                console.log(result.user)
                const user = result.user
                const userinfo = { name: user.displayName, email: user.email, userProfile: user.photoURL, role: "student" };
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userinfo)
                })
                    .then(res => res.json())
                    .then((dataa) => {
                        if (dataa.insertedId) {
                            alert('hit hthe kjsabijub')
                        }
                        navigate('/')
                        console.log('dataa', dataa)
                    })
                navigate('/')
            })
            .catch(error => console.log(error))
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <Lottie animationData={loginAnimation}></Lottie> */}
                    llogin
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                    <div className='flex justify-between p-3 mb-3'>
                        <SocalLogin></SocalLogin>
                        <Link to='/signup'><button className='btn btn-primary'>Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;