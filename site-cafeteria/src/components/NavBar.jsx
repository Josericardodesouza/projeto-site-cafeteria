import {Link} from 'react-router-dom'
import '../styles/navbar-modules.css'
import '../styles/colorsAndFonts-module.css'
import { IoIosMenu } from 'react-icons/io'
import SideMenu from './SideMenu'
import { DiCoffeescript } from 'react-icons/di'
import { BsShop } from 'react-icons/bs'
import { BiFoodMenu } from 'react-icons/bi'
import { TbStars } from 'react-icons/tb'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'






function NavBar({scrollAboutUs, scrollMenus, scrollEvaluations}) {




    return (
       
    <nav>
      <div id='nav_img'>
        
          <DiCoffeescript />
        
        {/* <a href="#">Cafeteria</a> */}
      </div>

      <div id='conteiner_links_nav'>

        <div className='box_links_nav'>
          <BsShop />
          <a id='btn_aboutUs' className='btns_nav' onClick= {scrollAboutUs}>Quem somos</a>
          </div>

        <div className='box_links_nav'>
          <BiFoodMenu />
          <a id='btn_menus' className='btns_nav' onClick={scrollMenus}>Cardápio</a>
          </div>

        <div className='box_links_nav'>
          <TbStars />
          <a id='btn_ev' className = 'btns_nav' onClick={scrollEvaluations}>Avaliações</a>
          </div>

        <div className='box_links_nav'>
          <MdOutlineEmail />
          <Link to = '/about' className = 'btns_nav'>Contato</Link>
        </div>
      </div>


      {/* <button id='nav' onClick={SideMenu}>

      <IoIosMenu size={40} />
       
      </button> */}

    </nav>

    )
}

export default NavBar