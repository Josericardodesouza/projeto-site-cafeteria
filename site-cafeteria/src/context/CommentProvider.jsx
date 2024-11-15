import { useState } from "react";
import { CommentContext } from "./CommentContext";


function CommentProvider({children}) {

    const [storedComment, setStoredComment] = useState('')
    return (
        <>

        <CommentContext.Provider value={{storedComment, setStoredComment}}>
            {children}

        </CommentContext.Provider>
        
        </>
    )
}

export default CommentProvider