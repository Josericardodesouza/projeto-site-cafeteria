import testeImg1 from '../assets/images/testeSlide/pexels-8moments-3264706.jpg'
import testeImg2 from '../assets/images/testeSlide/pexels-graeme-travers-637657729-26820674.jpg'
import testeImg3 from '../assets/images/testeSlide/pexels-jimmy-1233438433-26851738.jpg'
import testeImg4 from '../assets/images/testeSlide/pexels-neujus-26795366.jpg'
import testeImg5 from '../assets/images/testeSlide/pexels-peter-mansson-1522474240-27143629.jpg'



import cafeCoadoImg from '../assets/images/cards-images/cafe-coado.jpeg'
import cappucinoImg from '../assets/images/cards-images/pexels-andrew-peterson-113438-350478.jpg'


import { MdOutlineStar, MdOutlineStarBorder, MdOutlineStarHalf } from 'react-icons/md'

import { BsPerson } from 'react-icons/bs'

import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { UserNameContext } from '../context/UserNameContext'
import { useContext } from 'react';
import React from 'react'
import { CommentContext } from '../context/CommentContext'

import UserComment from './UserComment'

import '../styles/evaluations-module.css'
import CommentProvider from '../context/CommentProvider'

// import '../styles/evaluations-module.css'







function Evaluations() {



  const { userNameInput } = useContext(UserNameContext);
  const { storedComment } = useContext(CommentContext)

  console.log('vindo do contexto do nome de usuário para o evaluations', userNameInput)
  console.log('comentário para o evaluation: ', storedComment)



  return (




    <>
      <div id='testeEva'>


        <p>'Comentário ', {storedComment}</p>
     
     




      </div>


      {/*   
          <div id='UserEvaluationBox'>
            <p>Teste</p>
  
          </div>
  
          <br /> */}



      {/* Swiper area */}

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
              <p className='txt_opinion'>{storedComment}</p>
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
              <p className='clientName'>{userNameInput}</p>
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





    </>
  )
}

export default Evaluations