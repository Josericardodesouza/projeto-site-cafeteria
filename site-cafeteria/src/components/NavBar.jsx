
import '../styles/defaultNavBar-module.css'
import '../styles/global-css/colorsAndFonts-module.css'

import { DiCoffeescript } from 'react-icons/di'
import { Link } from 'react-router-dom'







function NavBar() {




    return (
       
    <nav className='navBar' id='navBar_logo'>
      <div id='nav_icon_logo'>
          <DiCoffeescript />
          <Link to='/' id='title_nav'>Cantinho do Café</Link> 
      </div>

     


      {/* <button id='nav' onClick={SideMenu}>

      <IoIosMenu size={40} />
       
      </button> */}

    </nav>

    )
}

export default NavBar