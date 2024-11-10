function ItensListDelivery({ itensProperties}) {



    // const addQuantity = (key) => {
    //     setItensProperties((prevQuantity) => ({
    //       ...prevQuantity, [key]: {
    //         ...prevQuantity[key],
    //       quant: prevQuantity[key].quant + 1,
        
    
    //   }}))
    //   }

      
    //   const subQuantity = (key) => {
    //     setItensProperties((prevQuantity) => ({
    //       ...prevQuantity, [key]: {
    //         ...prevQuantity[key],
    //         quant: prevQuantity[key].quant > 0 ? prevQuantity[key].quant - 1 : 0
      
    //   }
    //   }))
    //   }
      
      

    const renderListItemsSelected = () => {
        return Object.keys(itensProperties).map((key) => {
          if (itensProperties[key].quant > 0) {
            return <p key={key}>Você selecionou {itensProperties[key].quant} unidades de {itensProperties[key].name} no valor de {itensProperties[key].price}</p>
          }
          return null 
        } )
      
      
      }


      console.log('Teste do componenente da lista')
    //   console.log('Isso é a itensProperties: ', item )
      

    return (
        <>

        <p>Teste lista de itens: </p>

        {renderListItemsSelected()}
      
        </>
    )


}

export default ItensListDelivery