import '../styles/menus-module.css'

import cafeCoadoImg from '../assets/images/cards-images/cafe-coado.jpeg'
import cafeGeladoImg from '../assets/images/cards-images/cafe-gelado.jpeg'
import cappucinoImg from '../assets/images/cards-images/pexels-andrew-peterson-113438-350478.jpg'
import coldBrewImg from '../assets/images/cards-images/cold-brew.jpg'
import espressoImg from '../assets/images/cards-images/pexels-raymond-petrik-1448389535-28320963-espresso.jpg'
import espressoTonicoImg from '../assets/images/cards-images/coffee-4862622_1280-espressotonico.jpg'
import frappuccinoImg from '../assets/images/cards-images/cafe-frappuccino.jpeg'
import latteImg from '../assets/images/cards-images/latte-art-2431160_1280-latte.jpg'
import mochaImg from '../assets/images/cards-images/cafe-mocha.jpeg'
import pingadoImg from '../assets/images/cards-images/pingado.jpg'

const coffeeList = [ /**depois importa  a constante se quiser */
    {
        id: 1,
        name: 'café coado',
        price: '1,50',
        img: cafeCoadoImg

    },

    {
        id: 2,
        name: 'café gelado',
        price: '2,20',
        img: cafeGeladoImg
    },

    {
        id: 3,
        name: 'Cappuccino',
        price: '6,00',
        img: cappucinoImg

    },

    {
        id: 4,
        name: 'Cold Brew',
        price: '11,00',
        img: coldBrewImg

    },

    {
        id: 5,
        name: 'Espresso',
        price: '6,00',
        img: espressoImg
    },

    {
        id: 6,
        name: 'Expresso Tônico',
        price: '5,00',
        img: espressoTonicoImg
    },

    {
        id: 7,
        name: 'Frappuccino',
        price: '19,00',
        img: frappuccinoImg
    },

    {
        id: 8,
        name: 'Latte',
        price: '20,00',
        img: latteImg
    },

    {
        id: 9,
        name: 'Mocha',
        price: '8,00',
        img: mochaImg
    },

    {
        id: 10,
        name: 'Pingado',
        price: '5,00',
        img: pingadoImg
    }

    



]

function MenuCoffee() {



    return (
        <>
        

       <section className='section_menu'>

        <div className = 'box_menu'>
        <h1 className = 'title_table'>Quentes</h1> 
            <table>
                {coffeeList.map(cafes => (
                    <tr key={cafes.id}>
                        <td className='item'>{cafes.name}</td>
                        <td className='value'>R$ {cafes.price}</td>

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
export {coffeeList}