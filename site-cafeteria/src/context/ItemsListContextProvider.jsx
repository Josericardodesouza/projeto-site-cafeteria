import {ItemsListContext} from "./ItemsListContext";

const ItemsListContextProvider = ({children, itensProperties}) => {

    const renderListItemsSelected = () => {
        return Object.keys(itensProperties).map((key) => {
          if (itensProperties[key].quant > 0) {
            return <p key={key}>Você selecionou {itensProperties[key].quant} unidades de {itensProperties[key].name} no valor de {itensProperties[key].price}</p>
          }
          return null 
        } ).filter(Boolean).join('\n')
      
      
      }

      const textGenerate = renderListItemsSelected()
      
    return (



        <ItemsListContext.Provider value={textGenerate}>
            {children}
        </ItemsListContext.Provider>
    )

}


export default {ItemsListContextProvider}