import { useState } from 'react'
import './App.css'
import './styles/colorsAndFonts-module.css'

import image1 from './assets/images/pexels-ekrulila-2307221.jpg'

function App() {

  
  
  return (
    <>
    <nav>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>

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

          <div id='box'>
            <button></button>

          </div>

        </div>

      </section>

      <section id='evaluations'>

        {/* Swiper area */}

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
