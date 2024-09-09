import {Link} from 'react-router-dom'
import { useState } from 'react'




function DeliveryPage() {

    var preco = 5

    
    // const [optionChecked, setOptionChecked] = useState([])

    // const checkboxChange = (event) => { // o checkboxChange monitora as alterações de estado das checkbox

    //     const {value, checked} = event.target; // o 'value' é o value do input; o checked diz qual está marcado
    //     setOptionChecked ((prev) => { 
    //         if (checked) {
    //             return [...prev, value]; // os três pontos são chamados de operador "spread"
    //         } else {
    //             return prev.filter((item) => item !== value);
    //         }
    //         })
    //     }

    return (

      

        <>

        <h1>Tela pedido</h1>

        <table>
          <tr>
           <td>
            <div>Café</div>
           </td>

           <td>
            <div>
              <input type="Number"/>
            </div>
           </td>
          </tr>

        </table>


        <Link to = '/'>
            <button>Voltar</button>
        </Link>


        





        <p>Ok, então o senhor(a) irá desejar: </p>
        <p>No valor de: {preco} </p>


        {/* <section id='options'>

<div id='conteiner'>
  <ol>

    <li>
      <label htmlFor = 'ping'>Pingado</label>
      <input type='checkbox' id='ping' value = 'pingado' onChange={checkboxChange}></input>
    </li>


    <li>
      <label htmlFor = 'exp'>Espresso</label>
       <input type='checkbox' id='exp' value = 'expresso' onChange={checkboxChange}></input>
      </li>

      <li>
        <label htmlFor = 'lat'>Latte</label>
        <input type = 'checkbox' id = 'lat' value = 'latte' onChange={checkboxChange}></input>
      </li>

      <li>
        <label htmlFor = 'cap'>Cappucino</label>
        <input type = 'checkbox' id='cap' value = 'cappucino' onChange={checkboxChange}></input>
      </li>

      <li>
        <label htmlFor = 'moc'>Mocha</label>
        <input type = 'checkbox' id='moc' value = 'mocha' onChange={checkboxChange}></input>
      </li>

      <li>
        <label htmlFor = 'cbr'>Cold brew</label>
        <input type = 'checkbox' id='cbr' value = 'cbrew' onChange={checkboxChange}></input>
      </li>

      <li>
        <label htmlFor = 'fap'>Fapuccino</label>
        <input type="checkbox" id='fap' value = 'fapuccino' onChange={checkboxChange}></input>
      </li>

      <li>
        <label htmlFor = 'cge'>Café gelado</label>
        <input type="checkbox" id='cge' value = 'café Gelado' onChange={checkboxChange}/>
      </li>

      <li>
        <label htmlFor = 'expt'>Expresso tônica</label>
        <input type='checkbox' id='expt' value = 'expresso Tonica' onChange={checkboxChange}></input>
      </li>

      <li>
        <label htmlFor = 'cfg'>Café gelado</label>
        <input type = 'checkbox' id = 'cfg' value = 'cafe Gelado' onChange={checkboxChange}></input>
      </li>

   
  </ol>

  <div id='box'>
   

    <button onClick ={() => console.log(optionChecked)}>ir</button>

  </div>

</div>

</section> */}

        
        </>


    )
}

export default DeliveryPage