import '../styles/menus-module.css'

function MenuCoffee() {
    return (
        <>
        <h1>Cafés</h1>

       <section className='section_menu'>

        <div className = 'box_menu'>
            <table>
                <tr>
                    <td className = 'item'>Café Coado</td>
                    <td className = 'value'>R$ 45,90</td>
                </tr>

                <tr>
                <td className = 'item'>Café Gelado</td>
                <td className = 'value'>R$ 45,90</td>
                </tr>

                <tr>
                <td className = 'item'>Cappuccino</td>
                <td className = 'value'>R$ 45,90</td>
                </tr>

                <tr>
                    <td className = 'item'>Cold Brew</td>
                    <td className = 'value'>R$00,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Espresso</td>
                    <td className = 'value'>R$00,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Expresso Tônico</td>
                    <td className = 'value'>R$00,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Frapuccino</td>
                    <td className = 'value'>R$00,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Latte</td>
                    <td className = 'value'>R$00,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Mocha</td>
                    <td className = 'value'>R$00,00</td>
                </tr>

                <tr>
                    <td className = 'item'>Pingado</td>
                    <td className = 'value'>R$00,00</td>
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