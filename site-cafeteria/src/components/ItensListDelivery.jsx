function ItensListDelivery(quantity) {

    const teste = quantity.inputCoado


    return (
        <>
           {quantity.inputCoado > 1 && (

<div>

<p>Quantidade de café {quantity.inputCoado} X</p>

</div>




)} 

<p>por favor{teste}</p>
        </>
    )
}

export default ItensListDelivery