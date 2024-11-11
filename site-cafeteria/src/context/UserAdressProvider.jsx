import { useState } from "react"
import { UserAdressContext } from "./UserAdressContext"

function UserAdressProvider({children}) {

    const [adressUser, setAdressUser] = useState({

        state: '',
        city: '',
        neighborhood: '',
        street: ''



    })



    return (

       <UserAdressContext.Provider value={{adressUser, setAdressUser}}>
        {children}

       </UserAdressContext.Provider>
    )
}

export default UserAdressProvider