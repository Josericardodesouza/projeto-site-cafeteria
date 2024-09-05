import { useRef, useState } from 'react'
import './App.css'
import './styles/colorsAndFonts-module.css'
import {Link} from 'react-router-dom'
import {SwiperSlide, Swiper} from 'swiper/react'
import 'swiper/swiper-bundle.css'
import {EffectCoverflow, Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'


import image2 from './assets/images/pexels-og-mpango-1582361-4090603.jpg'
import image3 from './assets/images/pexels-michael-burrows-7125434.jpg'
import image4 from './assets/images/pexels-ekrulila-2307221.jpg'
import image5 from './assets/images/coffee-7561288_1920.jpg'

import testeImg1 from './assets/images/testeSlide/pexels-8moments-3264706.jpg'
import testeImg2 from './assets/images/testeSlide/pexels-graeme-travers-637657729-26820674.jpg'
import testeImg3 from './assets/images/testeSlide/pexels-jimmy-1233438433-26851738.jpg'
import testeImg4 from './assets/images/testeSlide/pexels-neujus-26795366.jpg'
import testeImg5 from './assets/images/testeSlide/pexels-peter-mansson-1522474240-27143629.jpg'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import MenuCoffee from './components/MenuCoffee'
import MenuCandy from './components/MenuCandy'


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

  

  



  const [activeComponent, setActiveComponent] = useState(null)

  const renderComponent = () => {
    
    switch (activeComponent) {

      case 'MenuCoffee':
        return <MenuCoffee />
       
       
      case 'MenuCandy':
        return <MenuCandy />

      

    }
  }



  
  
  return (

    <>
   

    <header>
      <NavBar scrollAboutUs = {scrollAboutUs} scrollMenus = {scrollMenus} />

     

      <div id='box_header'>
        <h1 id='title_header'>LOREM IPSUM COFFEE</h1>
        {/* span */}
        <p id='text_header'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        
      </div>

    </header>


<Menu />


    <main>
      <section id='aboutUs' ref={refSectionAboutUs}>

        <div id='box1' className='box_txtimg'>
          <p className='p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint expedita dolorum debitis ipsum, unde provident fugit corrupti odit numquam quidem rem ratione fugiat nostrum dolorem, necessitatibus, amet minima ipsam.</p>
          <img src = {image2}/>
        </div>

        <div id='box2' className='box_txtimg'>
          <p className = 'p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et tempore ut nemo perspiciatis facilis quos fugiat exercitationem consequuntur expedita officiis, eaque qui quae molestiae optio rerum odit dolore quisquam!</p>
          <img src = {image3}/>

        </div>

        <div id='box3' className='box_txtimg'>
          <p className = 'p_box'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam at autem? Recusandae quia, vitae voluptates ducimus tenetur iure cumque fugit similique dicta!</p>
          <img src = {image4} />
        </div>

        <div id='box4' className = 'box_txtimg'>
          <p className = 'p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis ratione vel, nostrum fugit ad consequatur sit reprehenderit doloribus assumenda necessitatibus? Praesentium corporis, possimus unde eius obcaecati placeat tenetur. Tempore.</p>
          <img src = {image5}/>

        </div>

      </section>


      <div id='box_links_menu' ref = {refDivButtonsMenus}>
        <button onClick={() => setActiveComponent('MenuCoffee')}>Cafés</button>
        <button onClick={() => setActiveComponent('MenuCandy')}>Doces</button>
      </div>

      {renderComponent()}

      <button>Delivery!</button>

   
     

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
