import {Link} from 'react-router-dom'


function NavBar() {
    return (
       
    <nav>
      <a>Quem somos</a>
      <a>Cardápio</a>
      <>Avaliações</>
      <Link to = '/about'>
      <a>Contato</a>
      </Link>
    </nav>

    )
}

export default NavBar