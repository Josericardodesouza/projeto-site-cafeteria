import ItemsListContext from "./ItemsListContext";

function ItemsListContextProvider({children, itensProperties}) {
    return (
        <>
        <ItemsListContext.Provider value={itensProperties}>
            {children}
        </ItemsListContext.Provider>
        </>

    )
}

export default ItemsListContextProvider