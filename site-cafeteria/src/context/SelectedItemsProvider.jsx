import { useState } from "react"
import { SelectedItemsContext } from "./SelectedItemsContext"
import { useEffect } from "react"

function SelectedItemsProvider( {children} ) {

  

    const [storedListItemsNames, setStoredListItemsNames] = useState(() => {
        return localStorage.getItem('selectedItems') || ''
    })

    useEffect(() => {
        localStorage.setItem('selectedItems', storedListItemsNames)
    })


    return (
        <>

        <SelectedItemsContext.Provider value ={{storedListItemsNames, setStoredListItemsNames}}>
            {children}
        </SelectedItemsContext.Provider>


      



        </>
    )
}

export default SelectedItemsProvider