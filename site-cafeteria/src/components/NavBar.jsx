import {Link} from 'react-router-dom'
import '../styles/navbar-modules.css'
import { IoIosMenu } from 'react-icons/io'



function NavBar() {
    return (
       
    <nav>
      <div>
        <a href="#">Cafeteria</a>
      </div>


      
        <button>
          <IoIosMenu size={40} />
        </button>


        <div id='menu_lateral'>
        <h1>Teste lateral</h1>
        <h1>Teste lateral</h1>


        </div>
      

      <div id='box_links'>
        <a>Quem somos</a>
        <a>Cardápio</a>
        <a>Avaliações</a>
        <Link to = '/about'>Contato</Link>
      </div>

    </nav>

    )
}

export default NavBar