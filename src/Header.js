import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
function Header() {
  return (
    <>
    <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/table" activeClassName="active">
                Table
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
        </>
  )
}

export default Header