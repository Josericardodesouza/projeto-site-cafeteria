import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { useContext } from "react"
import ItemsListContext from "../context/ItemsListContext"







function SendPage() {

    

    const itensProperties = useContext(ItemsListContext)

    const renderListItemsSelected = () => {
        if (!itensProperties || Object.keys(itensProperties).length === 0) {
            <p>Nenhum item selecionado</p>
        }
        return Object.keys(itensProperties).map((key) => {
          if (itensProperties[key].quant > 0) {
            return <p key={key}>Você selecionou {itensProperties[key].quant} unidades de {itensProperties[key].name} no valor de {itensProperties[key].price}</p>
          }
          return null 
        } )
      
      
      }
      
      

    return (

        <>

        <div>
          
        </div>

        <NavBar />

        <header>

        </header>


        <h2>Sua encomenda está a caminho!</h2>

        lista dos itens pedidos

        {renderListItemsSelected()}

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