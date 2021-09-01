import React from 'react';
import * as faIcons from 'react-icons/fa';

function Navbar() {
  return (
      <>
        <div className='navBar'>
          <Link to="#" className='menu-bars'>
            <faIcons.FaBars />
          </Link>
        </div>
      </>
  )
}

export default Navbar;