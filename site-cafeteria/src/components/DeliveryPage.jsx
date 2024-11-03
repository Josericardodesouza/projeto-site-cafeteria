import '../styles/deliveryPage-modules.css'
import '../styles/colorsAndFonts-module.css'

import { hotDrinks, coldDrinks} from './ConstantsItens'
import { typesBrigadeiro, typesBrownies,typesCookies,typesCupcakes,typesPie} from './ConstantsItens'
import { candyList } from './ConstantsItens'
import { Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import ItensListDelivery from './ItensListDelivery'
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
const expTonico = coldDrinks.find(coldDrink => coldDrink.name === 'Expresso Tônico')
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
  

  const coado_name = coado.name
  const coado_price = coado.price

  const cappuccino_name = cappuccino.name
  const cappuccino_price = cappuccino.price

  const espresso_name = espresso.name
  const espresso_price = espresso.price

  const latte_name = latte.name
  const latte_price = latte.price

  const mocha_name = mocha.name
  const mocha_price = mocha.price
  
  const pingado_name = pingado.name
  const pingado_price = pingado.price

  const cfGelado_name = cafeGelado.name
  const cfGelado_price = cafeGelado.price

  const coldBrew_name = coldBrew.name
  const coldBrew_price = coldBrew.price

  const expTonico_name = expTonico.name
  const expTonico_price = expTonico.price

  const frappuccino_name = frappuccino.name
  const frappuccino_price = frappuccino.price

  const cocoBrig_name = cocoBrigadeiro.name
  const cocoBrig_price = cocoBrigadeiro.price

  const mrgBrig_name = morangoBrigadeiro.name
  const mrgBrig_price = morangoBrigadeiro.price

  const lightBrig_name = lightBrigadeiro.name
  const lightBrig_price = lightBrigadeiro.price

  const cfBrownie_name = cafeBrownie.name
  const cfBrownie_price = cafeBrownie.price

  const chCookie_name = chocolateCookie.name
  const chCookie_price = chocolateCookie.price

  const chCupcake_name = chocolateCupcake.name
  const chCupcake_price = chocolateCookie.price

  const mrgCupcake_name = morangoCupcake.name
  const mrgCupcake_price = morangoCupcake.price

  const nozesCupcake_name = nozesCupcake.name
  const nozesCupcake_price = nozesCupcake.price

  const amdMaracujaPie_name = amendoaMaracujaPie.name
  const amdMaracujaPie_price = amendoaMaracujaPie.price

  const amendoimPie_name = amendoimPie.name
  const amendoimPie_price = amendoimPie.price

  const macaPie_name = macaPie.name
  const macaPie_price = macaPie.price

  const pssgPie_name = pessegoPie.name
  const pssgPie_price = pessegoPie.price







  



   // const 

   
  

  console.log(`é o ${coado_name} e o ${cappuccino_name}`)



  const [itensProperties, setItensProperties] = useState ({
    


    inputCoado: {quant: 0, name: coado_name, price: coado_price},
    inputCappuccino: {quant: 0, name: cappuccino_name, price: cappuccino_price},

    inputEspresso: {quant: 0, name: espresso_name, price: espresso_price},

    inputLatte: {quant: 0, name: latte_name, price: latte_price},

    inputMocha: {quant: 0, name: mocha_name, price: mocha_price},

    inputPingado: {quant: 0, name: pingado_name, price: pingado_price},

    inputCafeGelado: {quant: 0, name: cfGelado_name, price: cfGelado_price},

    inputColdBrew: {quant: 0, name: coldBrew_name, price: coldBrew_price},

    inputExpTonico: {quant: 0, name: expTonico_name, price: expTonico_price},

    inputFrappuccino: {quant: 0, name: frappuccino_name, price: frappuccino_price},

    inputCocoBrig: {quant: 0, name: cocoBrig_name, price: cocoBrig_price},

    inputMrgBrig: {quant: 0, name: mrgBrig_name, price: mrgBrig_price},

    inputLightBrig: {quant: 0, name: lightBrig_name, price: lightBrig_price},

    inputCafeBrownie: {quant: 0, name: cfBrownie_name, price: cfBrownie_price},

    inputChCookie: {quant: 0, name: chCookie_name, price: chCookie_price},

    inputChCupcake: {quant: 0, name: chCupcake_name, price: chCookie_price},

    inputMrgCupcake: {quant: 0, name: mrgCupcake_name, price: mrgBrig_price},

    inputNozesCupcake: {quant: 0, name: nozesCupcake_name, price: nozesCupcake_price},

    input_amendoaMaracujaPie: {quant: 0, name: amdMaracujaPie_name, price: amdMaracujaPie_price},

    input_amendoimPie: {quant: 0, name: amendoimPie_name, price: amendoimPie_price},

    input_macaPie: {quant: 0, name: macaPie_name, price: macaPie_price},

    input_pessegoPie: {quant: 0, name: pssgPie_name, price: pssgPie_price}


    


  })




  const addQuantity = (key) => {
    setItensProperties((prevQuantity) => ({
      ...prevQuantity, [key]: {
        ...prevQuantity[key],
      quant: prevQuantity[key].quant + 1

  }}))
  }

const subQuantity = (key) => {
  setItensProperties((prevQuantity) => ({
    ...prevQuantity, [key]: {
      ...prevQuantity[key],
      quant: prevQuantity[key].quant > 0 ? prevQuantity[key].quant - 1 : 0

}
}))
}


const generateQuantityPhrase = (e) => {
  const {name, quantityItens} = e.target
  setItensProperties.quant((prevQuantity) => ({
    ...prevQuantity, [name]: {
    ...prevQuantity[name],
    quant: Number(quantityItens)
}}))
}

const renderListItemsSelected = () => {
  return Object.keys(itensProperties).map((key) => {
    if (itensProperties[key].quant > 1) {
      return <p key={key}>Você selecionou {itensProperties[key].quant} unidades de {itensProperties[key].name} no valor de {itensProperties[key].price}</p>
    }
    return null 
  } )
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
            <input type='number' id='input_add_coado' value={itensProperties.inputCoado.quant} onChange ={generateQuantityPhrase} />
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
            <input type="number" value={itensProperties.inputCappuccino.quant} />
            <button onClick={() => subQuantity('inputCappuccino')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>

          <img src= {espresso.img} alt='imagem café espresso' />
          <p>{espresso.name}</p>
          <p>{espresso.price}</p>

          <div className='quantity_input'>

            <button onClick={() => addQuantity('inputEspresso')}>+</button>
            <input type="number" value={itensProperties.inputEspresso.quant} />
            <button onClick={() => subQuantity('inputEspresso')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>

          <img src= {latte.img} alt='imagem café latte' />
          <p>{latte.name}</p>
          <p>{latte.price}</p>

          <div className='quantity_input'>

            <button onClick={() => addQuantity('inputLatte')}>+</button>
            <input type="number" value={itensProperties.inputLatte.quant} />
            <button onClick={() => subQuantity('inputLatte')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>
          <img src={mocha.img} alt='imagem café mocha' />
          <p>{mocha.name}</p>
          <p>{mocha.price}</p>
          
          <div className='quantity_input'>
            <button onClick={() => addQuantity('inputMocha')}>+</button>
            <input type="number" value= {itensProperties.inputMocha.quant} />
            <button onClick={() => subQuantity('inputMocha')}>-</button>

          </div>

        </div>

        <div className='deliveryItem'>
          <img src={pingado.img} alt="imagem café pingado" />
          <p>{pingado.name}</p>
          <p>{pingado.price}</p>

          <div className='quantity_input'>
            <button onClick={() => addQuantity('inputPingado')}>+</button>
            <input type="number" value={itensProperties.inputPingado.quant} />
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
            <input type="number" value={itensProperties.inputCafeGelado.quant} />
            <button onClick={() => subQuantity('inputCafeGelado')}>-</button>

          </div>
        </div>

          <div className='deliveryItem'>
            <img src={coldBrew.img} alt="imagem de um café Cold Brew" />
            <p>{coldBrew.name}</p>
            <p>{coldBrew.price}</p>

            <div className='quantity_input'>

              <button onClick={() => addQuantity('inputColdBrew')}>+</button>
              <input type="number" value={itensProperties.inputColdBrew.quant} />
              <button onClick={() => subQuantity('inputColdBrew')}>-</button>

            </div>
          </div>

          <div className='deliveryItem'>
            <img src={expTonico.img} alt="imagem de um expresso tônico"/>
            <p>{expTonico.name}</p>
            <p>{expTonico.price}</p>

            <div>
              <button onClick={() => addQuantity('inputExpTonico')}>+</button>
              <input type="number" value={itensProperties.inputExpTonico.quant} />
              <button onClick={() => subQuantity('inputExpTonico')}>-</button>

            </div>
          </div>

          <div className='deliveryItem'>
            <img src={frappuccino.img} alt="imagem de um frappuccino" />
            <p>{frappuccino.name}</p>
            <p>{frappuccino.price}</p>

            <div>
              <button onClick={() => addQuantity('inputFrappuccino')}>+</button>
              <input type="number" value={itensProperties.inputFrappuccino.quant} />
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

              <button onClick={() => addQuantity('inputCocoBrig')}>+</button>
              <input type="number" id='inputBrig' value ={itensProperties.inputCocoBrig.quant} readOnly />
              <button onClick={() => subQuantity('inputCocoBrig')}>-</button>

            </div>

            <div className='deliveryItem'>

              <img src= {morangoBrigadeiro.img} alt="imagem de brigadeiro de morango"/>
              <p>{morangoBrigadeiro.name}</p>
              <p>{morangoBrigadeiro.price}</p>

              <button onClick={() => addQuantity('inputMrgBrig')}>+</button>
              <input type="number" id='inputMrBrig' value={itensProperties.inputMrgBrig.quant} />
              <button onClick={() => subQuantity('inputMrgBrig')}>-</button>

            </div>

            <div className='deliveryItem'>

              <img src={lightBrigadeiro.img} alt="imagem de brigadeiro light"/>
              <p>{lightBrigadeiro.name}</p>
              <p>{lightBrigadeiro.price}</p>

              <button onClick={() => addQuantity('inputLightBrig')}>+</button>
              <input type="number" id='inputLightBrig' value={itensProperties.inputLightBrig.quant}/>
              <button onClick={() => subQuantity('inputLightBrig')}>-</button>

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

            <button onClick={() => addQuantity('inputCafeBrownie')}>+</button>
            <input type="number" id='inputCafeBrownie' value={itensProperties.inputCafeBrownie.quant} />
            <button onClick={() => subQuantity('inputCafeBrownie')}>-</button>

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

            <button onClick={() => addQuantity('inputChCookie')}>+</button>
            <input type="number" id='inputChCookie' value={itensProperties.inputChCookie.quant} />
            <button onClick={() => subQuantity('inputChCookie')}>-</button>

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

            <button onClick={() => addQuantity('inputChCupcake')}>+</button>
            <input type="number" id='inputChCupcake' value={itensProperties.inputChCupcake.quant} />
            <button onClick={() => subQuantity('inputChCupcake')}>-</button>

          </div>

          <div className='deliveryItem'>

            <img src={morangoCupcake.img} alt="imagem de um cupcake de morango"/>
            <p>{morangoCupcake.name}</p>
            <p>{morangoCupcake.price}</p>

            <button onClick={() => addQuantity('inputMrgCupcake')}>+</button>
            <input type="number" value={itensProperties.inputMrgCupcake.quant} />
            <button onClick={() => subQuantity('inputMrgCupcake')}>-</button>

          </div>

          <div className='deliveryItem'>

            <img src={nozesCupcake.img} alt="imagem de um cupcake de nozes" />
            <p>{nozesCupcake.name}</p>
            <p>{nozesCupcake.price}</p>

            <button onClick={() => addQuantity('inputNozesCupcake')}>+</button>
            <input type="number" value={itensProperties.inputNozesCupcake.quant} />
            <button onClick={() => subQuantity('inputNozesCupcake')}>-</button>

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

          <button onClick={() => addQuantity('input_amendoaMaracujaPie')}>+</button>
          <input type="number" value={itensProperties.input_amendoaMaracujaPie.quant} />
          <button onClick={() => subQuantity('input_amendoaMaracujaPie')}>-</button>



          </div>

          <div className='deliveryItem'>
            <img src={amendoimPie.img} alt="imagem de uma torta de amendoim"/>
            <p>{amendoimPie.name}</p>
            <p>{amendoimPie.price}</p>

            <button onClick={() => addQuantity('input_amendoimPie')}>+</button>
            <input type="number" value={itensProperties.input_amendoimPie.quant} />
            <button onClick={() => subQuantity('input_amendoimPie')}>-</button>

          </div>

          <div className='deliveryItem'>

          <img src={macaPie.img} alt="imagme de uma torta de amêndoa com maracujá" />
          <p>{macaPie.name}</p>
          <p>{macaPie.price}</p>

          <button onClick={() => addQuantity('input_macaPie')}>+</button>
          <input type="number" value={itensProperties.input_macaPie.quant} />
          <button onClick={() => subQuantity('input_macaPie')}>-</button>

          </div>

          <div className='deliveryItem'>

            <img src={pessegoPie.img} alt="imagem de uma torta de pêssego"/>
            <p>{pessegoPie.name}</p>
            <p>{pessegoPie.price}</p>

            <button onClick={() => addQuantity('input_pessegoPie')}>+</button>
            <input type="number" value={itensProperties.input_pessegoPie.quant} />
            <button onClick={() => subQuantity('input_pessegoPie')}>-</button>


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
          Teste
          <br />
          {/* {quantity.inputCafeBrownie} */}

        </div>

      <div id='box_phrases_quantity'>

       

        {renderListItemsSelected()}
        



      </div>
{/* 
  <ItensListDelivery quantity={quantity} />
  <ItensListDelivery /> */}



      
      
        
       
        


      
      

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


 
