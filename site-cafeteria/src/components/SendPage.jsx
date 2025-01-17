import '../styles/sendpage-module.css'
import videoHeader from '../assets/videos/4170833-uhd_3840_2160_25fps.mp4'

import '../styles/colorsAndFonts-module.css'

import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import ItensListDelivery from "./ItensListDelivery"
import { useContext, useReducer, useRef } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { UserNameContext } from "../context/UserNameContext"
import UserComment from "./UserComment"
import { CommentContext } from "../context/CommentContext"
import RatingStars from "./RatingStars"
import { FaCity, FaTruck } from 'react-icons/fa'
import { QuantItemsSelectedsContext } from '../context/QuantItemsSelectedsContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { IconBase } from 'react-icons'
import { GiConfirmed } from 'react-icons/gi'
import { TbTree } from 'react-icons/tb'
import { RatingNoteContext } from '../context/RatingNoteContext'
import { MdLocationCity } from 'react-icons/md'
import { BiSolidCity } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import Footer from './Footer'













function SendPage() {

    const { adressUser } = useContext(UserAdressContext);
    const { storedUserNameInput } = useContext(UserNameContext);
    const { storedComment } = useContext(CommentContext)
    const { storedQuantItems } = useContext(QuantItemsSelectedsContext)
    const { storedNote } = useContext(RatingNoteContext)


    console.log('O que vem do provider do stored: ', storedComment)

    console.log('vindo do contexto do nome de usuário para o evaluations',)
    console.log('comentário para o evaluation: ', storedComment)


    const splitted = storedQuantItems.split(',')


    const [listItems, setListItems] = useState([])


    console.log('Valor da nota inicial: ', storedNote)




    useEffect(() => {

        const items = splitted.map(item => <li key={item.trim()}>{item.trim()}</li>)
        setListItems(items)
    }, [storedQuantItems])


    const ref_noEvaluation = useRef(null)
    const ref_goHome = useRef(null)


    console.log('quantidade de caracteres do comentário', storedComment.length)






    useEffect(() => {





        if (storedComment.length < 1) {

            console.log('Não foi digitado nada')
            ref_noEvaluation.current.style.display = 'block'
            ref_goHome.current.style.display = 'none'


        } else {


            console.log('Digitação detectada')
            ref_noEvaluation.current.style.display = 'none'
            ref_goHome.current.style.display = 'block'
        }






    })


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
                <p id='title_sendPage' className='subtitle_section'>Olá <strong>{storedUserNameInput}</strong>! Muito obrigado(a) pela sua compra, seu pedido está a caminho!</p>

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



                        <UserComment />


                        <RatingStars />


                    </div>



                </section>




                {/**global buttons */}


                <section className='section_buttons_redirect'>


                    <Link to='/' ref={ref_noEvaluation}>

                        <div className='buttons_redirect_confirmationPage'>
                            <IoHome className='icon_button' />
                            <p>Não quero opinar. ir para página inicial.</p>
                        </div>

                    </Link>


                    <Link to='/' ref={ref_goHome}>

                        <div className='buttons_redirect_confirmationPage'>
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