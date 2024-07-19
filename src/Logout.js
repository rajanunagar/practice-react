import React from 'react'
import { Navigate } from 'react-router-dom'
function Logout() {
  return (
    <>
        <Navigate to='/login' onClick={ console.log('hello')}/>
    </>

  )
}

export default Logout