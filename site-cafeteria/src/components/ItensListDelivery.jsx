function ItensListDelivery(quantity) {
    return (
        <>
           {quantity.inputCoado > 1 && (

<div>

<p>Quantidade de café {quantity.inputCoado} X</p>

</div>


)} 
        </>
    )
}

export default ItensListDelivery