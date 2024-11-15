import { useState } from "react"

function UserComment() {

    const [comment, setComment] = useState('')

    const [storedComment, setStoredComment] = useState('')


    const textChange = (e) => {
        setComment(e.target.value)


    }

    const confirmComment = (e) => {
        setStoredComment(comment)
    }

    

    return (
        <>

        <textarea placeholder="teste" onChange={textChange}></textarea>

        <button onClick={confirmComment}>Confirmar</button>

        <div>
            <p>comentário:</p>
            {storedComment}
        </div>

        
        
        </>
    )

}



export default UserComment