import React, { useState } from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';

const ClassList = ({ AllClass, index }) => {
    const { image, name, instructors_Name, seats, price, _id } = AllClass;
    const { user } = useAuth()
    const selectedCourse = { name, image, instructors_Name, price, email: user?.email }
    const [disableBtn, setDisableBtn] = useState(false)
    const handleSelectCourse = () => {
        console.log(user)
        console.log('select', selectedCourse)
        fetch('http://localhost:5000/SelectCourse', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(selectedCourse)
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
        <tr className=" font-bold">
            <th># {index + 1}</th>
            <td>
                <img className='w-16 rounded-lg' src={image} alt="" />
            </td>
            <td>{name}</td>
            <td>{instructors_Name}</td>
            <td>{seats}</td>
            <td>$ {price}</td>
            <td>
                <button
                    disabled={disableBtn}
                    className='btn btn-primary px-8 '
                    onClick={() => handleSelectCourse(AllClass)}
                >Select</button>
            </td>
        </tr>
    );
};

export default ClassList;