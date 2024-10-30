import '../styles/deliveryPage-modules.css'
import '../styles/colorsAndFonts-module.css'

import { hotDrinks, coldDrinks} from './ConstantsItens'
import { typesBrigadeiro, typesBrownies,typesCookies,typesCupcakes,typesPie} from './ConstantsItens'
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

const cafeGelado = coldDrinks.find(coldDrink => coldDrink.name === 'café gelado')
const coldBrew = coldDrinks.find(coldDrink => coldDrink.name === 'Cold Brew')
const expTônico = coldDrinks.find(coldDrink => coldDrink.name === 'Expresso Tônico')
const frappuccino = coldDrinks.find(coldDrink => coldDrink.name === 'Frappuccino')

// const chocolateBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Chocolate')
const cocoBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Coco')
const morangoBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Morango')
const lightBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Light')

const cafeBrownie = typesBrownies.find(candyTypes => candyTypes.name === 'Café')


const chocolateCookie = typesCookies.find(candyTypes => candyTypes.name === 'Chocolate')

const chocolateCupcake = typesCupcakes.find(candyTypes => candyTypes.name === 'Chocolate')
const morangoCupcake = typesCupcakes.find(candyTypes => candyTypes.name === 'Morango')
const nozesCupcake = typesCupcakes.find(candyTypes => candyTypes.name === 'Nozes')

const amendoaMaracujaPie = typesPie.find(candyTypes => candyTypes.name === 'Amêndoa com maracujá')
const amendoimPie = typesPie.find(candyTypes => candyTypes.name === 'Amendoim')
const macaPie = typesPie.find(candyTypes => candyTypes.name === 'Maçã')
const pessegoPie = typesPie.find(candyTypes => candyTypes.name === 'Pêssego')


import Footer from '../components/Footer'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { FaArrowUp, FaCartArrowDown } from 'react-icons/fa'



function DeliveryPage() {


  const [showDivItens, setShowDivItens] = useState ({
    divsHotDrinks: false,
    divsColdDrinks: false,
    divsCandies: false
    

  })

  const displayDivsItens = (key) => {{
    setShowDivItens((prevDivsItens) => ({
      ...prevDivsItens, [key] : !prevDivsItens [key]

    }))


  }}


  const [showDivsCandyTypes, setShowDivsCandyTypes] = useState ({

  })

  



  var input = document.getElementById('ent-adressUser')
  





  const [quantity, setQuantity] = useState ({
    inputCoado: 0,
    inputCappuccino: 0,
    inputEspresso: 0,
    inputLatte: 0,
    inputMocha: 0,
    inputPingado: 0,

    inputCafeGelado: 0,
    inputColdBrew: 0,
    inputExpTonico: 0,
    inputFrappuccino: 0

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

    <button id='exibir'>Aqui</button>


    <main>
     
   


    <div onClick={() => displayDivsItens('divsHotDrinks')}>
          <h2>Bebidas Quentes</h2>
          {showDivItens.divsHotDrinks ? <IoIosArrowUp /> : <IoIosArrowDown /> }
      </div>

    {showDivItens.divsHotDrinks && ( 

      <section className='deliveryItens' id='hotDrinks_section'>

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

    )}


       <div onClick={() => displayDivsItens('divsColdDrinks')}>
          <h2>Cafés Gelados</h2>
          {showDivItens.divsColdDrinks ? <IoIosArrowUp/> : <IoIosArrowDown />}
        </div>

    

   

        {showDivItens.divsColdDrinks && (

      <section className='deliveryItens' id='coldDrinks_section'>

        <div className='deliveryItem'>
          <img src={cafeGelado.img} alt="imagem café gelado"/>
          <p>{cafeGelado.name}</p>
          <p>{cafeGelado.price}</p>

          <div className='quantity_input'>

            <button onClick={() => addQuantity('inputCafeGelado')}>+</button>
            <input type="number" value={quantity.inputCafeGelado} />
            <button onClick={() => subQuantity('inputCafeGelado')}>-</button>

          </div>
        </div>

          <div className='deliveryItem'>
            <img src={coldBrew.img} alt="imagem de um café Cold Brew" />
            <p>{coldBrew.name}</p>
            <p>{coldBrew.price}</p>

            <div className='quantity_input'>

              <button onClick={() => addQuantity('inputColdBrew')}>+</button>
              <input type="number" value={quantity.inputColdBrew} />
              <button onClick={() => subQuantity('inputColdBrew')}>-</button>

            </div>
          </div>

          <div className='deliveryItem'>
            <img src={expTônico.img} alt="imagem de um expresso tônico"/>
            <p>{expTônico.name}</p>
            <p>{expTônico.price}</p>

            <div>
              <button onClick={() => addQuantity('inputExpTonico')}>+</button>
              <input type="number" value={quantity.inputExpTonico} />
              <button onClick={() => subQuantity('inputExpTonico')}>-</button>

            </div>
          </div>

          <div className='deliveryItem'>
            <img src={frappuccino.img} alt="imagem de um frappuccino" />
            <p>{frappuccino.name}</p>
            <p>{frappuccino.price}</p>

            <div>
              <button onClick={() => addQuantity('inputFrappuccino')}>+</button>
              <input type="number" value={quantity.inputFrappuccino} />
              <button onClick={() => subQuantity('inputFrappuccino')}>-</button>

            </div>
          </div>

          
      </section>
        )}

    

        <h1>Doces</h1>
        <div className='title_section' onClick={() => displayDivsItens('divsCandies')}>
          <h2>Brigadeiros</h2>

        </div>

          <section className='deliveryItens'>

            <div className='deliveryItem'>

              <img src= {cocoBrigadeiro.img} alt='imagem de brigadeiro de coco' />
              <p>{cocoBrigadeiro.name}</p>
              <p>{cocoBrigadeiro.price}</p>

            </div>

            <div className='deliveryItem'>

              <img src= {morangoBrigadeiro.img} alt="imagem de brigadeiro de morango"/>
              <p>{morangoBrigadeiro.name}</p>
              <p>{morangoBrigadeiro.price}</p>

            </div>

            <div className='deliveryItem'>

              <img src={lightBrigadeiro.img} alt="imagem de brigadeiro light"/>
              <p>{lightBrigadeiro.name}</p>
              <p>{lightBrigadeiro.price}</p>

            </div>

          </section>

          
        <div className='title_section' onClick={() => displayDivsItens('divsCandies')}>
          <h2>Brownies</h2>
        </div>

        <section className='deliveryitens'>
          
          <div className='deliveryItem'>

            <img src={cafeBrownie.img} alt="imagem de um brownie de café"/>
            <p>{cafeBrownie.name}</p>
            <p>{cafeBrownie.price}</p>

          </div>

        </section>

        <div className='title_section' onClick={() => displayDivsItens('divsCandies')}>
          <h2>Cookies</h2>
        </div>

        <section className='deliveryItens'>

          <div className='deliveryItem'>
            <img src={chocolateCookie.img} alt="imagem de um cookie de chocolate"/>
            <p>{chocolateCookie.name}</p>
            <p>{chocolateCookie.price}</p>

          </div>

        </section>

        <div className='title_section' onClick={() => displayDivsItens('divsCandies')}>
          <h2>Cupcakes</h2>
        </div>

        <section className='deliveryItens'>

          <div className='deliveryItem'>
            <img src={chocolateCupcake.img} alt="imagem de cupcake de chocolate"/>
            <p>{chocolateCupcake.name}</p>
            <p>{chocolateCupcake.price}</p>

          </div>

          <div className='deliveryItem'>

            <img src={morangoCupcake.img} alt="imagem de um cupcake de morango"/>
            <p>{morangoCupcake.name}</p>
            <p>{morangoCupcake.price}</p>

          </div>

          <div className='deliveryItem'>

            <img src={nozesCupcake.img} alt="imagem de um cupcake de nozes" />
            <p>{nozesCupcake.name}</p>
            <p>{nozesCupcake.price}</p>

          </div>

        </section>

        <div className='title_section' onClick={() => displayDivsItens('divsCandies')}>
          <h2>Tortas</h2>
        </div>

        <section className='deliveryItens'>

        <div className='deliveryItem'>

          <img src={amendoaMaracujaPie.img} alt="imagem de uma torta de maçã"/>
          <p>{amendoaMaracujaPie.name}</p>
          <p>{amendoaMaracujaPie.price}</p>

          </div>

          <div className='deliveryItem'>
            <img src={amendoimPie.img} alt="imagem de uma torta de amendoim"/>
            <p>{amendoimPie.name}</p>
            <p>{amendoimPie.price}</p>

          </div>

          <div className='deliveryItem'>

          <img src={macaPie.img} alt="imagme de uma torta de amêndoa com maracujá" />
          <p>{macaPie.name}</p>
          <p>{macaPie.price}</p>

          </div>

          <div className='deliveryItem'>

            <img src={pessegoPie.img} alt="imagem de uma torta de pêssego"/>
            <p>{pessegoPie.name}</p>
            <p>{pessegoPie.price}</p>
          </div>

        </section>

       
        

    

     


       
       

          <label htmlFor="user_name">Digite seu nome</label>
        <input id='user_name' name='user_name'></input>

        <label htmlFor="ent_adressUser"> Insira seu CEP</label>
          <input type='text' id='ent_adressUser' name='ent_adressUser' onBlur={localSearch}></input>
         
         

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
 
