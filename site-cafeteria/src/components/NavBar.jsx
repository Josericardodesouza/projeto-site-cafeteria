import {Link} from 'react-router-dom'
import '../styles/navbar-modules.css'
import '../styles/colorsAndFonts-module.css'
import { IoIosMenu } from 'react-icons/io'
import SideMenu from './SideMenu'
import { DiCoffeescript } from 'react-icons/di'






function NavBar() {
    return (
       
    <nav>
      <div id='nav_img'>
        
          <DiCoffeescript />
        
        {/* <a href="#">Cafeteria</a> */}
      </div>

      <div id='box_links'>
        <a>Quem somos</a>
        <a>Cardápio</a>
        <a>Avaliações</a>
        <Link to = '/about'>Contato</Link>
      </div>


      <button id='nav' onClick={SideMenu}>

      <IoIosMenu size={40} />
       
      </button>

    </nav>

    )
}

export default NavBar