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

const coado = hotDrinks.find(coffee => coffee.name = coado)
const cappuccino = hotDrinks.find(coffee => coffee.name = cappuccino)
const espresso = hotDrinks.find(coffee => coffee.name = espresso)
const latte = hotDrinks.find(coffee => coffee.name = latte)
const mocha = hotDrinks.find(coffee => coffee.name = mocha)
const pingado = hotDrinks.find(coffee => coffee.name = pingado)

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

          <img src= {coado.img} />
          <p>{coado.name}</p>
          <p>{coado.price}</p>

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
 
