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
import { DiCoffeescript } from 'react-icons/di'

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

    const menu_coffee_toTop_scroll = useRef(null)


    const img_item_coffee = useRef(null)


  


  

    const displayTextImg = (event) => {

        const nameItem = event.target.textContent

        // document.getElementById('icon_coffee_menu').style.display = 'none'

        menu_coffee_toTop_scroll.current.scrollIntoView({behavior: 'smooth'})


        switch (nameItem) {

            case coado.name:


                console.log('teste coado')

                document.getElementById('title_item').innerHTML = coado.name

                img_item_coffee.current.style.display = 'block'

              

                document.getElementById('item_img').src = coado.img
                
                document.getElementById('item_text').innerHTML = `${coado.text}`

                

                
               
                
                console.log(coado.text)
                break;

            case cappuccino.name:

                console.log('teste cappuccino')

                document.getElementById('title_item').innerHTML = cappuccino.name
                img_item_coffee.current.style.display = 'block'
                document.getElementById('item_img').src = cappuccino.img
                document.getElementById('item_text').innerHTML = `${cappuccino.text}`
                

                console.log(cappuccino.text)
                break;

            case espresso.name:

                console.log('teste espresso')
                document.getElementById('title_item').innerHTML = espresso.name
                img_item_coffee.current.style.display = 'block'
                document.getElementById('item_img').src = espresso.img
                document.getElementById('item_text').innerHTML = `${espresso.text}`

             
                

                break;
            
            case latte.name:
                console.log('teste latte')
                document.getElementById('title_item').innerHTML = latte.name
                img_item_coffee.current.style.display = 'block'
                document.getElementById('item_img').src = latte.img
                document.getElementById('item_text').innerHTML = `${latte.text}`
                

                break;

            case mocha.name:
                console.log('teste Mocha')
                document.getElementById('title_item').innerHTML = mocha.name
                img_item_coffee.current.style.display = 'block'
                document.getElementById('item_img').src = mocha.img
                document.getElementById('item_text').innerHTML = `${mocha.text}`
               
                
                break;

            case pingado.name:
                console.log('teste pingado')
                document.getElementById('title_item').innerHTML = pingado.name
                img_item_coffee.current.style.display = 'block'
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

        <div className = 'box_menu' ref={menu_coffee_toTop_scroll}>
   

        <div className='conteiner_img_text' id='conteiner_img_text_hotDrinks'>

            <div className='title_and_icon'>

            <p id='title_item' className='item_title_menu'>Bebidas quentes</p>
{/* 
            <DiCoffeescript className='icon_item_menu' id = 'icon_coffee_menu' /> */}

            

            </div>
       
            <img src= "" alt="" id='item_img' className = 'item_img_menu' ref={img_item_coffee}/>
           
            <p id='item_text' className='item_text_menu'>Clique em um dos itens do cardápio para <strong>saber sobre</strong> cada bebida quente.</p>
        </div>


            <table className='cardapio'>
                <tbody>
                    
                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{coado.name}</a></td>
                            <td className='value'><a onClick="">R${coado.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{cappuccino.name}</a></td>

                            {/* <td id='teste_linha'></td> */}

                            <td className='value'><a onClick="">R${cappuccino.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{espresso.name}</a></td>
                            <td className='value'><a onClick="">R${espresso.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{latte.name}</a></td>
                            <td className='value'><a onClick="">R${latte.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{mocha.name}</a></td>
                            <td className='value'><a onClick="">R${latte.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick= {displayTextImg}>{pingado.name}</a></td>
                            <td className='value'><a onClick="">R${pingado.price}</a></td>
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
