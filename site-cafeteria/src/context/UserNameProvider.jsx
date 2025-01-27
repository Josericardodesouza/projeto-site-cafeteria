import { useState } from "react"
import { UserNameContext } from "./UserNameContext"
import { useEffect } from "react";

function UserNameProvider({children}) {

    const [storedUserNameInput, setStoredUserNameInput] = useState(() => {
        const savedUserName = localStorage.getItem('userName')
        return savedUserName != null ? savedUserName : ''
     
        
        
          });
   
          useEffect(() => {
            localStorage.setItem('userName', storedUserNameInput);
          }, [storedUserNameInput]);


    return (

        <UserNameContext.Provider value = {{storedUserNameInput, setStoredUserNameInput}}>
            {children}

        </UserNameContext.Provider>

    )
}

export default UserNameProvider