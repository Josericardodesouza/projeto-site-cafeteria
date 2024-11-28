import { Link } from 'react-router-dom'
import { BsShop } from 'react-icons/bs'
import { BiFoodMenu } from 'react-icons/bi'
import { TbStars } from 'react-icons/tb'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
// import { IoIosMenu } from 'react-icons/io'
//  import SideMenu from './SideMenu'

import '../styles/navbar-modules.css'



function NavBarHome({ scrollAboutUs, scrollMenus, scrollEvaluations }) {

  return (

    <>
      <nav id="navBar_scrolls" className="navBar">

        <ul className="navBar_list">
          
          <li className="navBar_item">
            <label for="input-1">

              <input type="radio" id="input-1" name="group" checked />

              <span className="btn">
                <span className="btn-icon">
                  <BsShop  />
                </span>
                <span className="btn-text">
                  <a href="#" onClick= {scrollAboutUs}>Quem Somos</a>
                </span>
              </span>




            </label>

          </li>

          <li className="nav-item">
            <label for="input-2">

              <input type="radio" id="input-2" name="group" />

              <span className="btn">
                <span className="btn-icon">
                  <BiFoodMenu  />
                </span>
                <span className="btn-text">
                  <a href="#" onClick={scrollMenus}>Cardápio</a>

                </span>
              </span>
            </label>

          </li>


          <li className="nav-item">
            <label for='input-3'>

              <input type="radio" id="input-3" name="group" />

              <span className="btn">
                <span className="btn-icon">
                  <TbStars  />
                </span>
                <span className="btn-text">
                  <a href="#" onClick={scrollEvaluations}>Avaliações</a>

                </span>
              </span>

            </label>

          </li>

          <li className="nav-item">
            <label for='input-4'>

              <input type="radio" id="input-4" name="group" />

              <span className="btn">
                <span className="btn-icon">
                  <MdOutlineEmail  />
                </span>
                <span className="btn-text">
                  <Link to='/about'>Contato</Link>
                </span>
              </span>


            </label>

          </li>

        </ul>
































        {/* <div id='conteiner_links_nav'>

              <div id='testeIcon'>

                <input type='radio' id='input-1' name='group' checked></input>
               
                <span>
                  <BsShop />
                </span>

              </div>
             
             <div className='box_links_nav'>
               <a id='btn_aboutUs' className='btns_nav' >
                 <BsShop />
               </a>
               </div>
             
             <div className='box_links_nav'>
               <BiFoodMenu />
               <a id='btn_menus' className='btns_nav' >Cardápio</a>
               </div>
             
             <div className='box_links_nav'>
               <TbStars />
               <a id='btn_ev' className = 'btns_nav' >Avaliações</a>
               </div>
             
             <div className='box_links_nav'>
               <MdOutlineEmail />
               <Link to = '/about' className = 'btns_nav'>Contato</Link>
             </div>
             </div> */}
      </nav>
    </>
  )
}

export default NavBarHome