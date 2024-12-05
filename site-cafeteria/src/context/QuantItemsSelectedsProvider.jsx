import { useState } from "react";
import { useEffect } from "react";
import { SelectedItemsContext } from "./SelectedItemsContext";
import { QuantItemsSelectedsContext } from "./QuantItemsSelectedsContext";

function QuantItemsSelectedsProvider( {children} ) {
    const [storedQuantItems, setStoredQuantItems] = useState(() => {
        return localStorage.getItem('quantItemsSelecteds') || ''
    })

    useEffect(() => {
        localStorage.setItem('quantItemsSelecteds', storedQuantItems)
    })


    return (

        <>

        <QuantItemsSelectedsContext.Provider value={{storedQuantItems, setStoredQuantItems}}>

            {children}

        </QuantItemsSelectedsContext.Provider>
        
        </>
    )
}

export default QuantItemsSelectedsProvider