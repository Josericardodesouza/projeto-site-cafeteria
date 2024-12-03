import { GiCookie } from 'react-icons/gi'
import '../styles/menus-module.css'
import { candyList } from './ConstantsItens'

const brigadeiros = candyList[0]
const brownies = candyList[1]
const cookies = candyList[2]
const cupcakes = candyList[3]
const paodemel = candyList[4]
const tortas = candyList[5]


function MenuCandy() {


    const displayTextImg = (event) => {
        const nameItem = event.target.textContent 

        document.getElementById('icon_candy_menu').style.display = 'none'

        var divItemDescription = document.getElementById('box_links_menu')
        divItemDescription.scrollIntoView({behavior: 'smooth'})

        switch(nameItem) {
            case 'Brigadeiros':
                document.getElementById('item_title_candy').innerHTML = brigadeiros.name

                document.getElementById('item_img_candy').src = brigadeiros.img

                document.getElementById('item_text_candy').innerHTML = `${brigadeiros.text}`

                break;

            case 'Brownies':
                document.getElementById('item_title_candy').innerHTML = brownies.name

                document.getElementById('item_img_candy').src = brownies.img

                document.getElementById('item_text_candy').innerHTML = `${brownies.text}`

                break;

            case 'Cookies':
                document.getElementById('item_title_candy').innerHTML = cookies.name

                document.getElementById('item_img_candy').src = cookies.img

                document.getElementById('item_text_candy').innerHTML = `${cookies.text}`

                break;

            case 'Cupcakes':
                document.getElementById('item_title_candy').innerHTML = cupcakes.name

                document.getElementById('item_img_candy').src = cupcakes.img

                document.getElementById('item_text_candy').innerHTML = `${cupcakes.text}`

                break;

            case 'Pão de mel':

                document.getElementById('item_title_candy').innerHTML = paodemel.name

                document.getElementById('item_img_candy').src = paodemel.img

                document.getElementById('item_text_candy').innerHTML = `${paodemel.text}`

                break;

            case 'Tortas':

            document.getElementById('item_title_candy').innerHTML = tortas.name

            document.getElementById('item_img_candy').src = tortas.img

            document.getElementById('item_text_candy').innerHTML = `${tortas.text}`

            break;

            


        }

    
    }



    return (
        <>

        <section className='section_menu'>
            <div className = 'box_menu'>
            {/* <h1 className = 'title_table'></h1> */}

            <div className='conteiner_img_text' id='conteiner_img_text_candys'>

                <p id='item_title_candy' className='item_title_menu'>Doces</p>

                <img src="" alt="" id='item_img_candy' className='item_img_menu'/>
                <svg className='icon_item_menu' id='icon_candy_menu'><GiCookie /></svg>

                <p id='item_text_candy' className='item_text_menu'>Clique em um dos itens do cardápio para saber sobre cada <strong>guloseima</strong>para acompanhar seu café</p>


            </div>
                <table className='cardapio'>
                   <tbody>

                    <tr>
                        <td>
                            <a onClick={displayTextImg}>{brigadeiros.name}
                            </a>
                         </td>

                        <td>
                            <a>
                            {brigadeiros.price}
                            </a>
                        </td>
                    </tr>

                    <tr>

                        <td><a onClick={displayTextImg}>{brownies.name}</a></td>

                        <td><a>
                            {brownies.price}</a>
                            </td>

                    </tr>

                    <tr>
                        <td><a onClick={displayTextImg}>{cookies.name}</a></td>

                        <td>
                            <a>
                                {cookies.price}
                            </a>
                        </td>


                    </tr>

                    <tr>
                        <td>
                            <a onClick={displayTextImg}>{cupcakes.name}   
                            </a>
                        </td>

                        <td>
                            <a>
                                {cupcakes.price}
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a onClick={displayTextImg}>{paodemel.name}
                            </a>
                        </td>

                        <td>
                            <a>
                                {paodemel.price}
                            </a>

                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a onClick={displayTextImg}>
                                {tortas.name}
                            </a>
                        </td>

                        <td>
                            <a>
                                {tortas.price}
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