import { useContext } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { UserNameContext } from "../context/UserNameContext"
import UserName from "./UserName"
import UserAdress from "./UserAdress"
import { Link } from "react-router-dom"
import TotalValueProvider from "../context/TotalValueProvider"
import { TotalValueContext } from "../context/TotalValueContext"

function Confirmation() {

    
    const {userNameInput} = useContext(UserNameContext)
    const {adressUser} = useContext(UserAdressContext)
    const {storedTotal} = useContext(TotalValueContext)

    console.log('valor do storedTotal: ', storedTotal)
    
    return (

        <>

        <h1>Componente de confirmação</h1>

        <h1>Teste</h1>


        <div>
          <h2>Para continuar, preencha os campos abaixo.</h2>
        </div>


        <p>Qual o seu nome?</p>
        <UserName />
        <p>nome: {userNameInput}</p>

              
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


        <h1>{storedTotal}</h1>

        <Link to='/deliveryPage'>Redefinir os itens escolhidos</Link>


        ,<Link to = '/sendpage'>Confirmar pedido</Link>


        
        
        </>
    )
}

export default Confirmation