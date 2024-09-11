import '../styles/menus-module.css'

function MenuCandy() {
    return (
        <>

        <section className='section_menu'>
            <div className = 'box_menu'>
            <h1 className = 'title_table'>Doces</h1>
                <table>
                    <tr>
                       <td className = 'item'>Brigadeiros</td>
                       <td className = 'value'>R$ 0,20</td>
                    </tr>
                    <tr>
                    <td className = 'item'>Brownies</td>
                    <td className = 'value'>R$ 3,00</td>
                    </tr>
                    <tr>
                    <td className = 'item'>Cookies</td>
                    <td className = 'value'>R$ 0,30</td>
                    </tr>
                    <tr>
                    <td className = 'item'>Cupcakes</td>
                    <td className = 'value'>R$ 7,00</td>
                    </tr>
                    <tr>
                    <td className = 'item'>Pão de Mel</td>
                    <td className = 'value'>R$ 1,50</td>
                    </tr>
                    <tr>
                    <td className = 'item'>Tortas</td>
                    <td className = 'value'>R$ 16,00</td>
                    </tr>
           


{/* 
                <td>Bolo de Cenoura</td>
                <td>R$ 34,20</td> */}



            </table>

            </div>

        </section>
        
        </>
    )
}

export default MenuCandy