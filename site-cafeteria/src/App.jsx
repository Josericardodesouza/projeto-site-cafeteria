import { useRef, useState } from 'react'
import './App.css'
import './styles/colorsAndFonts-module.css'
import {Link} from 'react-router-dom'



import image2 from './assets/images/pexels-og-mpango-1582361-4090603.jpg'
import image3 from './assets/images/pexels-michael-burrows-7125434.jpg'
import image4 from './assets/images/pexels-ekrulila-2307221.jpg'
import image5 from './assets/images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg'



import NavBar from './components/NavBar'
import Menu from './components/Menu'
import MenuCoffee from './components/MenuCoffee'
import MenuCandy from './components/MenuCandy'

import Footer from './components/Footer'


import cafeCoadoImg from './assets/images/cards-images/cafe-coado.jpeg'
import cafeGeladoImg from './assets/images/cards-images/cafe-gelado.jpeg'
import cappucinoImg from './assets/images/cards-images/pexels-andrew-peterson-113438-350478.jpg'
import coldBrewImg from './assets/images/cards-images/cold-brew.jpg'
import espressoImg from './assets/images/cards-images/pexels-raymond-petrik-1448389535-28320963-espresso.jpg'
import espressoTonicoImg from './assets/images/cards-images/coffee-4862622_1280-espressotonico.jpg'
import frappuccinoImg from './assets/images/cards-images/cafe-frappuccino.jpeg'
import latteImg from './assets/images/cards-images/latte-art-2431160_1280-latte.jpg'
import mochaImg from './assets/images/cards-images/cafe-mocha.jpeg'
import pingadoImg from './assets/images/cards-images/pingado.jpg'

import brigadeiroImg from './assets/images/cards-images/pexels-livilla-latini-1678510737-27850066-brigadeiro.jpg'
import brownieImg from './assets/images/cards-images/pexels-ella-olsson-572949-3026804-brownie.jpg'
import cookieImg from './assets/images/cards-images/pexels-sara-santos-381576-1020585-cookies.jpg'
import cupcake from './assets/images/cards-images/pexels-aqtai-635409-cupcake.jpg'
import paoDeMelImg from './assets/images/cards-images/pão-de-mel-caldeirao-bruxa-solar.jpeg'
import tortaImg from './assets/images/cards-images/kavya-p-k-zQ4jrYelvLs-unsplash-torta-maca.jpg'
import { CiCoffeeCup } from 'react-icons/ci'
import { useEffect } from 'react'
import MenuColdDrinks from './components/MenuColdDrinks'

import NavBarHome from './components/NavBarHome'



import Evaluations from './components/Evaluations'
import { UserNameContext } from './context/UserNameContext'

import { useContext } from 'react'
import { CommentContext } from './context/CommentContext'










function App() {









  const coffesImg = [cafeCoadoImg, cafeGeladoImg, cappucinoImg, coldBrewImg, espressoImg, espressoTonicoImg, frappuccinoImg, latteImg, mochaImg, pingadoImg
    ]



  // const menuLateral = () => {
  //   var menu = document.getElementById('menu_lateral')
  //   var btn = document.getElementById('btn_menu')
  
  //   console.log('passou')
  
  //   btn.addEventListener('click', function() {
  
  //     if (menu.style.display === 'none') {
  //       menu.style.display = 'block'
  //     } else {
  //       menu.style.display = 'none'
  //     }
  
  //   })
  
  
  
  
  
  
  // }


  
  const refSectionAboutUs = useRef(null)

  const scrollAboutUs = () => {


    if (refSectionAboutUs.current) {
      console.log('chamou a função')
      refSectionAboutUs.current.scrollIntoView({behavior: 'smooth'})
    }
  }



  const refDivButtonsMenus = useRef(null)

  const scrollMenus = () => {

    console.log('teste2')
   

    if (refDivButtonsMenus.current) {
      console.log('chamou 2a funcao')
      refDivButtonsMenus.current.scrollIntoView({behavior: 'smooth'})
    } else {
      console.log('este elemento não está passando')
    }

  }

  const refSectionEv = useRef(null)

  const scrollEvaluations = () => {

    if (refSectionEv.current) {

      console.log('teste3')
      refSectionEv.current.scrollIntoView({behavior: 'smooth'})
    } else {
      console.log('erro')
    }

  }
   
   

 
  

  



  const [activeComponent, setActiveComponent] = useState(null)

  const renderComponent = () => {
    
    switch (activeComponent) {

      case 'MenuCoffee':
        return <MenuCoffee />
       
       
      case 'MenuCandy':
        return <MenuCandy />

        case 'MenuColdDrinks':

        return <MenuColdDrinks />

      default:
        return <MenuCoffee />

      

    }
  }



  
  return (

    <>
   

    <header id='header'>
      <nav id='home_navBar'>
        <div className='box_navBarLinks'>
          <NavBar  />
        </div>
        <div className='box_navBarLinks'>
          <NavBarHome scrollAboutUs = {scrollAboutUs} scrollMenus = {scrollMenus} scrollEvaluations = {scrollEvaluations}/>
        </div>
      </nav>

     

      <div id='box_header'>
        <h1 id='title_header'>LOREM IPSUM COFFEE</h1>
        {/* span */}
        {/* <p id='text_header'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
      </div>
    </header>

   


    <main>

      {/* <button id='btn_scroll_to_header'>GO UP</button> */}



      <section id='aboutUs' ref={refSectionAboutUs}>
      <h1 className='title_box'>Um Pouco Sobre Nós</h1>

        <div id='conteiner_1' className='conteiner_txtimg'>
         
          <div className='box_text'>
            <h2 className='title_box'>Início de Tudo</h2>
            <p className='p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint expedita dolorum debitis ipsum, unde provident fugit corrupti odit numquam quidem rem ratione fugiat nostrum dolorem, necessitatibus, amet minima ipsam.</p>
          </div>
          <img className='img_aboutUs' src = {image2}/>
        </div>

        <div id='conteiner_2' className='conteiner_txtimg'>
          <div className = 'box_text'>
            <p className = 'p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et tempore ut nemo perspiciatis facilis quos fugiat exercitationem consequuntur expedita officiis, eaque qui quae molestiae optio rerum odit dolore quisquam!</p>
          </div>
          <img className = 'img_aboutUs' src = {image3}/>

        </div>

   

        <div id='conteiner_3' className='conteiner_txtimg'>
        <div className='box_text'>
          <h3 className='title_box'>Uma Arte de Café</h3>
            <p className = 'p_box'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam at autem? Recusandae quia, vitae voluptates ducimus tenetur iure cumque fugit similique dicta!</p>
        </div>
          <img className='img_aboutUs' src = {image4} />
        </div>

        <div id='conteiner_4' className = 'conteiner_txtimg'>
          <div className = 'box_text'>
            <p className = 'p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis ratione vel, nostrum fugit ad consequatur sit reprehenderit doloribus assumenda necessitatibus? Praesentium corporis, possimus unde eius obcaecati placeat tenetur. Tempore.</p>
          </div>
          <img className = 'img_aboutUs' src = {image5}/>

        </div>

      </section>


      <section>

        <div id='txt_div_pre_menu'>
          <p id='title_pre_menu' ref = {refDivButtonsMenus}>Confira abaixo nosso cardápio</p>
          <p id='p_pre_menu'>Escolha uma categoria e depois clique no item para ver suas informações</p>


        </div>


      </section>


      {/* <h3 className='title_box'>Confira nossos produtos com os melhores preços</h3> */}


      <div id='box_links_menu'>
        <button id='btn_cf' onClick={() => setActiveComponent('MenuCoffee')}>Bebidas quentes</button>
        <button id='btn_cg' onClick={() => setActiveComponent('MenuColdDrinks')}>Bebidas Geladas</button>
        <button id='btn_mc' onClick={() => setActiveComponent('MenuCandy')}>Doces</button>
      </div>

      <section id='render_menu'>
        {renderComponent()}
        </section>

      <Link to = '/deliveryPage'>
        <div id='goDeliveryPage'>
          <CiCoffeeCup />
          <p>Fazer um pedido</p>
        </div>
      </Link>



   
      <h3>Avaliados recentemente</h3>

      <section id='evaluations' ref = {refSectionEv}>

        <Evaluations />

      
   

      </section>




    </main>


<Footer />
    
   
    </>
  )
}

export default App
