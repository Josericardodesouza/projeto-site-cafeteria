import { useContext, useState } from "react"
import { CommentContext } from "../context/CommentContext"



function UserComment() {

    
    const {setStoredComment} = useContext(CommentContext)
 

    const [comment, setComment] = useState('')

    


    const textChange = (e) => {
        setComment(e.target.value)


    }

  

    const confirmComment = () => {
        setStoredComment(comment)
    }


    


    // const testeDuasFuncoes = (event) => {
    //     textChange(event)
    //     confirmComment(event)

    // }

    

    return (
        <>

    

     

      
            {/* <p id="p_comment">Deixe um comentário:</p> */}
            <textarea placeholder="Deixe aqui seu comentário" onChange={textChange} onBlur={confirmComment} value={comment}>Teste</textarea>
           
          
      

        
        
        </>
    )

}



export default UserComment