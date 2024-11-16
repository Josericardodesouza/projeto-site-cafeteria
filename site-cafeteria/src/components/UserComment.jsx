import { useContext, useState } from "react"
import { CommentContext } from "../context/CommentContext"



function UserComment() {

    
    const {setStoredComment} = useContext(CommentContext)
 

    const [comment, setComment] = useState('')

    


    const textChange = (e) => {
        setComment(e.target.value)


    }

  

    const confirmComment = (e) => {
        setStoredComment(comment)
    }

    

    return (
        <>

        <textarea placeholder="teste" onChange={textChange}>Teste</textarea>

        <button onClick={confirmComment}>Confirmar</button>

        <div>
            <p>comentário:</p>
           
          
        </div>

        
        
        </>
    )

}



export default UserComment