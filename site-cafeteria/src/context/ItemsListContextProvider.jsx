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

      const lista = 5

      console.log('Isso é o provider:', lista)
      
    return (



        <ItemsListContext.Provider value={lista}>
            {children}
        </ItemsListContext.Provider>
    )

}


export default {ItemsListContextProvider}