import React, { useState } from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';

const ClassList = ({ classes, index }) => {
    const { image, name, instructors_Name, seats, price, _id } = classes;
    const { user } = useAuth()
    const selectedCourse = { name, image, instructors_Name, _id, price, email: user?.email }
    const [disableBtn, setDisableBtn] = useState(false)
    const handleSelectCourse = () => {
        console.log(user)
        const selectCourse = {
            email: selectedCourse.email,
            image: selectedCourse.image,
            instructors_Name: selectedCourse.instructors_Name,
            name: selectedCourse.name,
            price: selectedCourse.price,
            payment_status: 'unpaid',
            classID: selectedCourse._id
        }
        console.log(selectCourse)
        fetch('http://localhost:5000/SelectCourse', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(selectCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('data', data)
                    setDisableBtn(true)
                }

            })
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-96 h-80 rounded-md' src={classes.image} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title">Tutorial : {classes.name}</h2>
                <h2 className="card-title">Instructor : {classes.instructors_Name}</h2>
                <h2 className="">Available Seats : {classes.seats}</h2>
                <p> Course fee :  {classes.price}</p>
                <button disabled={disableBtn} onClick={handleSelectCourse} className="btn btn-primary">Select class</button>
            </div>
        </div>
    );
};

export default ClassList;