import {Link} from 'react-router-dom'
import '../styles/navbar-modules.css'


function NavBar() {
    return (
       
    <nav>
      <a>Quem somos</a>
      <a>Cardápio</a>
      <a>Avaliações</a>
      <Link to = '/about'>Contato</Link>
    </nav>

    )
}

export default NavBar