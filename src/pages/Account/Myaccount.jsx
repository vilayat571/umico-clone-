import React from 'react'
import { useNavigate } from 'react-router-dom';

function Myaccount() {
    const navigate=useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <div>
            <h1>Myaccount Page</h1>
            <br />
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Myaccount
