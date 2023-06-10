import React, { useEffect, useState } from 'react';
import InstructorsCard from '../../Component/InstructorsCard/InstructorsCard';
import { useQuery } from "react-query";
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';


const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        // fetch('instactor.json')
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                //  console.log(data)
                setInstructors(data)
            })
    }, []);
    console.log("instructors", instructors)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    instructors.map(Instructor => <InstructorsCard
                        key={Instructor._id}
                        Instructor={Instructor}
                        image={Instructor.image}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;