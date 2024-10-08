import '../styles/menus-module.css'


import cafeCoadoImg from '../assets/images/cards-images/cafe-coado.jpeg'
import cappucinoImg from '../assets/images/cards-images/pexels-andrew-peterson-113438-350478.jpg'
import espressoImg from '../assets/images/cards-images/pexels-raymond-petrik-1448389535-28320963-espresso.jpg'
import latteImg from '../assets/images/cards-images/latte-art-2431160_1280-latte.jpg'
import mochaImg from '../assets/images/cards-images/cafe-mocha.jpeg'
import pingadoImg from '../assets/images/cards-images/pingado.jpg'



import { hotDrinks } from './ConstantsItens'
import { useRef } from 'react'

const coado = hotDrinks[0]
const cappuccino = hotDrinks[1]
const espresso = hotDrinks[2]
const latte = hotDrinks[3]
const mocha = hotDrinks[4]
const pingado = hotDrinks[5]






function MenuCoffee() {


    const nameRef = useRef(null)
    


    const imageCoffee = document.getElementById('item_img')
    var description = document.getElementById('item_text')
    var texto = ''
  

    const rodar = (event) => {

        const nameItem = event.target.textContent

        switch (nameItem) {
            case 'café coado':
                console.log('teste coado')
                
                document.getElementById('item_text').innerHTML = `${coado.text}`
                imageCoffee.src =  coado.img
                
                console.log(coado.text)
                break;

            case 'Cappuccino':
                console.log('teste cappuccino')
                document.getElementById('item_text').innerHTML = `${cappuccino.text}`
                imageCoffee.src = cappuccino.img

                console.log(cappuccino.text)
                break;

            case 'Espresso':
                console.log('teste espresso')
                document.getElementById('item_text').innerHTML = `${espresso.text}`
                imageCoffee.src = espresso.img

                break;
            
            case 'Latte':
                console.log('teste latte')
                document.getElementById('item_text').innerHTML = `${latte.text}`
                imageCoffee.src = latte.img

                break;

            case 'Mocha':
                console.log('teste Mocha')
                document.getElementById('item_text')
            
            default:
                console.log('não passou')
        }


        


    }






    return (
        <>
        

       <section className='section_menu'>

        <div className = 'box_menu'>
   

        <div>
            <img src= "" alt="" id='item_img' />
            <p id='item_text'></p>
        </div>




        <div id='imgCoffee'></div>
            <table className='cardapio'>
                <tbody>
                    
                        <tr>
                            <td className='item'><a onClick= {rodar}>{coado.name}</a></td>
                            <td className='value'><a onClick="">{coado.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {rodar}>{cappuccino.name}</a></td>
                            <td className='value'><a onClick="">{cappuccino.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick="">{espresso.name}</a></td>
                            <td className='value'><a onClick="">{espresso.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick="">{latte.name}</a></td>
                            <td className='value'><a onClick="">{latte.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick="">{mocha.name}</a></td>
                            <td className='value'><a onClick="">{latte.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick="">{pingado.name}</a></td>
                            <td className='value'><a onClick="">{pingado.price}</a></td>
                        </tr>


                

                
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
