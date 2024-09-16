import '../styles/menus-module.css'

import brigadeiroImg from '../assets/images/cards-images/pexels-livilla-latini-1678510737-27850066-brigadeiro.jpg'
import brownieImg from '../assets/images/cards-images/pexels-ella-olsson-572949-3026804-brownie.jpg'
import cookieImg from '../assets/images/cards-images/pexels-sara-santos-381576-1020585-cookies.jpg'
import cupcakeImg from '../assets/images/cards-images/pexels-aqtai-635409-cupcake.jpg'
import paoDeMelImg from '../assets/images/cards-images/pão-de-mel-caldeirao-bruxa-solar.jpeg'
import tortaImg from '../assets/images/cards-images/kavya-p-k-zQ4jrYelvLs-unsplash-torta-maca.jpg'

function MenuCandy() {

    const candyList = [
        {
            id: 1,
            name: 'brigadeiros',
            price: '0,20',
            img: brigadeiroImg
        },

        {
            id: 2,
            name: 'Brownies',
            price: '3,00',
            img: brownieImg
        },

        {
            id: 3,
            name: 'Cookies',
            price: '0,30',
            img: cookieImg
        },

        {
            id: 4,
            name: 'Cupcakes',
            price: '7,00',
            img: cupcakeImg
        },

        {
            id: 5,
            name: 'Pâo de Mel',
            price: '1,50',
            img: paoDeMelImg
        },

        {
            id: 6,
            name: 'Tortas',
            price: '16,00',
            img: tortaImg
        }
    ]

    return (
        <>

        <section className='section_menu'>
            <div className = 'box_menu'>
            <h1 className = 'title_table'>Doces</h1>
                <table>
                   {candyList.map(doces => (
                    <tr key={doces.id}>
                        <td className='item'>{doces.name}</td>
                        <td className='price'>'R$' {doces.price}</td>

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