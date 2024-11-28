
import '../styles/defaultNavBar-module.css'
import '../styles/colorsAndFonts-module.css'

import { DiCoffeescript } from 'react-icons/di'







function NavBar() {




    return (
       
    <nav className='navBar' id='navBar_logo'>
      <div id='nav_img'>
        
          <DiCoffeescript />
        
          <a href="#" id='title_nav'>Lorem Ipsum Coffee</a> 
      </div>

     


      {/* <button id='nav' onClick={SideMenu}>

      <IoIosMenu size={40} />
       
      </button> */}

    </nav>

    )
}

export default NavBar