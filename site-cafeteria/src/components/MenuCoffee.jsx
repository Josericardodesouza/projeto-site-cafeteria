import '../styles/menus-module.css'



import { hotDrinks } from './ConstantsItens'



function MenuCoffee() {




    return (
        <>
        

       <section className='section_menu'>

        <div className = 'box_menu'>
        <h1 className = 'title_table'>Quentes</h1> 
            <table className='cardapio'>
                <tbody>
                    {hotDrinks.map(cafes => (
                        <tr key={cafes.id}>
                            <td className='item'>{cafes.name}</td>
                            <td className='value'>R$ {cafes.price}</td>
                        </tr>
                    ))}
                    </tbody>
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
