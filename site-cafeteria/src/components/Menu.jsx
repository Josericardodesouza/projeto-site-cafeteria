import {Link} from 'react-router-dom'
import { useState } from 'react'

function Menu() {

    const [option, setOption] = useState('')

    





    

    return (
        <section id='menu'>

        <div id='conteiner'>
          <ol>

            <li>
              <label htmlFor = 'ping'>Pingado</label>
              <input type='checkbox' id='ping' value = 'pingado' onChange={}></input>
            </li>


            <li>
              <label htmlFor = 'exp'>Espresso</label>
               <input type='checkbox' id='exp' value = 'expresso'></input>
              </li>

              <li>
                <label htmlFor = 'lat'>Latte</label>
                <input type = 'checkbox' id = 'lat' value = 'latte'></input>
              </li>

              <li>
                <label htmlFor = 'cap'>Cappucino</label>
                <input type = 'checkbox' id='cap' value = 'cappucino'></input>
              </li>

              <li>
                <label htmlFor = 'moc'>Mocha</label>
                <input type = 'checkbox' id='moc' value = 'mocha'></input>
              </li>

              <li>
                <label htmlFor = 'cbr'>Cold brew</label>
                <input type = 'checkbox' id='cbr' value = 'cbrew'></input>
              </li>

              <li>
                <label htmlFor = 'fap'>Fapuccino</label>
                <input type="checkbox" id='fap' value = 'fapuccino'></input>
              </li>

              <li>
                <label htmlFor = 'cge'>Café gelado</label>
                <input type="checkbox" id='cge' value = 'caféGelado'/>
              </li>

              <li>
                <label htmlFor = 'expt'>Expresso tônica</label>
                <input type='checkbox' id='expt' value = 'expressoTonica'></input>
              </li>

              <li>
                <label htmlFor = 'cfg'>Café gelado</label>
                <input type = 'checkbox' id = 'cfg' value = 'cafeGelado'></input>
              </li>

           
          </ol>

          <div id='box'>
            <Link to = '/deliverypage'>
            <button>Fazer pedido</button>
            </Link>

            <button onClick={teste}>ir</button>

          </div>

        </div>

      </section>
    )


}


export default Menu