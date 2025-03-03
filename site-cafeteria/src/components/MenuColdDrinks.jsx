import '../styles/menus-module.css'
import { coldDrinks } from './ConstantsItens'
import { useRef } from 'react'

const cafeGelado = coldDrinks[0]
const coldBrew = coldDrinks[1]
const expressoTonico = coldDrinks[2]
const frappuccino = coldDrinks[3] 

function MenuColdDrinks() {


    const menu_cd_toTop_scroll = useRef(null)


    const ref_img_cd_item = useRef(null)






    const displayTextImg = (event) => {

        const nameItem = event.target.textContent

        // document.getElementById('icon_cd_menu').style.display = 'none'

   
        menu_cd_toTop_scroll.current.scrollIntoView({behavior: 'smooth'})

        switch (nameItem) {

            case cafeGelado.name:
                document.getElementById('title_item_cd').innerHTML = cafeGelado.name

                ref_img_cd_item.current.style.display = 'block'

                document.getElementById('item_img_cd').src = cafeGelado.img

                document.getElementById('item_text_cd').innerHTML = `${cafeGelado.text}`

                break; 

            case coldBrew.name:
                document.getElementById('title_item_cd').innerHTML = coldBrew.name

                 ref_img_cd_item.current.style.display = 'block'

                document.getElementById('item_img_cd').src = coldBrew.img

                document.getElementById('item_text_cd').innerHTML = `${coldBrew.text}`

                break;

            case expressoTonico.name:
                document.getElementById('title_item_cd').innerHTML = expressoTonico.name

                 ref_img_cd_item.current.style.display = 'block'

                document.getElementById('item_img_cd').src = expressoTonico.img

                document.getElementById('item_text_cd').innerHTML = `${expressoTonico.text}`

                break;

            case frappuccino.name:
                document.getElementById('title_item_cd').innerHTML = frappuccino.name

                 ref_img_cd_item.current.style.display = 'block'

                document.getElementById('item_img_cd').src = frappuccino.img

                document.getElementById('item_text_cd').innerHTML = `${frappuccino.text}`

                break;


            default:
                //console.log('Bebidas geladas: não passou')


            // default:
            //     document.getElementById('title_item_cd').innerHTML = ''

            //     document.getElementById('item_img_cd').style.display = 'none'

            //     document.getElementById('item_text_cd').innerHTML = ''
        }

        


    }



    return (
        <>

        <section className='section_menu'>

            <div className='box_menu' ref={menu_cd_toTop_scroll}>

                <div className='conteiner_img_text' id='conteiner_img_text_coldDrinks'>

                    <div className='title_and_icon'>

                    <p id='title_item_cd' className='item_title_menu'>Bebidas geladas</p>


                    </div>

             

                    <img src="" alt="" id='item_img_cd' className='item_img_menu' ref={ref_img_cd_item} />

                {/* <GiCoffeeMug className='icon_item_menu' id='icon_cd_menu'/> */}
                
                    <p id='item_text_cd' className='item_text_menu'>Clique em um dos itens do cardápio para saber sobre cada <strong>bebida gelada</strong></p>

                </div>

                <table className='cardapio'>
                    <tbody>

                        <tr>
                            <td className='item'><a onClick={displayTextImg}>{cafeGelado.name}</a></td>
                            <td className='value'><a>R${cafeGelado.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick={displayTextImg}>{coldBrew.name}</a></td>
                            <td className='value'><a onClick={displayTextImg}>R${coldBrew.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item' onClick={displayTextImg}><a>{expressoTonico.name}</a></td>
                            <td className='value'><a onClick={displayTextImg}>R${expressoTonico.price}</a></td>
                        </tr>

                        <tr>
                            <td className='item'><a onClick={displayTextImg}>{frappuccino.name}</a></td>
                            <td className='value'><a onClick={displayTextImg}>R${frappuccino.price}</a></td>
                        </tr>


                    </tbody>

                </table>
               

            </div>

        </section>
        
        
        
        </>


    )
}

export default MenuColdDrinks