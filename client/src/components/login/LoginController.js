import React, { useState } from 'react';
import LoginPage from './LoginPage.js';

function LoginController(){
    const [identity, setIdentity] = useState({
        username: '',
        password: ''
    });

    function handleChange(event) {
        const updatedIdentity = {...identity, [event.target.name]: event.target.value};
        setIdentity(updatedIdentity);
    }

    function handleSubmit(form, event) {
        console.log(identity);
        return false;
    }

    return(
        <><LoginPage identity={identity} onChange={handleChange} onSubmit={handleSubmit}/></>
    )
};

export default LoginController;