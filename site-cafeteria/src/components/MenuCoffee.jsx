import '../styles/menus-module.css'



import { coldDrinks, hotDrinks } from './ConstantsItens'



function MenuCoffee() {



    return (
        <>
        

       <section className='section_menu'>

        <div className = 'box_menu'>
        <h1 className = 'title_table'>Quentes</h1> 
            <table className='cardapio'>
                {hotDrinks.map(cafes => (
                    <tr key={cafes.id}>
                        <td className='item'>{cafes.name}</td>
                        <td className='value'>R$ {cafes.price}</td>
                    </tr>
                ))}

                <h1 className='title_table'>Geladas</h1>

                    {coldDrinks.map(gelados => (
                    <tr key={gelados.id}>
                        <td className='item'>{gelados.name}</td>
                        <td className='value'>RR$ {gelados.price}</td>


                    </tr>
                ))}
           


            
        

            </table>
        </div>

        <div className='aboutItem'>
            <img></img>
            <p></p>

        </div>

       </section>
        
        </>
    )
}

export default MenuCoffee;
