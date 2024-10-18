import '../styles/deliveryPage-modules.css'
import '../styles/colorsAndFonts-module.css'

import { hotDrinks, coldDrinks } from './ConstantsItens'
import { candyList } from './ConstantsItens'
import { Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import SendPage from './SendPage'
import NavBar from './NavBar'
import SimpleNavBar from './SimpleNavBar'
import MenuCoffee from './MenuCoffee'

const coado = hotDrinks.find(coffee => coffee.name === 'coado')

const cappuccino = hotDrinks.find(coffee => coffee.name === 'Cappuccino')

const espresso = hotDrinks.find(coffee => coffee.name === 'Espresso')

const latte = hotDrinks.find(coffee => coffee.name === 'Latte')

const mocha = hotDrinks.find(coffee => coffee.name === 'Mocha')

const pingado = hotDrinks.find(coffee => coffee.name === 'Pingado')

import Footer from '../components/Footer'



function DeliveryPage() {

  var input = document.getElementById('ent-adressUser')



  const displayHotDrinks = () => {
    var btn = document.getElementById('buttonExibir')
    var div = document.getElementById('exibir')

  
      

      if (div.style.display == 'block') {
        div.style.display = 'none'
      } else {
        div.style.display = 'block'
      }

      

    
  }

  const [quantity, setQuantity] = useState ({
    inputCoado: 0,
    inputCappuccino: 0,
    inputEspresso: 0,
    inputLatte: 0,
    inputMocha: 0,
    inputPingado: 0


  })

  const addQuantity = (key) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity, [key]: prevQuantity[key] + 1
    }))
  }

const subQuantity = (key) => {
  setQuantity((prevQuantity) => ({
    ...prevQuantity, [key]: prevQuantity[key] > 0 ? prevQuantity[key] - 1 : 0

  }))
}




  const [adressUser, setAdressUser] = useState ({
    state: '',
    city: '',
    neighborhood: '',
    street: ''


  })
 

  const localSearch = (e) => { 
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data =>{

     
      console.log(data)

      setAdressUser ({

        state: data.estado,
        city: data.localidade,
        neighborhood: data.bairro,
        street: data.logradouro

      })


      Navigate('/sendPage')


      const state = data.estado 
      const city = data.localidade 
      const neighborhood = data.bairro 
      const street = data.logradouro


      document.getElementById('output_uf').innerHTML = `Estado: ${state}`
      document.getElementById('output_city').innerHTML = `Cidade: ${city}`
      document.getElementById('output_neighborhood').innerHTML = `Bairro: ${neighborhood}`
      document.getElementById('output_street').innerHTML = `Rua: ${street}`



     


   
        
  })


}
  


  return (

    <>
   


    

    <header id='header_deliveryPage'>
    <SimpleNavBar />

    </header>


    <main>

      <section id='deliveryItens'>
        <button id='buttonExibir'>Bebidas Quentes</button>
        <div id='exibir'>Oi</div>

        <div className='deliveryItem'>

          <img src= {coado.img} alt= 'imagem café coado' />
          <p>{coado.name}</p>
          <p>{coado.price}</p>
          <div className='quantity_input'>

            <button onClick={() => addQuantity('inputCoado')}>+</button>
            <input type='number' id='input_add_coado' value={quantity.inputCoado}/>
            <button onClick={() => subQuantity('inputCoado')}>-</button>
            <button>confirmar</button>

          </div>

        </div>

        <div className='deliveryItem'>

          <img src= {cappuccino.img} alt='imagem café cappuccino' />
          <p>{cappuccino.name}</p>
          <p>{cappuccino.price}</p>
          <div className='quantity_input'>

            <button onClick={() => addQuantity('inputCappuccino')}>+</button>
            <input type="number" value={quantity.inputCappuccino} />
            <button onClick={() => subQuantity('inputCappuccino')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>

          <img src= {espresso.img} alt='imagem café espresso' />
          <p>{espresso.name}</p>
          <p>{espresso.price}</p>

          <div className='quantity_input'>

            <button onClick={() => addQuantity('inputEspresso')}>+</button>
            <input type="number" value={quantity.inputEspresso} />
            <button onClick={() => subQuantity('inputEspresso')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>

          <img src= {latte.img} alt='imagem café latte' />
          <p>{latte.name}</p>
          <p>{latte.price}</p>

          <div className='quantity_input'>

            <button onClick={() => addQuantity('inputLatte')}>+</button>
            <input type="number" value={quantity.inputLatte} />
            <button onClick={() => subQuantity('inputLatte')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>
          <img src={mocha.img} alt='imagem café mocha' />
          <p>{mocha.name}</p>
          <p>{mocha.price}</p>
          
          <div className='quantity_input'>
            <button onClick={() => addQuantity('inputMocha')}>+</button>
            <input type="number" value={quantity.inputMocha} />
            <button onClick={() => subQuantity('inputMocha')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>
          <img src={pingado.img} alt="imagem café pingado" />
          <p>{pingado.name}</p>
          <p>{pingado.price}</p>

          <div className='quantity_input'>
            <button onClick={() => addQuantity('inputPingado')}>+</button>
            <input type="number" value={quantity.inputPingado} />
            <button onClick={() => subQuantity('inputPingado')}>-</button>

          </div>
        </div>


        



      </section>

     


       
       

          <label htmlFor="user_name">Digite seu nome</label>
        <input id='user_name' name='user_name'></input>

        <label htmlFor="ent_adressUser"> Insira seu CEP</label>
          <input type='text' id='ent_adressUser' name='ent_adressUser' onBlur={localSearch}></input>
          <SendPage adressUser={adressUser} />
         

          <p id='output_uf'>{adressUser.state}</p>
          <p id='output_city'></p>
          <p id='output_neighborhood'></p>
          <p id='output_street'></p>
       

        <Link to = '/sendpage'>Concluir pedido</Link>
         
      
        
       
        


      
      

      <div>
        <img /> 
        <ul>
          <li></li>
        </ul>


      </div>
    
    
    
    
    
    </main>

    <Footer />

    


    </>
  )


}

export default DeliveryPage
 
