import { useRef, useState } from 'react'
import './App.css'
import './styles/colorsAndFonts-module.css'
import { Link } from 'react-router-dom'

import videoHeader from './assets/videos/7487669-hd_1920_1080_24fps.mp4'



import image2 from './assets/images/pexels-og-mpango-1582361-4090603.jpg'
import image3 from './assets/images/pexels-michael-burrows-7125434.jpg'
import image4 from './assets/images/pexels-ekrulila-2307221.jpg'
import image5 from './assets/images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg'
import NavBar from './components/NavBar'
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

import testeImg1 from './assets/images/testeSlide/pexels-8moments-3264706.jpg'
import testeImg2 from './assets/images/testeSlide/pexels-graeme-travers-637657729-26820674.jpg'
import testeImg3 from './assets/images/testeSlide/pexels-jimmy-1233438433-26851738.jpg'
import testeImg4 from './assets/images/testeSlide/pexels-neujus-26795366.jpg'
import testeImg5 from './assets/images/testeSlide/pexels-peter-mansson-1522474240-27143629.jpg'




import { UserNameContext } from './context/UserNameContext'

import { useContext } from 'react'
// import { CommentContext } from './context/CommentContext'




import { BsPerson } from 'react-icons/bs'

import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { MdOutlineStar, MdOutlineStarBorder, MdOutlineStarHalf } from 'react-icons/md'
import UserNameDisplay from './components/UserNameDisplay'
import UserNameProvider from './context/UserNameProvider'
import { CommentContext } from './context/CommentContext'
import RatingStars from './components/RatingStars'
import { RatingNoteContext } from './context/RatingNoteContext'
import SelectedItemsProvider from './context/SelectedItemsProvider'
import { SelectedItemsContext } from './context/SelectedItemsContext'
import { DiCoffeescript } from 'react-icons/di'
import { FaCoffee, FaCookie } from 'react-icons/fa'
import { GiCoffeeCup, GiCoffeeMug } from 'react-icons/gi'



// import '../styles/evaluations-module.css'







function App() {



  const { userNameInput } = useContext(UserNameContext);
  const { storedComment } = useContext(CommentContext)
  const { storedNote } = useContext(RatingNoteContext)
  const { storedListItemsNames } = useContext(SelectedItemsContext)


  console.log('Valor do provider da lista de selecionados:', storedListItemsNames)

  console.log('vindo do contexto do nome de usuário para o App.jsx', userNameInput)
  console.log('valor da nota:', storedNote)
  // console.log('comentário para o evaluation: ', storedComment)


  if (userNameInput === 'Sim') {
    console.log('é sim')
  } else {
    console.log('É não')
  }

  if (userNameInput.length > 1 && storedComment.length > 1) {
    console.log('Os dois tem caracteres')
  } else {
    console.log('Não retorno')
  }












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
      refSectionAboutUs.current.scrollIntoView({ behavior: 'smooth' })
    }
  }



  const refDivButtonsMenus = useRef(null)

  const scrollMenus = () => {

    console.log('teste2')


    if (refDivButtonsMenus.current) {
      console.log('chamou 2a funcao')
      refDivButtonsMenus.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log('este elemento não está passando')
    }

  }

  const refSectionEv = useRef(null)

  const scrollEvaluations = () => {

    if (refSectionEv.current) {

      console.log('teste3')
      refSectionEv.current.scrollIntoView({ behavior: 'smooth' })
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



  const boxEvaluation = useRef(null)

  useEffect(() => {

    if (userNameInput.length > 1 && storedComment.length > 1 && storedNote > 1 && storedListItemsNames.length > 1 ) {

      boxEvaluation.current.style.display = 'block'
    } else {
      boxEvaluation.current.style.display = 'none'
    }

  })



  var testeNum = parseInt(storedNote)




  // const divStars = document.getElementById('stars_container')
  // console.log(divStars)



  // for (let i = 0; i < testeNum; i++ ) {
  //   const newSpan = document.createElement('span')
  //   newSpan.innerHTML = '&#9733;'
  //   divStars.appendChild(newSpan)

  // }

  const displayStars = () => {

    switch (testeNum) {
      case 1:
        return (
          <>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>

          </>
        );

      case 2:
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>


          </>
        );

      case 3:
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
          </>
        );

      case 4:
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </>
        );

      case 5:
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>


          </>
        );
    }

  }



  return (


    <>

      <nav id='home_navBar' >
        <div className='box_navBarLinks'>
          <NavBar />
        </div>



        <div className='box_navBarLinks' id='hidden'>
          <NavBarHome scrollAboutUs={scrollAboutUs} scrollMenus={scrollMenus} scrollEvaluations={scrollEvaluations} />
        </div>
      </nav>




      <header id='header'>


        <div id='box_header'>


          <video autoPlay muted loop>
            <source src={videoHeader} type='video/mp4'></source>
          </video>

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
            <img className='img_aboutUs' src={image2} />
          </div>

          <div id='conteiner_2' className='conteiner_txtimg'>
            <div className='box_text'>
              <p className='p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et tempore ut nemo perspiciatis facilis quos fugiat exercitationem consequuntur expedita officiis, eaque qui quae molestiae optio rerum odit dolore quisquam!</p>
            </div>
            <img className='img_aboutUs' src={image3} />

          </div>



          <div id='conteiner_3' className='conteiner_txtimg'>
            <div className='box_text'>
              <h3 className='title_box'>Uma Arte de Café</h3>
              <p className='p_box'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam at autem? Recusandae quia, vitae voluptates ducimus tenetur iure cumque fugit similique dicta!</p>
            </div>
            <img className='img_aboutUs' src={image4} />
          </div>

          <div id='conteiner_4' className='conteiner_txtimg'>
            <div className='box_text'>
              <p className='p_box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis ratione vel, nostrum fugit ad consequatur sit reprehenderit doloribus assumenda necessitatibus? Praesentium corporis, possimus unde eius obcaecati placeat tenetur. Tempore.</p>
            </div>
            <img className='img_aboutUs' src={image5} />

          </div>

        </section>


        <section>

          <div id='txt_div_pre_menu'>
            <p id='title_pre_menu' ref={refDivButtonsMenus}>Confira abaixo nosso cardápio</p>
            <p id='p_pre_menu'>Escolha uma categoria e depois clique no item para ver suas informações</p>


          </div>


        </section>

<section id='buttons_display_menus'>
  
          <div id='box_buttons_menu' >
            <ul className='ul_list'>
              <li className='li_item'>
  
                <div onClick={() => setActiveComponent('MenuCofee')}>
                  <label for="input_cf">
                    <input type="radio" id="input_cf" className="input_menus" name="groupScroll" />
                    <span className='btn_menus'>
                      <GiCoffeeCup className='btn_icon' />
                      <span className='btn_text'>
                      Bebidas quentes
                    </span>
                    </span>
                  
                  </label>
                </div>
  
              </li>
  
              <li className='li_item'>
  
                <div onClick={() => setActiveComponent('MenuColdDrinks')}>
                  <label for="input_cg">
                    <input type="radio" id="input_cg" className="input_menus" name="groupScroll" />
                    <span className='btn_menus'>
                      <GiCoffeeMug className='btn_icon'/>
                      <span className='btn_text'>
                      Bebidas geladas
                    </span>
                    </span>
                  
                  </label>
                </div>
  
              </li>
  
              <li className='li_item'>
  
                <div onClick={() => setActiveComponent('MenuCandy')}>
                  <label for="input_mc">
                    <input type="radio" id="input_mc" className="input_menus" name="groupScroll" />
                    <span className='btn_menus'>
                      <FaCookie className='btn_icon' />
                      <span className='btn_text'>
                      Doces
                    </span>
                    </span>
                  
                  </label>
                </div>
  
              </li>
  
            </ul>
  
  
          </div>
</section>


        {/* <h3 className='title_box'>Confira nossos produtos com os melhores preços</h3> */}


        {/* <div id='box_links_menu'>
          <button id='btn_cf' onClick={() => setActiveComponent('MenuCoffee')}>Bebidas quentes</button>
          <button id='btn_cg' onClick={() => setActiveComponent('MenuColdDrinks')}>Bebidas Geladas</button>
          <button id='btn_mc' onClick={() => setActiveComponent('MenuCandy')}>Doces</button>
        </div> */}

        <section id='render_menu'>
          {renderComponent()}
        </section>

        <Link to='/deliveryPage'>
          <div id='goDeliveryPage'>
            <CiCoffeeCup className='goDeliveryPage_hover' id='goDeliveryPage_icon' />
            <p className='goDeliveryPage_hover' id='goDeliveryPage_p'>Fazer um pedido</p>
          </div>
        </Link>




        <h3>Avaliados recentemente</h3>

        <section id='evaluations' ref={refSectionEv}>

          <Swiper

            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}

            spaceBetween={20}
            slidesPerView={1.5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          // effect= {'coverflow'}
          // coverflowEffect= { {

          //   rotate: 10,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: false


          // } }
          >


            <SwiperSlide>

              <div className='conteiner_ev' ref={boxEvaluation}>

                <div className='box_opinion'>
                  <p className='txt_opinion'>{storedComment}</p>
                  <p className='clientName'><BsPerson />{userNameInput}</p>
                  <div id="stars_container">
                    <div>exibido pelo switch case: {displayStars()}</div>
                  </div>

                </div>










              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className='conteiner_ev'>

                <div className='ev_img_box'> <img src={cappucinoImg} /></div>

                <div className='ev_box'>
                  <p>Cappuccino</p>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                  <MdOutlineStarBorder />
                </div>

                <div className='box_opinion'>
                  <p className='txt_opinion'>Comentário</p>
                  <p className='clientName'><BsPerson />Angélica Silva</p>
                </div>


              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className='conteiner_ev'>

                <div className='ev_img_box'>
                  <img src={cafeCoadoImg}></img>
                </div>

                <div className='ev_box'>
                  <p>Cappuccino</p>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                  <MdOutlineStarBorder />
                </div>

                <div className='box_opinion'>
                  <p className='txt_opinion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid provident modi expedita rerum excepturi, eaque libero pariatur magnam odio neque similique voluptate sit suscipit aut nulla explicabo deleniti numquam sed.</p>
                  <p className='clientName'>Jason</p>
                </div>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className='conteiner_ev'>

                <div className='ev_img_box'>
                  <img src={testeImg3}></img>
                </div>

                <div className='ev_box'>
                  <p>Frapuccino</p>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                  <MdOutlineStarBorder />
                </div>

                <div className='box_opinion'>
                  <p className='txt_opinion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid provident modi expedita rerum excepturi, eaque libero pariatur magnam odio neque similique voluptate sit suscipit aut nulla explicabo deleniti numquam sed.</p>
                  <p className='clientName'>Juvenal Silva</p>
                </div>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className='conteiner_ev'>

                <div className='ev_img_box'>
                  <img src={testeImg4} />
                </div>

                <div className='ev_box'>
                  <p>Bolo</p>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                  <MdOutlineStarBorder />
                </div>
                <div className='box_opinion'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt nisi omnis eveniet tenetur velit fugit voluptates, expedita numquam veniam excepturi quidem sunt? Laudantium maxime ratione ipsum dignissimos cum ipsa.
                  <p className='clientName'>Felipe Damasco</p>

                </div>

                <div className='box_opinion'>
                  <p className='txt_opinion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid provident modi expedita rerum excepturi, eaque libero pariatur magnam odio neque similique voluptate sit suscipit aut nulla explicabo deleniti numquam sed.</p>
                  <p className='clientName'>Marco Túlio</p>
                </div>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className='conteiner_ev'>

                <div className='ev_img_box'>
                  <img src={testeImg5} />
                </div>

                <div className='ev_box'>
                  <p>Cupcake</p>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                  <MdOutlineStarBorder />
                </div>

                <div className='box_opinion'>
                  <p className='txt_opinion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid provident modi expedita rerum excepturi, eaque libero pariatur magnam odio neque similique voluptate sit suscipit aut nulla explicabo deleniti numquam sed.</p>
                  <p className='clientName'>Cláudia Faria</p>
                </div>

              </div>

            </SwiperSlide>

          </Swiper>








        </section>




      </main>


      <Footer />


    </>


  )
}

export default App
