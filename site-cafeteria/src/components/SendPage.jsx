import '../styles/sendpage-module.css'

import '../styles/global-css/colorsAndFonts-module.css'
import '../styles/global-css/global-titles.css'
import '../styles/global-css/global-buttons.css'

import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { useContext, useRef } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { UserNameContext } from "../context/UserNameContext"
import { CommentContext } from "../context/CommentContext"
import RatingStars from "./RatingStars"
import { FaTruck } from 'react-icons/fa'
import { QuantItemsSelectedsContext } from '../context/QuantItemsSelectedsContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoHome } from 'react-icons/io5'
import { GiConfirmed } from 'react-icons/gi'
import { TbTree } from 'react-icons/tb'
import { RatingNoteContext } from '../context/RatingNoteContext'
import { BiSolidCity } from 'react-icons/bi'
import Footer from './Footer'












function SendPage() {

    const { adressUser } = useContext(UserAdressContext);
    const { storedUserNameInput } = useContext(UserNameContext);
    const { storedComment } = useContext(CommentContext)
    const { storedQuantItems } = useContext(QuantItemsSelectedsContext)
    const { storedNote } = useContext(RatingNoteContext)

    // const {setStoredEvaluation} = useContext(ConstEvaluationContext)


   /* console.log('O que vem do provider do stored: ', storedComment)

    console.log('vindo do contexto do nome de usuário para o evaluations',)
    console.log('comentário para o evaluation: ', storedComment)*/


    const splitted = storedQuantItems.split(',')


    const [listItems, setListItems] = useState([])


    //console.log('Valor da nota inicial: ', storedNote)




    useEffect(() => {

        const items = splitted.map(item => <li key={item.trim()}>{item.trim()}</li>)
        setListItems(items)
    }, [storedQuantItems])


    const ref_noEvaluation = useRef(null)
    const ref_goHome = useRef(null)


    //console.log('quantidade de caracteres do comentário', storedComment.length)





    const [valueComment, setValueComment] = useState('')



    const changedText = () => {

        setValueComment(commentRef.current.value)


    }



    useEffect(() => {


        if ( valueComment < 1) {

            //console.log('Não foi digitado nada')
            ref_noEvaluation.current.style.display = 'block'
            ref_goHome.current.style.display = 'none'
          


        } else {


            //console.log('Digitação detectada')
            ref_noEvaluation.current.style.display = 'none'
            ref_goHome.current.style.display = 'block'
        }



    }, [valueComment])









    const userNameRef = useRef('')
    const commentRef = useRef(null)
    //const UserNoteRef = useRef(null)

  


    let completeEvaluation = []


    // const [evaluation, setEvaluation] = useState('')


    const newEvaluation = () => {
        //console.log('Executou a função novoComentário')


        const valorTextArea = commentRef.current.value 
        const name = userNameRef.current.innerText
        const note = storedNote
        // const note = notaUsuario.current.innerText
        
        


        completeEvaluation.push({comentario: valorTextArea, nota: note, nome: name}) 
        
    /*console.log('nome do usuário vindo do ref do strong', userNameRef.current.innerText)
    console.log('Comentário', storedComment)
    console.log('valor das estrelas', storedNote)*/

    //console.log('Valor da const:', completeEvaluation)


    const lastEvaluations = JSON.parse(localStorage.getItem('storedUserEvaluation')) || []


   
    lastEvaluations.push({comentario: valorTextArea, nota: note, nome: name})


    localStorage.setItem('storedUserEvaluation', JSON.stringify(lastEvaluations))


    



        
    }


    
  



    // var testeNum = parseInt(storedNote)



    // const displayEmoji = () => {


    //     switch(testeNum) {

          
    //             case 1:
            
    //               return <FaRegFaceFrown />
                  

          
    //             case 2:
             
    //               return  <FaRegFaceMeh />
          
          
    //             case 3:
              
    //               return <FaRegFaceSmile />
          
          
    //             case 4:
              
    //               return <FaRegFaceKissWinkHeart />
          
    //             case 5:
            
                
          
    //               return <FaRegFaceGrinStars />


        


    //     }

     





        
    // }






    // useEffect(() => {


    //     if (testeNum === 1) {

    //         emoji.current.className = 'emoji_note_1'

    //         console.log('adicionou classe 1')

    //     } else if (testeNum === 2) {

    //         emoji.current.className ='emoji_note_2'

    //         console.log('adicionou classe 2')

    //     } else if (testeNum === 3) {

    //         emoji.current.className = 'emoji_note_3'

    //         console.log('adicionou classe 3')

    //     } else if (testeNum === 4) {

    //         emoji.current.className = 'emoji_note_4'

    //         console.log('adicionou classe 4')

    //     } else if (testeNum === 5) {
    //         emoji.current.className = 'emoji_note_5'

    //         console.log('adicionou classe 5')

    //     }



  

   

           



    // })





 




  

    return (

        <>



            <NavBar />

            <header id='header_sendPage'>
                {/* <video autoPlay muted loop>
                    <source src={videoHeader} type='video/mp4' />
                </video>

                <span>Muito obrigado(a) pela sua compra!</span> */}
            </header>



            <main>



                <p className='titles_sections'>Seu pedido está a caminho!</p>
                <p id='title_sendPage' className='subtitle_section'>Olá <strong ref={userNameRef}>{storedUserNameInput}</strong>! Muito obrigado(a) pela sua compra, seu pedido está a caminho!</p>

                <section id='section_send'>

                    <div id='box_icon_send'>

                        <div id='background_city'>
                            <BiSolidCity className='city' />
                            <BiSolidCity className='city' />
                            <BiSolidCity className='city' />
                            <BiSolidCity className='city' />
                            <BiSolidCity className='city' />
                            <BiSolidCity className='city' />


                        </div>

                        <div id='trees'>
                            <span>
                                <TbTree className='tree_icon_send' />
                            </span>
                            <span>
                                <TbTree className='tree_icon_send' />
                            </span>

                        </div>

                        <FaTruck id='truck_icon_send' />

                        <div id='box_lines'>
                            <div id='lines'>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>



                    <p className='p_introduction_sendPage'>A entrega será feita em: </p>

                    <div id='adress_send'>

                        <p>No logradouro <strong>{adressUser.street}, {adressUser.neighborhood}</strong></p>
                        <p>Em <strong>{adressUser.city}, {adressUser.state}</strong></p>

                        <div id='output_listItems_sendPage'>

                            <p className='p_introduction_sendPage'>Com os seguintes produtos: </p>

                            <ul>

                                {listItems}

                            </ul>

                        </div>

                    </div>

                    <p className='p_introduction_sendPage'>Gostou de nosso site? Por favor deixe um comentário e uma nota para que possamos sempre melhorar! Muito obrigado(a)</p>

                    <div id='evaluation_conteiner'>



                 



                      <textarea ref={commentRef} onChange={changedText}placeholder="Deixe aqui seu comentário"></textarea>  

                     {/* <UserComment /> */}


                        <RatingStars />



                    </div>



                </section>




                {/**global buttons */}


                <section className='section_buttons_redirect'>


                    <Link to='/' ref={ref_noEvaluation}>

                        <div className='buttons_redirect_confirmationPage'>
                            <IoHome className='icon_button' />
                            <p>Não quero opinar. Ir para página inicial.</p>
                        </div>

                    </Link>



                     {/* <button onClick={newEvaluation}>Novo comentário</button>  */}

                    <Link to='/' ref={ref_goHome}>

                        <div onClick = {newEvaluation} className='buttons_redirect_confirmationPage'>
                            <GiConfirmed className='icon_button' />
                            <p>Terminar</p>
                        </div>

                    </Link>


                </section>







            </main>


            {/* <Link to='/'>Voltar para a Home</Link> */}

            <Footer />


        </>

    )
}

export default SendPage