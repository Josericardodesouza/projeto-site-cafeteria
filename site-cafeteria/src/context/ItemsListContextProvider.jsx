import { useState } from "react";
import ItemsListContext from "./ItemsListContext";

const ItemsListContextProvider = ({items, children}) => {
    return (
        <ItemsListContext.Provider value={items}>
            {children}

        </ItemsListContext.Provider>
    )

}

  
    

    



export default ItemsListContextProvider