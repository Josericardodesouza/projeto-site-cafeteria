import { createContext, useContext, useState } from "react";
import ItemsListContext from "./ItemsListContext";

const ItemsListContext = createContext()

const ItemsListContextProvider = ({children}) => {
    const [itensProperties, setItensProperties] = useState({})


    return (
        <ItemsListContext.Provider value= {{itensProperties, setItensProperties}}>
            {children}
        </ItemsListContext.Provider>
    )

    

    
}


export default ItemsListContextProvider
export {ItemsListContext}