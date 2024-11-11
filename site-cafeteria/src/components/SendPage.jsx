import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import ItensListDelivery from "./ItensListDelivery"
import { useContext } from "react"
import { UserAdressContext } from '../context/UserAdressContext'
import UserAdress from "./UserAdress"










function SendPage() {

    const {adressUser} = useContext(UserAdressContext)



  

  

    

      
      

    return (

        <>

       

        <NavBar />

        <header>

        </header>


        <h2>Sua encomenda está a caminho!</h2>

        lista dos itens pedidos

       

<div>
      <h2>Resumo do Endereço</h2>
      <p>Estado: {adressUser.state}</p>
      <p>Cidade: {adressUser.city}</p>
      <p>Bairro: {adressUser.neighborhood}</p>
      <p>Rua: {adressUser.street}</p>
    </div>

     





      




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