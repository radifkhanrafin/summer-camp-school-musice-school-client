import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvaiders/AuthProvaider';
import { useNavigate } from 'react-router-dom';

const SocalLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () => {

        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                const userinfo = { name: loggedUser.displayName, email: loggedUser.email, userProfile: loggedUser.photoURL, role: "student" };
                console.log(userinfo)

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userinfo)
                })
                    .then(res => res.json())
                    .then((dataa) => {
                        if (dataa.insertedId) {

                        }
                        navigate('/')
                        console.log('dataa', dataa)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={handleGoogleLogin}>
                google
            </button>
        </div>
    );
};

export default SocalLogin;