import ItemsListContext from "./ItemsListContext";

const ItemsListContextProvider = ({children, itensProperties}) => {
    return (
        <ItemsListContext.Provider value={itensProperties}>
            {children}
        </ItemsListContext.Provider>
    )

}

export default {ItemsListContextProvider}