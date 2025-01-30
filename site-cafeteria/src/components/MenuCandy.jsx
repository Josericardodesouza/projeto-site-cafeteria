import { GiCookie } from 'react-icons/gi'
import '../styles/menus-module.css'
import { candyList } from './ConstantsItens'
import { useRef } from 'react'

const brigadeiros = candyList[0]
const brownies = candyList[1]
const cookies = candyList[2]
const cupcakes = candyList[3]
const paodemel = candyList[4]
const tortas = candyList[5]


function MenuCandy() {


    const candies_menu_toTop_scroll = useRef(null)

    const ref_img_candies_item = useRef(null)


    const displayTextImg = (event) => {
        
        const nameItem = event.target.textContent 

        // document.getElementById('icon_candy_menu').style.display = 'none'

        candies_menu_toTop_scroll.current.scrollIntoView({behavior: 'smooth'})

        switch(nameItem) {

            case brigadeiros.name:

                document.getElementById('item_title_candy').innerHTML = brigadeiros.name

                ref_img_candies_item.current.style.display = 'block'

                document.getElementById('item_img_candy').src = brigadeiros.img

                document.getElementById('item_text_candy').innerHTML = `${brigadeiros.text}`

                break;

            case brownies.name:
                document.getElementById('item_title_candy').innerHTML = brownies.name

                    ref_img_candies_item.current.style.display = 'block'

                document.getElementById('item_img_candy').src = brownies.img

                document.getElementById('item_text_candy').innerHTML = `${brownies.text}`

                break;

            case cookies.name:
                
                document.getElementById('item_title_candy').innerHTML = cookies.name

                    ref_img_candies_item.current.style.display = 'block'

                document.getElementById('item_img_candy').src = cookies.img

                document.getElementById('item_text_candy').innerHTML = `${cookies.text}`

                break;

            case cupcakes.name:
                document.getElementById('item_title_candy').innerHTML = cupcakes.name

                    ref_img_candies_item.current.style.display = 'block'

                document.getElementById('item_img_candy').src = cupcakes.img

                document.getElementById('item_text_candy').innerHTML = `${cupcakes.text}`

                break;

            case paodemel.name:

                document.getElementById('item_title_candy').innerHTML = paodemel.name

                    ref_img_candies_item.current.style.display = 'block'

                document.getElementById('item_img_candy').src = paodemel.img

                document.getElementById('item_text_candy').innerHTML = `${paodemel.text}`

                break;

            case tortas.name:

            document.getElementById('item_title_candy').innerHTML = tortas.name

                ref_img_candies_item.current.style.display = 'block'

            document.getElementById('item_img_candy').src = tortas.img

            document.getElementById('item_text_candy').innerHTML = `${tortas.text}`

            break;

            


        }

    
    }



    return (
        <>

        <section className='section_menu'>

            <div className = 'box_menu' ref={candies_menu_toTop_scroll}>
            {/* <h1 className = 'title_table'></h1> */}

            <div className='conteiner_img_text' id='conteiner_img_text_candys'>

                <div className='title_and_icon'>

                <p id='item_title_candy' className='item_title_menu'>Doces</p>


                </div>

             

                <img src="" alt="" id='item_img_candy' className='item_img_menu' ref={ref_img_candies_item}/>

                {/* <svg className='icon_item_menu' id='icon_candy_menu'><GiCookie /></svg> */}

                <p id='item_text_candy' className='item_text_menu'>Clique em um dos itens do cardápio para saber sobre cada <strong>guloseima</strong>para acompanhar seu café</p>


            </div>
                <table className='cardapio'>
                   <tbody>

                    <tr>
                        <td className='item'>
                            <a onClick={displayTextImg}>{brigadeiros.name}
                            </a>
                         </td>

                        <td className='value' id='td_value_brigadeiros'>
                            <a>
                            {brigadeiros.price}
                            </a>
                        </td>
                    </tr>

                    <tr>

                        <td className='item'><a onClick={displayTextImg}>{brownies.name}</a></td>

                        <td className='value'><a>
                            R${brownies.price}</a>
                            </td>

                    </tr>

                    <tr>
                        <td className='item'><a onClick={displayTextImg}>{cookies.name}</a></td>

                        <td className='value'>
                            <a>
                                R${cookies.price}
                            </a>
                        </td>


                    </tr>

                    <tr>
                        <td className='item'>
                            <a onClick={displayTextImg}>{cupcakes.name}   
                            </a>
                        </td>

                        <td className='value'>
                            <a>
                                R${cupcakes.price}
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td className='item'>
                            <a onClick={displayTextImg}>{paodemel.name}
                            </a>
                        </td>

                        <td className='value'>
                            <a>
                                R${paodemel.price}
                            </a>

                        </td>
                    </tr>

                    <tr>
                        <td className='item'>
                            <a onClick={displayTextImg}>
                                {tortas.name}
                            </a>
                        </td>

                        <td className='value'>
                            <a>
                                R${tortas.price}
                            </a>
                        </td>
                    </tr>
                      
                  
                      

                    </tbody>

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