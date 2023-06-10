import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../UseHooks/useAuth/useAuth';

const Add_Course = () => {
    const { user } = useAuth();
    // console.log(user)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const classData = {
            name: data.name,
            image: data.image,
            seats: data.seats,
            instructors_Name: data.instructors_Name,
            instructors_email: data.instructors_email,
            price: data.price,
            instructors_image: user?.photoURL
        }
        console.log(classData)
        fetch('http://localhost:5000/newClass', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('data', data)
                }

            })
    };



    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Class Name</span>
                </label>
                <input type="text" placeholder="Class Name" className="input input-bordered" {...register("name")} />

            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Class Banner</span>
                </label>
                <input type="url" placeholder="Your Name" className="input input-bordered" {...register("image")} />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">seats</span>
                </label>
                <input type="number" placeholder="Your Name" className="input input-bordered" {...register("seats")} />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Instructor</span>
                </label>
                <input type="text" defaultValue={user?.displayName} readOnly className="input input-bordered" {...register("instructors_Name")} />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Instructors Email</span>
                </label>
                <input type="email" defaultValue={user?.email} readOnly className="input input-bordered" {...register("instructors_email")} />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Course fee</span>
                </label>
                <input type="number" placeholder="Course Fee" className="input input-bordered" {...register("price")} />

            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <div className='text-center'>
                <input className='btn btn-primary mt-5 ' type="submit" value="Upload Class" />
            </div>

        </form>
    );
};

export default Add_Course;