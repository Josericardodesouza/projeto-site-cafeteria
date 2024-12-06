import '../styles/sendpage-module.css'
import videoHeader from '../assets/videos/4170833-uhd_3840_2160_25fps.mp4'

import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import ItensListDelivery from "./ItensListDelivery"
import { useContext } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { UserNameContext } from "../context/UserNameContext"
import UserComment from "./UserComment"
import { CommentContext } from "../context/CommentContext"
import RatingStars from "./RatingStars"
import { FaTruck } from 'react-icons/fa'
import { QuantItemsSelectedsContext } from '../context/QuantItemsSelectedsContext'













function SendPage() {

    const { adressUser } = useContext(UserAdressContext);
    const { userNameInput } = useContext(UserNameContext);
    const { storedComment } = useContext(CommentContext)
    const { storedQuantItems } = useContext(QuantItemsSelectedsContext)


    console.log('O que vem do provider do stored: ', storedComment)

    console.log('vindo do contexto do nome de usuário para o evaluations', userNameInput)
    console.log('comentário para o evaluation: ', storedComment)














    return (

        <>



            <NavBar />

            <header id='header_sendPage'>
                <video autoPlay muted loop>
                    <source src={videoHeader} type='video/mp4' />
                </video>

                <span>Muito obrigado(a) pela sua compra!</span>
            </header>

            <main>

                <section id='section_send'>

                    <h1>Seu pedido está a caminho!</h1>

                    

                <div id='box_icon_send'>
                    <FaTruck id='icon_send' />
                </div>

                    <div id='adress_send'>

                        <p>Pedido enviado para <strong>{userNameInput}</strong></p>

                        <p>A entrega será feita em: </p>
                        <p>No logradouro <strong>{adressUser.street}, {adressUser.neighborhood}</strong></p>
                        <p>Em <strong>{adressUser.city}, {adressUser.state}</strong></p>

                        <p>Com os seguintes produtos: </p>
                        
                        <p id='saida'>{storedQuantItems}</p>

                    </div>

                    <div id='evaluation_conteiner'>

                    <UserComment />

                    <p>Selecione uma nota: </p>
                    <RatingStars />


                    </div>




                 

                </section>













            </main>




            <section>












            </section>
















       

            <p>Valor do textArea: {storedComment}</p>

           























            <p id="output_end"></p>
            <div>
                <h3>Deixe sua opinião</h3>
                <p>cidade: </p>
                <textarea name="evaluation_user" id="evaluation_user_id"></textarea>


            </div>

            <Link to='/'>Voltar para a Home</Link>









        </>

    )
}

export default SendPage