import '../styles/deliveryPage-modules.css'
import '../styles/colorsAndFonts-module.css'

import { hotDrinks, coldDrinks } from './ConstantsItens'
import { candyList } from './ConstantsItens'
import { Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import SendPage from './SendPage'



function DeliveryPage() {

  var input = document.getElementById('ent-adressUser')

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
    <main>


       
        <table>
        {hotDrinks.map(cafes => (
          <tr key={cafes.id}>
            <td className = 'dp_img'><img src= {cafes.img} /></td>
            <td className = 'dp_item'>{cafes.name}</td>
            <td className = 'dp_price'>{cafes.price}</td>
          </tr>
          ))}

        </table>

        <table>
          {candyList.map(doces => (
            <tr key={doces.id}>
              <td className='dp_img'><img src={doces.img}/></td>
              <td className='dp_item'>{doces.name}</td>
              <td className='dp_price'>{doces.price}</td>

            </tr>
          ))}
        </table>

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
  )


}

export default DeliveryPage
 
