import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvaiders/AuthProvaider';

const SocalLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result =>{
                console.log(result.user)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>
                google
            </button>
        </div>
    );
};

export default SocalLogin;