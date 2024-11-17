import { useState } from "react"
import { UserNameContext } from "./UserNameContext"

function UserNameProvider({children}) {

    const [userNameInput, setUserNameInput] = useState('nome inicial')


    return (

        <UserNameContext.Provider value = {{userNameInput, setUserNameInput}}>
            {children}

        </UserNameContext.Provider>

    )
}

export default UserNameProvider