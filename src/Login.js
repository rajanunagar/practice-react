import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const goto=()=>{
        navigate("/table");
    }
  return (
    <>
    <h1>Home</h1>
    <button onClick={goto}>About</button>
    </>
  )
}

export default Login