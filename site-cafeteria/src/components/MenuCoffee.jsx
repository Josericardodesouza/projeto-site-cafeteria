import '../styles/menus-module.css'

function MenuCoffee() {

    const prices = [

        



    ]

    return (
        <>
        

       <section className='section_menu'>

        <div className = 'box_menu'>
        <h1 className = 'title_table'>Quentes</h1> 
            <table>
                <tr>
                    <td className = 'item'>Café Coado</td>
                    <td className = 'value'>R$ 1,50</td>
                </tr>

                <tr>
                <td className = 'item'>Café Gelado</td>
                <td className = 'value'>R$ 2,20</td>
                </tr>

                <tr>
                <td className = 'item'>Cappuccino</td>
                <td className = 'value'>R$ 6,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Cold Brew</td>
                    <td className = 'value'>R$ 11,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Espresso</td>
                    <td className = 'value'>R$ 6,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Expresso Tônico</td>
                    <td className = 'value'>R$ 5,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Frappuccino</td>
                    <td className = 'value'>R$ 19,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Latte</td>
                    <td className = 'value'>R$ 20,00</td>
                </tr>

               

                <tr>
                    <td className = 'item'>Mocha</td>
                    <td className = 'value'>R$ 8,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Pingado</td>
                    <td className = 'value'>R$ 5,00</td>
                </tr>
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

export default MenuCoffee