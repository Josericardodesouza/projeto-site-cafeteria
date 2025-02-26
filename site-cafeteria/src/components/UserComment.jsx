import { useContext, useState } from "react"
import { CommentContext } from "../context/CommentContext"



function UserComment() {

    
    const {setStoredComment} = useContext(CommentContext)
 

    const [comment, setComment] = useState('')

    


    const textChange = (e) => {
        setComment(e.target.value)
        setStoredComment(comment)


    }

  

    const confirmComment = () => {
        // setStoredComment(comment)
    }


    


    // const testeDuasFuncoes = (event) => {
    //     textChange(event)
    //     confirmComment(event)

    // }

    

    return (
        <>

    

     

      
            {/* <p id="p_comment">Deixe um comentário:</p> */}
            <textarea placeholder={comment} onChange={textChange} onBlur={confirmComment} value={comment}>Teste</textarea>
           
          
      

        
        
        </>
    )

}



export default UserComment