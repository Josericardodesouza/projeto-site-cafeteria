import { useContext } from "react"
import { useState } from "react"
import { UserNameContext } from "../context/UserNameContext"

function UserName() {

   


   const {setUserNameInput} = useContext(UserNameContext)


    const renderUserName = (e) => {

        setUserNameInput(e.target.value)
        console.log("Valor digitado: ", e.target.value); // Adicione isso
        
    }


  






    return (
        <>
        
            <label htmlFor="user_name">Digite seu nome</label>
            <input id='user_name' name='user_name' onBlur={renderUserName}></input>

        
        
        </>
    )
}

export default UserName