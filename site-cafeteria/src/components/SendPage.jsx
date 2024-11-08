import { Link } from "react-router-dom"
import NavBar from "./NavBar"







function SendPage() {

    return (
        <>

        <div>
          
        </div>

        <NavBar />

        <header>

        </header>


        <h2>Sua encomenda está a caminho!</h2>

        lista dos itens pedidos

{/* 
        <div>
            <ItensListDelivery quantity = {quantity}/>
        </div> */}



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