import { Link } from "react-router-dom"







function SendPage() {

    return (
        <>
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