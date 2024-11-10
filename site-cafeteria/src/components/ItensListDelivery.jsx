function ItensListDelivery({renderListItemsSelected}) {

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

        {renderListItemsSelected}
      
        </>
    )


}

export default ItensListDelivery