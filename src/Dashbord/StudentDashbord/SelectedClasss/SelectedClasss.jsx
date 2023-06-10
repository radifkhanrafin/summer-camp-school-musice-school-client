import React, { useEffect, useState } from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import Selectcourse from '../../../Component/InstructorsCard/SelectCourse/Selectcourse';
import useSelectCouese from '../../../UseHooks/useSelectCouese/useSelectCouese';

const SelectedClasss = () => {
    const { user } = useAuth();
    const [selectcourse] = useSelectCouese();
    console.log(selectcourse)
    // const [selectCourse, setSelectCourse] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/SelectedCourse/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setSelectCourse(data))
    // }, []);


    // console.log(selectCourse)
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Select Course </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='rounded-full font-bold'>
                        <tr className='bg-blue-400 '>
                            <th>SN</th>
                            <th>Banner</th>
                            <th>Course</th>
                            <th>Instructors</th>
                            <th>Course fee</th>
                            <th>Remove</th>
                            <th>Enrolled Confrim</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selectcourse.map((course, index) => <Selectcourse
                                course={course}
                                key={course._id}
                                index={index}
                            ></Selectcourse>)
                        }
                    </tbody>
                </table>
            </div>





        </div>
    );
};

export default SelectedClasss;