import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = [
        "auth1",
        "auth2",
        "auth3",
        "auth4",
        "auth5",
        "auth6",
        "auth7",
        "auth8"
    ]

    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = () => {
        if (auth?.includes(inputValue)) {
            navigate("/dashboard")
        }
    }
    console.log("input", inputValue)
    console.log("auth", auth)
    return (
        <div className='table-responsive m-auto'>
            <h2>Authentation Process</h2>
            <div className='mt-5 col-5 m-auto d-flex '>
                <form className='table '>
                    <input
                        type="text"
                        className='form-control'
                        value={inputValue}
                        onChange={handleChange}
                    />


                    <button className='btn-primary btn mt-2' onClick={handleSubmit}>login</button>
                </form>
            </div>

        </div>
    );
}

export default Login;
