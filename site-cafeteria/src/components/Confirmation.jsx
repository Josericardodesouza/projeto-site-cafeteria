import '../styles/confirmationpage-module.css'
import '../styles/global-css/global-buttons.css'
import '../styles/global-css/global-titles.css'
import NavBar from './NavBar'
import { useContext } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { UserNameContext } from "../context/UserNameContext"
import UserName from "./UserName"
import UserAdress from "./UserAdress"
import { Link } from "react-router-dom"
import { TotalValueContext } from "../context/TotalValueContext"
import { QuantItemsSelectedsContext } from '../context/QuantItemsSelectedsContext'
import { FaMapMarkerAlt, FaTruck, FaUser } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Footer from './Footer'

function Confirmation() {


  const { storedUserNameInput } = useContext(UserNameContext)
  const { adressUser } = useContext(UserAdressContext)
  const { storedTotal } = useContext(TotalValueContext)
  const { storedQuantItems } = useContext(QuantItemsSelectedsContext)



  const total = storedTotal.replace('.', ',')


  const [listItems, setListItems] = useState([])

  const splitted = storedQuantItems.split(',')
  console.log('Corte no split', splitted)


  console.log('cidade', adressUser.city)

  const userName_output = useRef(null)


  const box_output_userAdress = useRef(null)

  const msgError_userAdress = useRef(null)

  const ref_btnGoSendPage = useRef(null)




  useEffect(() => {

    if (storedUserNameInput.length > 1) {
      userName_output.current.innerText = storedUserNameInput
      userName_output.current.style.color = ''


    } else {

      userName_output.current.innerText = 'Por favor, informe seu nome.'
      ref_btnGoSendPage.current.style.display = 'none'

      userName_output.current.style.color = 'red'

    }


  })




  useEffect(() => {

    if (adressUser.city === undefined && adressUser.state === undefined && adressUser.neighborhood === undefined && adressUser.street === undefined) {
      box_output_userAdress.current.style.display = 'none'
      msgError_userAdress.current.style.display = 'block'
      msgError_userAdress.current.innerText = "Por favor insira um CEP válido."
      msgError_userAdress.current.style.color = 'red'



    } else if (adressUser.city === '' && adressUser.state === '' && adressUser.neighborhood === '' && adressUser.street === '') {

      box_output_userAdress.current.style.display = 'none'
      msgError_userAdress.current.style.display = 'block'
      msgError_userAdress.current.innerText = "Você ainda não informou seu CEP"
      msgError_userAdress.current.style.color = 'red'




    } else {
      box_output_userAdress.current.style.display = 'block'
      msgError_userAdress.current.style.display = 'none'




    }




  })


  useEffect(() => {

    const items = splitted.map(item => <li key={item.trim()}>{item.trim()}</li>)
    setListItems(items)
  }, [storedQuantItems])





  console.log('valor do storedTotal: ', storedTotal)


  useEffect(() => {

    const trimmedInput = storedUserNameInput.trim();
    const div_output_userAdress = window.getComputedStyle(box_output_userAdress.current);

    if (trimmedInput.length < 1 || div_output_userAdress.display === 'none') {

      console.log('Não tem nome ou cep')
      ref_btnGoSendPage.current.style.display = 'none'

    } else {
      console.log(' tem nome ou cep')
      ref_btnGoSendPage.current.style.display = 'flex'

    }
  })



  return (

    <>

      
        <NavBar />
      
      <main>


        <p className='titles_sections'>Estamos quase lá!</p>
        <p className='subtitle_section'>Agora, por favor,preencha os dados abaixo para confirmar seu pedido</p>

        <section id='inputs_conteiner'>
          <div className='component_inputs_confirmationPage'>
            <p className='title_result'>Quem irá receber a encomenda?</p>
            <UserName />
          </div>

          <div className='component_inputs_confirmationPage'>
            <UserAdress />
          </div>
        </section>

        <p id='p_checkout'>Confira se está tudo certo.</p>


        <section>

          <div id='output_items_confirmation'>
            <p className='title_result'>Você selecionou os seguintes itens:</p>

            <ul>
              {listItems}

            </ul>



          </div>



          <div id='output_userName_confirmation'>
            <p className='title_result'>Que serão entregues para</p>
            <span className='icon_output'><FaUser /></span>
            <strong ref={userName_output} className='p_output'></strong>
          </div>

          <div>

            <div id='output_adressUser_confirmation' ref={box_output_userAdress}>
           
              <p className='title_result'>No endereço</p>

              <span className='icon_output'><FaMapMarkerAlt /></span>


              <p className='p_output'>UF: <strong>{adressUser.state}</strong></p>
              <p className='p_output'>Cidade: <strong>{adressUser.city}</strong></p>
              <p className='p_output'>Bairro: <strong>{adressUser.neighborhood}</strong></p>
              <p className='p_output'>Logradouro: <strong>{adressUser.street}</strong></p>
            </div>

          </div>

          <p ref={msgError_userAdress} id='p_error_cep'></p>

        </section>

        <section id='section_totalValue'>

          <div id='totalValue'>

            <p id='title_value'>Valor total</p>

          <p id='output_total'>R${total}</p>


          </div>

        </section>



        



    
<section className='section_buttons_redirect'>
  
  
      <Link to='/sendPage' ref={ref_btnGoSendPage}>
  
      <div className='buttons_redirect_confirmationPage'>
      <FaTruck className='icon_button' />
      <p>Confirmar pedido</p>
      </div>
  
      </Link>
  
      <Link to='/deliveryPage'>
  
      <div className='buttons_redirect_confirmationPage'>
          <IoMdArrowRoundBack className='icon_button' />
          <p>Redefinir os itens escolhidos</p>
        </div>
  
      </Link>
  
  
</section>


  

      <p id='p_alert_return'>Atenção: ao voltar, deverá selecionar todos os itens novamente!</p>

        {/* 
        <section ref={ref_btnGoSendPage} id='goSendPage'>

        <div>
        <Link to='/sendpage' id='btn_toSendPage'>
          <div id='goSendPage'>
            <TbTruckDelivery className='goSendPage_hover' id='goSendPage_icon' />
            <p className='goSendPage_hover' id='goSendPage_p'>Concluir pedido</p>
          </div>
        </Link>
      </div>


        </section> */}




      </main>


      <Footer />




    






    </>
  )
}

export default Confirmation