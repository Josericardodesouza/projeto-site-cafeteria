import {Link} from 'react-router-dom'
import '../styles/navbar-modules.css'
import { IoIosMenu } from 'react-icons/io'
import SideMenu from './SideMenu'






function NavBar() {
    return (
       
    <nav>
      <div>
        <a href="#">Cafeteria</a>
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