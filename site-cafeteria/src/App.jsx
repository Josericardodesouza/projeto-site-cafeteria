import { useState } from 'react'
import './App.css'
import './styles/colorsAndFonts-module.css'
import {Link} from 'react-router-dom'
import {SwiperSlide, Swiper} from 'swiper/react'
import 'swiper/swiper-bundle.css'
import {EffectCoverflow, Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'

import image1 from './assets/images/pexels-ekrulila-2307221.jpg'

function App() {

  
  
  return (
    <>
    <nav>
      <a href="">Quem somos</a>
      <a href="">Cardápio</a>
      <a href="">Avaliações</a>
      <a href="">Contato</a>
    </nav>

    <header>
      

    </header>

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

      <section id='evaluations'>
        <h3>Avaliações dos nossos clientes</h3>

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





        </Swiper>

        

      </section>



      <h1>Teste</h1>
      <h2>Teste</h2>
      <h3>Teste</h3>

    </main>

    <footer>

    </footer>
    
   
    </>
  )
}

export default App
