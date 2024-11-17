import { useEffect, useState } from "react";
import { CommentContext } from "./CommentContext";


function CommentProvider({children}) {

    const [storedComment, setStoredComment] = useState(() => {
        return localStorage.getItem('comment') || ''
    })

    useEffect(() => {
        localStorage.setItem('comment', storedComment)
    }, [storedComment])

   


    return (
        <>

        <CommentContext.Provider value={{storedComment, setStoredComment}}>
            {children}

        </CommentContext.Provider>
        
        </>
    )
}

export default CommentProvider