function DisplayDiv({divs}) {
    return (
        <>
        <div>
            {divs.map(( index) => (

                <div key={index}>
                    <p>Este é um texto</p>


                </div>


            ))}



        </div>
        
        
        </>
    )
}

export default DisplayDiv