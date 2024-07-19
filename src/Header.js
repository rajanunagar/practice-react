import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
function Header() {
  return (
    <>
          <div className='bg-black'>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink  to="/" activeclassname="active" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeclassname="active" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/table" activeclassname="active"  className="nav-link">
                Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/htmlform" activeclassname="active" className="nav-link">
                HtmlForm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bootstrapform" activeclassname="active" className="nav-link">
                BootstrapForm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/logout" activeclassname="active" className="nav-link">
                Logout
              </NavLink>
            </li>
          </ul>
          </div>
        <Outlet/>
        </>
  )
}

export default Header