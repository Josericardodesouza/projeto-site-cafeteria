import { useState } from 'react'
import './App.css'
import './styles/colorsAndFonts-module.css'
import {Link} from 'react-router-dom'
import {SwiperSlide, Swiper} from 'swiper/react'
import 'swiper/swiper-bundle.css'
import {EffectCoverflow, Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'

import image1 from './assets/images/pexels-ekrulila-2307221.jpg'

import testeImg1 from './assets/images/testeSlide/pexels-8moments-3264706.jpg'
import testeImg2 from './assets/images/testeSlide/pexels-graeme-travers-637657729-26820674.jpg'
import testeImg3 from './assets/images/testeSlide/pexels-jimmy-1233438433-26851738.jpg'
import testeImg4 from './assets/images/testeSlide/pexels-neujus-26795366.jpg'
import testeImg5 from './assets/images/testeSlide/pexels-peter-mansson-1522474240-27143629.jpg'
import NavBar from './components/NavBar'
import Menu from './components/Menu'

function App() {



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

  
  
  return (
    <>
   

    <header>
      
      <NavBar />
     
      

    </header>


<Menu />


    <main>
      <section id='about'>

        <div id='box1' className='box_txtimg'>
          <p className='p-box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint expedita dolorum debitis ipsum, unde provident fugit corrupti odit numquam quidem rem ratione fugiat nostrum dolorem, necessitatibus, amet minima ipsam.</p>

          <img src={image1}></img>
          
         

        </div>

        <div id='box2' className='box_txtimg'>

        </div>

        <div id='box3' className='box_txtimg'>

        </div>

      </section>


      <Link to = 'menucoffee'>Cafés</Link>
      <Link to = 'menucandy'>Doces</Link>

      
     

      <section id='evaluations'>
        <h3>Melhores avaliações de clientes</h3>

        {/* Swiper area */}

        <Swiper

          modules={ [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}

          spaceBetween={20}
          slidesPerView={3}
          navigation
          Pagination = {{clickable: true}}
          scrollbar = {{draggable: true}}
          effect= {'coverflow'}
          coverflowEffect= { {

            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false


          } }
        >

          <SwiperSlide>

            <img src={testeImg1}></img>


          </SwiperSlide>

          <SwiperSlide>
            <img src = {testeImg2}></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src = {testeImg3}></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src = {testeImg4}/>
          </SwiperSlide>

          <SwiperSlide>
            <img src = {testeImg5}/>
          </SwiperSlide>





        </Swiper>

        

      </section>



      <h1>Teste</h1>
      <h2>Teste</h2>
      <h3>Teste</h3>

    </main>

    <footer>

      <p>Projeto desenvolvido por &copy; José R. de Souza</p>
      <a>GitHub</a>
      <a>Instagram</a>

    </footer>
    
   
    </>
  )
}

export default App
