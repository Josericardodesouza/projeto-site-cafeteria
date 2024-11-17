import { useState } from "react"
import { UserNameContext } from "./UserNameContext"
import { useEffect } from "react";

function UserNameProvider({children}) {

    const [userNameInput, setUserNameInput] = useState(() => {
     
        
            return localStorage.getItem('userName') || '';
          });
   
          useEffect(() => {
            localStorage.setItem('userName', userNameInput);
          }, [userNameInput]);


    return (

        <UserNameContext.Provider value = {{userNameInput, setUserNameInput}}>
            {children}

        </UserNameContext.Provider>

    )
}

export default UserNameProvider