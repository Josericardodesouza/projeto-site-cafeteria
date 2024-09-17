import '../styles/menus-module.css'
import { candyList } from './ConstantsItens'

function MenuCandy() {



    return (
        <>

        <section className='section_menu'>
            <div className = 'box_menu'>
            <h1 className = 'title_table'>Doces</h1>
                <table className='cardapio'>
                   {candyList.map(doces => (
                    <tr key={doces.id}>
                        <td className='item'>{doces.name}</td>
                        <td className='value'>R$ {doces.price}</td>

                    </tr>

                   ))}

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