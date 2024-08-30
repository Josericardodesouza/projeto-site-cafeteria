import {Link} from 'react-router-dom'
import '../styles/menu-module.css'


function Menu() {

  return (
    <>

    <div className='item'>
      <p>Café Expresso</p>
      <p>R$ 2,50</p>

    </div>


<Link to = '/deliverypage'>
    <button>Fazer pedido</button>
    </Link>
    
    </>
  )
      


}


export default Menu