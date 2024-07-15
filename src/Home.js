import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
function Home() {
    const id = 5;
    const navigate = useNavigate();
    const gotoAbout=()=>{
        navigate("/about",{state:{id:id}});
    }
  return (
    <>
    <h1>Home</h1>
    <button onClick={gotoAbout}>About</button>

    </>
  )
}

export default Home