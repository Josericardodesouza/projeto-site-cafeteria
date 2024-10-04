import '../styles/menus-module.css'

import { coldDrinks } from './ConstantsItens'

function MenuColdDrinks() {
    return (
        <>

        <section className='section_menu'>

            <div className='box_menu'>
                <h1>ícone de café gelado</h1>

                <table className='cardapio'>
                    <tbody>
                        {coldDrinks.map(colds => (
                            <tr key= {colds.id}>

                                <td className='item'>{colds.name}</td>
                                <td className='value'>{colds.price}</td>

                            </tr>


                        ))}


                    </tbody>



                </table>

            </div>

        </section>
        
        
        
        </>


    )
}

export default MenuColdDrinks