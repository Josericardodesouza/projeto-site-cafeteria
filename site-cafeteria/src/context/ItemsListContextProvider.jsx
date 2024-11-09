import ItemsListContext from "./ItemsListContext";

const ItemsListContextProvider = ({children, texto}) => {






    // const renderListItemsSelected = () => {
    //     return Object.keys(itensProperties).map((key) => {
    //       if (itensProperties[key].quant > 0) {
    //         return <p key={key}>Você selecionou {itensProperties[key].quant} unidades de {itensProperties[key].name} no valor de {itensProperties[key].price}</p>
    //       }
    //       return null 
    //     } ).filter(Boolean).join('\n')
      
      
    //   }

    //   const lista = 5

    //   console.log('Isso é o provider:', renderListItemsSelected)

    console.log('Valor de texto no ItemsListContextProvider:', texto);
      
    return (



        <ItemsListContext.Provider value={texto}>
            {children}
        </ItemsListContext.Provider>
    )

}


export default ItemsListContextProvider