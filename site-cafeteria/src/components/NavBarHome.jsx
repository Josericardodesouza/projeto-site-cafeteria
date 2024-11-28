import {Link} from 'react-router-dom'
import { BsShop } from 'react-icons/bs'
import { BiFoodMenu } from 'react-icons/bi'
import { TbStars } from 'react-icons/tb'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
// import { IoIosMenu } from 'react-icons/io'
//  import SideMenu from './SideMenu'

import '../styles/navbar-modules.css'



function NavBarHome({scrollAboutUs, scrollMenus, scrollEvaluations}) {
    return (
        <>
         <nav id='navBar_scrolls' className='navBar'>
             <div id='conteiner_links_nav'>

              <div id='testeIcon'>
                <input>
                  Sobre nós
                </input>
                <span>
                  <BsShop />
                </span>

              </div>
             
             <div className='box_links_nav'>
               <a id='btn_aboutUs' className='btns_nav' onClick= {scrollAboutUs}>
                 <BsShop />
               </a>
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
         </nav>
        </>
    )
}

export default NavBarHome