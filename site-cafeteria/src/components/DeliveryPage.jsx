import '../styles/deliveryPage-modules.css'
import '../styles/global-css/colorsAndFonts-module.css'
import '../styles/global-css/global-titles.css'
import '../styles/global-css/global-buttons.css'


import { Link, Navigate, BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useContext } from 'react'
import MenuItems from './MenuItems'
import NavBar from './NavBar'
import { SelectedItemsContext } from '../context/SelectedItemsContext'
import { FaArrowRight } from 'react-icons/fa'






function DeliveryPage() {

  const { storedListItemsNames } = useContext(SelectedItemsContext)

  // console.log('Username no DeliveryPage: ', userNameInput);

//  var input = document.getElementById('ent-adressUser')



  // var total = itensProperties.input_pessegoPie.price

  // console.log(`O preço é ${total}`)






  // const 




  // console.log(`é o ${coado_name} e o ${cappuccino_name}`)









  // const updateQuantity = (e) => {
  //   const {name, quantityItens} = e.target
  //   setItensProperties.quant((prevQuantity) => ({
  //     ...prevQuantity, [name]: {
  //     ...prevQuantity[name],
  //     quant: Number(quantityItens)
  // }}))
  // }


  // const renderListItemsSelected = () => {
  //   return Object.keys(itensProperties).map((key) => {
  //     if (itensProperties[key].quant > 0) {
  //       return <p key={key}>Você selecionou {itensProperties[key].quant} unidades de {itensProperties[key].name} no valor de {itensProperties[key].price}</p>
  //     }
  //     return null 
  //   } )


  // }



  // Object.values(itensProperties).forEach(item => {
  //   console.log(`Item: ${item.name}, Quant: ${item.quant}, Price: ${item.price}, Total: ${item.quant * item.price}`)});



  // const [adressUser, setAdressUser] = useState ({
  //   state: '',
  //   city: '',
  //   neighborhood: '',
  //   street: ''


  // })






  /*const confirmar = () => {
    console.log('teste da chamada')
    const lista = renderListItemsSelected
    console.log('teste', lista)


  }
*/

  //passando a lista para o componente SendPage.jsx


  // console.log('Isso é o itensProperties:', itensProperties)



  // const pRef = useRef(null)
  // const [texto, setTexto] = useState("")

  // useEffect(() => {
  //   if (pRef.current){
  //     setTexto(pRef.current.innerText)
  //   }
  // }, []);

  const botao = useRef(null)

  useEffect(() => {


    if (storedListItemsNames.length >= 1) {
      botao.current.style.display = 'block'


    } else {
      botao.current.style.display = 'none'

    }

  })

  return (

    <>

      <NavBar />

      {/* <header id='header_deliveryPage'></header> */}

      

      <main>

      <p className='titles_sections'>Temos diversas opções para você!</p>
      <p className='subtitle_section'>Selecione a seção, em seguida defina o quantidade e, por fim, clique em "continuar" para prosseguirmos com seu pedido.</p>

        <section id='section_menu'>
          <MenuItems />
        </section>


        {/* <button ref={botao}>Teste</button> */}

        {/* 
        <div ref={botao} id='conteiner_redirect_confirmationPage'>
          <span className='hover_goConfirmationPage' id='goSendPage_icon'><GiConfirmed /></span>
          <Link to = '/confirmation' className='hover_goConfirmationPage'>Continuar</Link>
 





        </div> */}



<section className='section_buttons_redirect'>
  
          <Link to='/confirmation' ref={botao}>
  
            <div className='buttons_redirect_confirmationPage'>
              <FaArrowRight className='icon_button' />
              <p className='p_button_redirect'>Continuar</p>
            </div>
  
          </Link>
</section>



        {/*         
        <div ref={botao} id='conteiner_redirect_confirmationPage'>
          <span className='hover_goConfirmationPage' id='goSendPage_icon'><GiConfirmed /></span>
          <Link to = '/confirmation' className='hover_goConfirmationPage'>Continuar</Link>
 





        </div> */}




        {/* 

        <div ref={botao} id='btn_conteiner_toSendPage'>
          <Link to='/confirmation' id='btn_toSendPage'>
            <div id='goSendPage'>
              <GiConfirmed className='goSendPage_hover' id='goSendPage_icon' />
              <p className='goSendPage_hover' id='goSendPage_p'>Concluir pedido</p>
            </div>
          </Link>
        </div>
 */}

        {/* <button onClick={confirmar}>Confirmar</button> */}

        <div>
          {/* Teste */}
          <br />
          {/* {quantity.inputCafeBrownie} */}

        </div>


        <div id='box_phrases_quantity'>




          {/* <ItensListDelivery itensProperties={itensProperties} /> */}








          {/* <p>total {total}</p> */}











        </div>
        {/* 
  <ItensListDelivery quantity={quantity} />
  <ItensListDelivery /> */}













        <div>
          <img />
          <ul>
            <li></li>
          </ul>


        </div>





      </main>

      <Footer />





    </>


  )



}

export default DeliveryPage






