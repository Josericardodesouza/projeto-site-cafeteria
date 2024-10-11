import { SiHomebrew } from 'react-icons/si'
import '../styles/menus-module.css'

import { coldDrinks } from './ConstantsItens'
import { GiCoffeeMug } from 'react-icons/gi'

const cafeGelado = coldDrinks[0]
const coldBrew = coldDrinks[1]
const expressoTonico = coldDrinks[2]
const frappuccino = coldDrinks[3] 

function MenuColdDrinks() {

    const displayTextImg = (event) => {

        const nameItem = event.target.textContent

        document.getElementById('icon_cd_menu').style.display = 'none'

        var divItemDescription = document.getElementById('box_links_menu')
        divItemDescription.scrollIntoView({behavior: 'smooth'})

        switch (nameItem) {
            case 'café gelado':
                document.getElementById('title_item_cd').innerHTML = cafeGelado.name

                document.getElementById('item_img_cd').src = cafeGelado.img

                document.getElementById('item_text_cd').innerHTML = `${cafeGelado.text}`

                break; 

            case 'Cold Brew':
                document.getElementById('title_item_cd').innerHTML = coldBrew.name

                document.getElementById('item_img_cd').src = coldBrew.img

                document.getElementById('item_text_cd').innerHTML = `${coldBrew.text}`

                break;

            case 'Expresso Tônico':
                document.getElementById('title_item_cd').innerHTML = expressoTonico.name

                document.getElementById('item_img_cd').src = expressoTonico.img

                document.getElementById('item_text_cd').innerHTML = `${expressoTonico.text}`

                break;

            case 'Frappuccino':
                document.getElementById('title_item_cd').innerHTML = frappuccino.name

                document.getElementById('title_item_cd').innerHTML = frappuccino.name

                document.getElementById('item_img_cd').src = frappuccino.img

                document.getElementById('item_text_cd').innerHTML = `${frappuccino.text}`

                break;


            // default:
            //     document.getElementById('title_item_cd').innerHTML = ''

            //     document.getElementById('item_img_cd').style.display = 'none'

            //     document.getElementById('item_text_cd').innerHTML = ''
        }

        


    }



    return (
        <>

        <section className='section_menu'>

            <div className='box_menu'>

                <div className='conteiner_img_text' id='conteiner_img_text_coldDrinks'>

                    <p id='title_item_cd' className='item_title_menu'></p>

                    <img src="" alt="" id='item_img_cd' className='item_img_menu' />
                    <svg className='icon_item_menu' id='icon_cd_menu'><GiCoffeeMug /></svg>
                    <p id='item_text_cd' className='item_text_menu'>Clique em um dos itens do cardápio para saber sobre cada <strong>bebida gelada</strong></p>

                </div>

                <table className='cardapio'>
                    <tbody>

                        <tr>
                            <td className='item'><a onClick={displayTextImg}>{cafeGelado.name}</a></td>
                            <td className='value'><a>{cafeGelado.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick={displayTextImg}>{coldBrew.name}</a></td>
                            <td className='value'><a onClick={displayTextImg}>{coldBrew.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item' onClick={displayTextImg}><a>{expressoTonico.name}</a></td>
                            <td className='value'><a onClick={displayTextImg}>{expressoTonico.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick={displayTextImg}>{frappuccino.name}</a></td>
                            <td className='value'><a onClick={displayTextImg}>{frappuccino.price}</a></td>
                        </tr>


                    </tbody>

                </table>
               

            </div>

        </section>
        
        
        
        </>


    )
}

export default MenuColdDrinks