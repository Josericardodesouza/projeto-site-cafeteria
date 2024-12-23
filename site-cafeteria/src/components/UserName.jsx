import { useContext } from "react"
import { useState } from "react"
import { UserNameContext } from "../context/UserNameContext"

function UserName() {

   


   const {setStoredUserNameInput} = useContext(UserNameContext)


    const renderUserName = (e) => {

        setStoredUserNameInput(e.target.value)
        console.log("Valor digitado: ", e.target.value);
        
    }


  






    return (
        <>
        
            <label htmlFor="user_name">Digite seu nome</label>
            <input id='user_name' name='user_name' onChange={renderUserName}></input>

        
        
        </>
    )
}

export default UserName