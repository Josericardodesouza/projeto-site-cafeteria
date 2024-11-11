import { useState } from "react";
import ItemsListContext from "./ItemsListContext";

const ItemsListContextProvider = ({children}) => {

   



    return (
        <ItemsListContext.Provider>
            {children}
        </ItemsListContext.Provider>
    )

    

    
}


export default ItemsListContextProvider