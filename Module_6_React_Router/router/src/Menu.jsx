import React from 'react';
import { NavLink } from 'react-router-dom';




const Menu = () => {
  return (
    <div className='menu-style'>
<NavLink activeClassName="active" to="/">About Us..</NavLink>
        <NavLink activeClassName="active" to="/Contact">Contact Us..</NavLink>

        <NavLink  to = "/Services" activeclassName="active">
          Services
        </NavLink>
        {/* <NavLink to="/Error" activeClassName="active">Error</NavLink> */}
    </div>
  )
}

export default Menu
