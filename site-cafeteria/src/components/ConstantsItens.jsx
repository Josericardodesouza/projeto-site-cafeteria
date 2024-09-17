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


import brigadeiroImg from '../assets/images/cards-images/pexels-livilla-latini-1678510737-27850066-brigadeiro.jpg'
import brownieImg from '../assets/images/cards-images/pexels-ella-olsson-572949-3026804-brownie.jpg'
import cookieImg from '../assets/images/cards-images/pexels-sara-santos-381576-1020585-cookies.jpg'
import cupcakeImg from '../assets/images/cards-images/pexels-aqtai-635409-cupcake.jpg'
import paoDeMelImg from '../assets/images/cards-images/pão-de-mel-caldeirao-bruxa-solar.jpeg'
import tortaImg from '../assets/images/cards-images/kavya-p-k-zQ4jrYelvLs-unsplash-torta-maca.jpg'


const hotDrinks = [
    
        {
            id: 1,
            name: 'café coado',
            price: '1,50',
            img: cafeCoadoImg
    
        },

        {
            id: 2,
            name: 'Cappuccino',
            price: '6,00',
            img: cappucinoImg
    
        },

        {
            id: 3,
            name: 'Espresso',
            price: '6,00',
            img: espressoImg
        },


        {
            id: 4,
            name: 'Latte',
            price: '20,00',
            img: latteImg
        },

        {
            id: 5,
            name: 'Mocha',
            price: '8,00',
            img: mochaImg
        },

        
    {
        id: 6,
        name: 'Pingado',
        price: '5,00',
        img: pingadoImg
    }



    
]

const coldDrinks = [ 
 

    {
        id: 1,
        name: 'café gelado',
        price: '2,20',
        img: cafeGeladoImg
    },



    {
        id: 2,
        name: 'Cold Brew',
        price: '11,00',
        img: coldBrewImg

    },

 

    {
        id: 3,
        name: 'Expresso Tônico',
        price: '5,00',
        img: espressoTonicoImg
    },

    {
        id: 4,
        name: 'Frappuccino',
        price: '19,00',
        img: frappuccinoImg
    }



 


    
]



/**área dos doces */


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



function ConstantsItens() {

    return (
        <></>
    )

}

export default ConstantsItens
export {hotDrinks}
export {coldDrinks}
export {candyList}
