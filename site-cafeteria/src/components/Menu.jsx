import {Link} from 'react-router-dom'

function Menu() {

    return (
        <section id='menu'>

        <div id='conteiner'>
          <ol>

            <li>
              <label for = 'ping'>Pingado</label>
              <input type='checkbox' id='ping' value = 'pingado'></input>
            </li>


            <li>
              <label for = 'exp'>Espresso</label>
               <input type='checkbox' id='exp' value = 'expresso'></input>
              </li>

              <li>
                <label for = 'lat'>Latte</label>
                <input type = 'checkbox' id = 'lat' value = 'latte'></input>
              </li>

              <li>
                <label for = 'cap'>Cappucino</label>
                <input type = 'checkbox' id='cap' value = 'cappucino'></input>
              </li>

              <li>
                <label for = 'moc'>Mocha</label>
                <input type = 'checkbox' id='moc' value = 'mocha'></input>
              </li>

              <li>
                <label for = 'cbr'>Cold brew</label>
                <input type = 'checkbox' id='cbr' value = 'cbrew'></input>
              </li>

              <li>
                <label for = 'fap'>Fapuccino</label>
                <input type="checkbox" id='fap' value = 'fapuccino'></input>
              </li>

              <li>
                <label for = 'cge'>Café gelado</label>
                <input type="checkbox" id='cge' value = 'caféGelado'/>
              </li>

              <li>
                <label for = 'expt'>Expresso tônica</label>
                <input type='checkbox' id='expt' value = 'expressoTonica'></input>
              </li>

              <li>
                <label for = 'cfg'>Café gelado</label>
                <input type = 'checkbox' id = 'cfg' value = 'cafeGelado'></input>
              </li>

           
          </ol>

          <div id='box'>
            <Link to = '/deliverypage'>
            <button>Fazer pedido</button>
            </Link>

          </div>

        </div>

      </section>
    )
}

export default Menu