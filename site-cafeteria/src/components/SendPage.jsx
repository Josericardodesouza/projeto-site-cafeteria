import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import ItensListDelivery from "./ItensListDelivery"
import { useContext } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { UserNameContext } from "../context/UserNameContext"










function SendPage() {

    const { adressUser } = useContext(UserAdressContext);
    const { userNameInput } = useContext(UserNameContext);
    














    return (

        <>



            <NavBar />

            <header>

            </header>


            <h2>Sua encomenda está a caminho!</h2>

          

            lista dos itens pedidos


            <p>Entrega em {adressUser.state}, na cidade de {adressUser.city}, no bairro {adressUser.neighborhood}, na rua {adressUser.street} </p>

            <h1>Para</h1>

            <p>{userNameInput}</p>

            <p>
               
            </p>


            

     











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