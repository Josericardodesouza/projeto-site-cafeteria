function MenuItemsProvider({ Children }) {
    return (
        <>

            <MenuItemsContext.Provider value={renderListItemsSelected()}>
                {Children}
            </MenuItemsContext.Provider>


        </>
    )
}

export default MenuItemsProvider