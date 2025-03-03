import { useContext, useRef, useState } from "react";
import { UserNameContext } from "../context/UserNameContext";
import { CommentContext } from "../context/CommentContext";
import { RatingNoteContext } from "../context/RatingNoteContext";
import { useEffect } from "react";




import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { FaRegFaceFrown, FaRegFaceGrinStars, FaRegFaceKissWinkHeart, FaRegFaceMeh, FaRegFaceSmile } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";

function Comments() {

    
      /*const { storedUserNameInput } = useContext(UserNameContext);
      const { storedComment } = useContext(CommentContext)
      const { storedNote } = useContext(RatingNoteContext)*/

    //   const {storedEvaluation} = useContext(ConstEvaluationContext)


      


      // const saida = useRef(null)

      const renderComments = useRef(null)




      useEffect(() => {

        if (renderComments.current) {


  
        let myComment = localStorage.getItem('storedUserEvaluation')
        let commentsList = JSON.parse(myComment) || [];

      
        
      //console.log('vindo do storage: ', commentsList)

      
      var newStoredUserEvaluation = ''
   

      


      commentsList.forEach((item) => {
        newStoredUserEvaluation = newStoredUserEvaluation + `
        <p>${item.nome}</p>
        <p>${item.comentario}</p>
      
        `
        
      });

      renderComments.current.innerHTML = newStoredUserEvaluation




    } else {

    }


  

      }, [])




       
          const [comments, setComments] = useState([])

          useEffect(() => {
            const savedComments = JSON.parse(localStorage.getItem('storedUserEvaluation')) || []
            setComments(savedComments)


          }, [])



          // var testeNum = parseInt(storedNote)


          
  const displayFace = (nota) => {

    switch (nota) {

      case '1':
        return <FaRegFaceFrown />

      case '2':
        return <FaRegFaceMeh />


      case '3':
        return <FaRegFaceSmile />


      case '4':
        return <FaRegFaceKissWinkHeart />

      case '5':

        return <FaRegFaceGrinStars />

        default:

        return <FaRegFaceGrinStars />


    }



  }



  const [sizeSlidesPerView, setSizeSlidesPerView] = useState(null)


  useEffect(() => {

    const updateScreenWidthSize = () => {

      if (window.innerWidth < 500) {

        setSizeSlidesPerView(1.5)

      } else {
  
        setSizeSlidesPerView(2.5)
      }
     
    }


    updateScreenWidthSize() 
    window.addEventListener('resize', updateScreenWidthSize)


  



    return () => {
      window.removeEventListener('resize', updateScreenWidthSize) 
    }

  }, [])

 






  const displayStars = (nota) => {

    switch (nota) {

      case '1':
        return (
          <>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>

          </>
        );

      case '2':
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>


          </>
        );

      case '3':
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>




          </>
        );

      case '4':
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </>
        );

      case '5':
        return (
          <>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>


          </>
        );

        default:
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


      

<Swiper

  modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}

  spaceBetween={25}
  slidesPerView={sizeSlidesPerView}
  Navigation
  pagination={{ clickable: true }}
  grabCursor='true'


// effect= {'coverflow'}
// coverflowEffect= { {

//   rotate: 10,
//   stretch: 0,
//   depth: 100,
//   modifier: 1,
//   slideShadows: false


// } }
>


  {/* <div ref={renderComments}>

  </div> */}

  {comments.slice().reverse().map((item, index) => (

     
<SwiperSlide key={index}>
          
<div className='conteiner_ev'>

  <div className='box_opinion'>

    <div className='box_icon_face_comment'>
      {displayFace(item.nota)}

    </div>

    <div className='box_stars_user_comment'>
      <div className='box_stars'>

        {displayStars(item.nota)}
        {/* {item.nota} */}

      </div>

    </div>

    <div className='box_text_comment'>
    <p className='txt_opinion'>
    "{item.comentario}"
    </p>

    </div>


    <div className='conteiner_username_comment'>
      <div className='icon_user'>
        <BsPerson />
      </div>
      <div className='username_comment'>
        <p>"{item.nome}"</p>

      </div>
  


    </div>

    </div>

  

  </div>



  {/* <div className='ev_img_box'> <img src={cappucinoImg} /></div> */}



</SwiperSlide>

    



  ))}


 

  <SwiperSlide>

    <div className='conteiner_ev'>

      <div className='box_opinion'>

        <div className='box_icon_face_comment'>
          <FaRegFaceGrinStars />

        </div>

        <div className='box_stars_user_comment'>
          <div className='box_stars'>

            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>

          </div>

        </div>

        <div className='box_text_comment'>
        <p className='txt_opinion'>
        " Adorei o ambiente desta cafeteria! A decoração é aconchegante e as luzes suaves tornam o lugar perfeito para relaxar. O café de origem única que provei foi simplesmente excepcional! "
        </p>

        </div>


        <div className='conteiner_username_comment'>
          <div className='icon_user'>
            <BsPerson />
          </div>
          <div className='username_comment'>
            <p>"Jhonnatan Campos"</p>

          </div>
      


        </div>

        </div>

      

      </div>


    
      {/* <div className='ev_img_box'> <img src={cappucinoImg} /></div> */}



  </SwiperSlide>

  <SwiperSlide>

    <div className='conteiner_ev'>



      {/* <div className='ev_img_box'>
        <img src={cafeCoadoImg}></img>
      </div> */}

      <div className='box_opinion'>

      <div className='box_icon_face_comment'>
          <FaRegFaceKissWinkHeart />

        </div>

        <div className='box_stars_user_comment'>
        <div className='box_stars'>

        {/* <p>Cappuccino</p> */}
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>

      </div>


        </div>

        <div className='box_text_comment'>
        <p className='txt_opinion'>" A experiência foi maravilhosa! O cardápio não oferece uma grande variedade de cafés e chás, mas todos os produtos são de alta qualidade. O atendimento é impecável e o ambiente é muito limpo e organizado. " </p>
     
      </div>

     
        <div className='conteiner_username_comment'>
          <div className='icon_user'>
          <BsPerson />

          </div>

          <div className='username_comment'>
          <p>"Rafael Gonzaga"</p>

          </div>
        
        
        </div>
    



      </div>

    </div>

  </SwiperSlide>

  

  <SwiperSlide>

    <div className='conteiner_ev'>

      <div className='box_opinion'>
        <div className='box_icon_face_comment'>
          <FaRegFaceFrown />

        </div>

        

    
      {/* <div className='ev_img_box'>
        <img src={testeImg3}></img>
      </div> */}

      <div className='box_stars_user_comment'>


        <div className='box_stars'>

        <span>&#9733;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>

      </div>


      </div>



      <div className='box_text_comment'>
        <p className='txt_opinion'>" Minha experiência com a entrega foi horrível. O pedido chegou muito atrasado e, quando finalmente chegou, a embalagem estava toda amassada e o conteúdo derramado. Além disso, o café estava completamente frio e sem sabor. Tentei entrar em contato com a cafeteria para resolver o problema, mas não obtive resposta. Muito frustrante e decepcionante. "</p>
      </div>

      <div className='conteiner_username_comment'>
        <div className='icon_user'>
          <BsPerson />

        </div>

        <div className='username_comment'>
          <p>"Ana Júlia"</p>

        </div>

      </div>

    </div>

    </div>

  </SwiperSlide>

  <SwiperSlide>

    <div className='conteiner_ev'>
      {/* 
      <div className='ev_img_box'>
        <img src={testeImg4} />
      </div> */}


      <div className='box_opinion'>
        <div className='box_icon_face_comment'>
          <FaRegFaceSmile />

        </div>

    

      <div className='box_stars_user_comment'>
        <div className='box_stars'>

        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>

      </div>


      </div>

      <div className='box_text_comment'>
        
        <p className='txt_opinion'>" Os cafés desta cafeteria são incríveis! A qualidade é excelente e o sabor é incomparável. No entanto, fiquei decepcionado com a entrega. O pedido chegou atrasado e o café estava morno quando recebi. Espero que possam melhorar o serviço de entrega, porque o produto realmente vale a pena. "</p>
   

      </div>

      <div className='conteiner_username_comment'>
        <div className='icon_user'>
          <BsPerson />
        </div>

        <div className='username_comment'>
          <p>"Sebastião Bonaparte"</p>

        </div>

        </div>

      </div>

    </div>

  </SwiperSlide>

  <SwiperSlide>

    <div className='conteiner_ev'>
      {/* 
      <div className='ev_img_box'>
        <img src={testeImg5} />
      </div> */}

      <div className='box_opinion'>
        <div className='box_icon_face_comment'>
          <FaRegFaceMeh />

        </div>
        <div className='box_stars_user_comment'>
          <div className='box_stars'>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>


          </div>

        </div>

        <div className='box_text_comment'>
        <p className='txt_opinion'>" A entrega foi muito rápida, o que foi um ponto positivo. No entanto, fiquei bastante decepcionado ao perceber que o pedido veio errado. Pedi um café latte, mas recebi um espresso. Tentei ligar para a cafeteria para resolver o problema, mas ninguém atendeu minhas ligações. A qualidade do café é ótima, mas a precisão dos pedidos e o atendimento ao cliente precisam de grandes melhorias. "</p>

        </div>

        <div className='conteiner_username_comment'>
          <div className='icon_user'>
            <BsPerson />

          </div>

          <div className='username_comment'>
          <p>"Cláudia Faria"</p>

          </div>

        </div>
     
      
      </div>

    </div>

  </SwiperSlide>

</Swiper>






        
        </>
    )
}

export default Comments