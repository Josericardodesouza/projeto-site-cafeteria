import {Link} from 'react-router-dom'
import '../styles/navbar-modules.css'
import '../styles/colorsAndFonts-module.css'
import { IoIosMenu } from 'react-icons/io'
import SideMenu from './SideMenu'
import { DiCoffeescript } from 'react-icons/di'






function NavBar({scrollAboutUs, scrollMenus, scrollEvaluations}) {


    return (
       
    <nav>
      <div id='nav_img'>
        
          <DiCoffeescript />
        
        {/* <a href="#">Cafeteria</a> */}
      </div>

      <div id='box_links'>
        <a id='btn_aboutUs' className='btns_nav' onClick= {scrollAboutUs}>Quem somos</a>
        <a id='btn_menus' className='btns_nav' onClick={scrollMenus}>Cardápio</a>
        <a id='btn_ev' className = 'btns_nav' onClick={scrollEvaluations}>Avaliações</a>
        <Link to = '/about' className = 'btns_nav'>Contato</Link>
      </div>


      <button id='nav' onClick={SideMenu}>

      <IoIosMenu size={40} />
       
      </button>

    </nav>

    )
}

export default NavBar