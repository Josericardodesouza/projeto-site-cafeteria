import { useContext } from "react"
import { useState } from "react"
import { UserNameContext } from "../context/UserNameContext"

function UserName() {

   


   const {setUserNameInput} = useContext(UserNameContext)


    const renderName = (e) => {

        setUserNameInput(e.target.value)
        
    }







    return (
        <>
        
            <label htmlFor="user_name">Digite seu nome</label>
            <input id='user_name' name='user_name' onBlur={renderName}></input>

        
        
        </>
    )
}

export default UserName