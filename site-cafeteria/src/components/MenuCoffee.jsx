import '../styles/menus-module.css'


import cafeCoadoImg from '../assets/images/cards-images/cafe-coado.jpeg'
import cappucinoImg from '../assets/images/cards-images/pexels-andrew-peterson-113438-350478.jpg'
import espressoImg from '../assets/images/cards-images/pexels-raymond-petrik-1448389535-28320963-espresso.jpg'
import latteImg from '../assets/images/cards-images/latte-art-2431160_1280-latte.jpg'
import mochaImg from '../assets/images/cards-images/cafe-mocha.jpeg'
import pingadoImg from '../assets/images/cards-images/pingado.jpg'



import { hotDrinks } from './ConstantsItens'
import { useRef } from 'react'
import { GiCoffeeCup } from 'react-icons/gi'

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


  


  

    const displayTextImg = (event) => {

        const nameItem = event.target.textContent

        document.getElementById('icon_coffee_menu').style.display = 'none'

        var divItemDescription = document.getElementById('box_links_menu')
        divItemDescription.scrollIntoView({behavior: 'smooth'})


        switch (nameItem) {
            case 'café coado':


                console.log('teste coado')

                document.getElementById('title_item').innerHTML = coado.name



                document.getElementById('item_img').src = coado.img
                
                document.getElementById('item_text').innerHTML = `${coado.text}`

                

                
               
                
                console.log(coado.text)
                break;

            case 'Cappuccino':
                console.log('teste cappuccino')

                document.getElementById('title_item').innerHTML = cappuccino.name
                document.getElementById('item_img').src = cappuccino.img
                document.getElementById('item_text').innerHTML = `${cappuccino.text}`
                

                console.log(cappuccino.text)
                break;

            case 'Espresso':
                console.log('teste espresso')
                document.getElementById('title_item').innerHTML = espresso.name
                document.getElementById('item_img').src = espresso.img
                document.getElementById('item_text').innerHTML = `${espresso.text}`

             
                

                break;
            
            case 'Latte':
                console.log('teste latte')
                document.getElementById('title_item').innerHTML = latte.name
                document.getElementById('item_img').src = latte.img
                document.getElementById('item_text').innerHTML = `${latte.text}`
                

                break;

            case 'Mocha':
                console.log('teste Mocha')
                document.getElementById('title_item').innerHTML = mocha.name
                document.getElementById('item_img').src = mocha.img
                document.getElementById('item_text').innerHTML = `${mocha.text}`
               
                
                break;

            case 'Pingado':
                console.log('teste pingado')
                document.getElementById('title_item').innerHTML = pingado.name
                document.getElementById('item_img').src =  pingado.img
                document.getElementById('item_text').innerHTML = `${pingado.text}`
                

                break;
            
            default:
                console.log('não passou')
        }


      




        


    }






    return (
        <>
        

       <section className='section_menu'>

        <div className = 'box_menu'>
   

        <div className='conteiner_img_text' id='conteiner_img_text_hotDrinks'>
            <p id='title_item' className='item_title_menu'></p>
            <img src= "" alt="" id='item_img' className = 'item_img_menu'/>
            <svg className='icon_item_menu' id = 'icon_coffee_menu'><GiCoffeeCup /></svg>
            <p id='item_text' className='item_text_menu'>Clique em um dos itens do cardápio abaixo para <strong>saber sobre</strong></p>
        </div>
            <table className='cardapio'>
                <tbody>
                    
                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{coado.name}</a></td>
                            <td className='value'><a onClick="">{coado.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{cappuccino.name}</a></td>
                            <td className='value'><a onClick="">{cappuccino.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{espresso.name}</a></td>
                            <td className='value'><a onClick="">{espresso.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{latte.name}</a></td>
                            <td className='value'><a onClick="">{latte.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{mocha.name}</a></td>
                            <td className='value'><a onClick="">{latte.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{pingado.name}</a></td>
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
