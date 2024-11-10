import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { useContext } from "react"
import ItemsListContext from "../context/ItemsListContext"
import  ItemsListContextProvider  from "../context/ItemsListContextProvider"
import ItensListDelivery from "./ItensListDelivery"








function SendPage() {

  

  

    

      
      

    return (

        <>

       

        <NavBar />

        <header>

        </header>


        <h2>Sua encomenda está a caminho!</h2>

        lista dos itens pedidos

       

        {/* {renderListItemsSelected()} */}
        <div>
            {/* {lista ? (lista.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))) : (
                <p>Nenhum item selecionado</p>
            )}
           */}

          
          
        </div>

        {/* <p>{pText}</p> */}
       

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