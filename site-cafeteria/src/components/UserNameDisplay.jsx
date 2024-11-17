import { useContext } from "react";
import { UserNameContext } from "../context/UserNameContext";

function UserNameDisplay() {

    const { userNameInput } = useContext(UserNameContext);


    return (
        <>

        <p>{userNameInput}</p>


        
        </>
    )
}

export default UserNameDisplay