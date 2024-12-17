import '../styles/confirmationpage-module.css'
import NavBar from './NavBar'
import { useContext } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { UserNameContext } from "../context/UserNameContext"
import UserName from "./UserName"
import UserAdress from "./UserAdress"
import { Link } from "react-router-dom"
import { TotalValueContext } from "../context/TotalValueContext"
import { QuantItemsSelectedsContext } from '../context/QuantItemsSelectedsContext'

function Confirmation() {

    
    const {userNameInput} = useContext(UserNameContext)
    const {adressUser} = useContext(UserAdressContext)
    const {storedTotal} = useContext(TotalValueContext)
    const {storedQuantItems} = useContext(QuantItemsSelectedsContext)

    console.log('valor do storedTotal: ', storedTotal)
    
    return (

        <>

      <nav>
      <NavBar />
      </nav>

      <main>

      <h1>Preencha os dados abaixo para confirmar seu pedido</h1>

      <section id='input_name_conteiner'>
        <p>Qual o seu nome?</p>
        <UserName />
        <p>nome: {userNameInput}</p>
        </section>

        <section id='section_userAdress'>
        <p>Insira seu CEP e nome para confirmar o pedido: </p>
          <UserAdress />

          <div id='output_adressUser'>
            <p>{adressUser.state} </p>
            <p>{adressUser.city} </p>
            <p>{adressUser.neighborhood}</p>
            <p>{adressUser.street} </p>
          </div>


        </section>


        <section>

          <div id='output_items_confirmation'>
         
            <p>{storedQuantItems}</p>
          </div>





        </section>




      </main>



     

   

              


   



        <h1>{storedTotal}</h1>

        <Link to='/deliveryPage'>Redefinir os itens escolhidos</Link>


        ,<Link to = '/sendpage'>Confirmar pedido</Link>


        
        
        </>
    )
}

export default Confirmation