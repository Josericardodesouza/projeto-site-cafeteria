import { useEffect } from "react"
import { useState } from "react"
import { TotalValueContext } from "./TotalValueContext"

function TotalValueProvider({children}) {

    const [storedTotal, setStoredTotal] = useState(() => {
        return localStorage.getItem('totalValue') || ''
    })

    useEffect(() => {
        localStorage.setItem('totalValue', storedTotal) 
    }, [storedTotal]
    )

    return (
        <>

        <TotalValueContext.Provider value={{storedTotal, setStoredTotal}}>
            {children}
        </TotalValueContext.Provider>
        
        </>
    )
}

export default TotalValueProvider