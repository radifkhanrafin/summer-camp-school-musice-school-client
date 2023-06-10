import React from 'react';
import useSelectCouese from '../../../UseHooks/useSelectCouese/useSelectCouese';
import Swal from "sweetalert2";


const Selectcourse = ({ course, index }) => {
    const { image, name, instructors_Name, price, _id } = course;
    const [selectcourse, refetch] = useSelectCouese();
    const handleRemovecourse = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id);
                fetch(`http://localhost:5000/SelectCourse/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


        // console.log('delete')
        // fetch(`http://localhost:5000/SelectCourse/${_id}`, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.deletedCount > 0) {
        //             refetch()
        //             // alert('ok')
        //         }
        //     })
    }

    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td><img className='w-20 h-12 rounded-md' src={image} alt="" /></td>
            <td>{name}</td>
            <td>{instructors_Name}</td>
            <td>{price}</td>
            <td><button className='btn btn-error ' onClick={handleRemovecourse}>Unselect</button></td>
            <td><button className='btn btn-warning'>Pay</button></td>
        </tr>
    );
};

export default Selectcourse; ``