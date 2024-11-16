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

        <textarea placeholder="teste" onChange={textChange} onBlur={confirmComment}>Teste</textarea>

     

        <div>
            <p>comentário:</p>
           
          
        </div>

        
        
        </>
    )

}



export default UserComment