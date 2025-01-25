
import '../styles/deliveryPage-modules.css'

import { hotDrinks, coldDrinks } from './ConstantsItens'
import { typesBrigadeiro, typesBrownies, typesCookies, typesCupcakes, typesPie } from './ConstantsItens'


import backgroundCandies from '../assets/images/backgrounds/pexels-pham-ngoc-anh-170983008-28146830.jpg'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useEffect } from 'react'
import { useState } from 'react'

import { useRef } from 'react'
import { useContext } from 'react'

import { SelectedItemsContext } from '../../src/context/SelectedItemsContext'
import { QuantItemsSelectedsContext } from '../context/QuantItemsSelectedsContext'
import { TotalValueContext } from '../context/TotalValueContext'





const coado = hotDrinks.find(coffee => coffee.name === 'Coado')
const cappuccino = hotDrinks.find(coffee => coffee.name === 'Cappuccino')
const espresso = hotDrinks.find(coffee => coffee.name === 'Espresso')
const latte = hotDrinks.find(coffee => coffee.name === 'Latte')
const mocha = hotDrinks.find(coffee => coffee.name === 'Mocha')
const pingado = hotDrinks.find(coffee => coffee.name === 'Pingado')


const cafeGelado = coldDrinks.find(coldDrink => coldDrink.name === 'Gelado')
const coldBrew = coldDrinks.find(coldDrink => coldDrink.name === 'Cold Brew')
const expTonico = coldDrinks.find(coldDrink => coldDrink.name === 'Expresso Tônico')
const frappuccino = coldDrinks.find(coldDrink => coldDrink.name === 'Frappuccino')


// const chocolateBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Chocolate')
const cocoBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Coco')
const morangoBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Morango')
const lightBrigadeiro = typesBrigadeiro.find(candyTypes => candyTypes.name === 'Light')

const cafeBrownie = typesBrownies.find(candyTypes => candyTypes.name === 'Café')

const chocolateCookie = typesCookies.find(candyTypes => candyTypes.name === 'Chocolate')

const chocolateCupcake = typesCupcakes.find(candyTypes => candyTypes.name === 'Chocolate')
const morangoCupcake = typesCupcakes.find(candyTypes => candyTypes.name === 'Morango')
const nozesCupcake = typesCupcakes.find(candyTypes => candyTypes.name === 'Nozes')



const amendoaMaracujaPie = typesPie.find(candyTypes => candyTypes.name === 'Amêndoa com maracujá')
const amendoimPie = typesPie.find(candyTypes => candyTypes.name === 'Amendoim')
const macaPie = typesPie.find(candyTypes => candyTypes.name === 'Maçã')
const pessegoPie = typesPie.find(candyTypes => candyTypes.name === 'Pêssego')

function MenuItems() {


    const { storedListItemsNames, setStoredListItemsNames } = useContext(SelectedItemsContext)

    const { storedQuantItems, setStoredQuantItems } = useContext(QuantItemsSelectedsContext)

    const { storedTotal, setStoredTotal } = useContext(TotalValueContext)




    console.log('valor do provider da lista de itens: ', setStoredListItemsNames)









    const [showDivItens, setShowDivItens] = useState({
        divsHotDrinks: false,
        divsColdDrinks: false,
        divsCandies: false,
        divsCandies_brigadeiros: false,
        divsCandies_brownies: false,
        divsCandies_cookies: false,
        divsCandies_cupcakes: false,
        divsCandies_pies: false



    })


    const displayDivsItens = (key) => {
        {
            setShowDivItens((prevDivsItens) => ({
                ...prevDivsItens, [key]: !prevDivsItens[key]

            }))
        }
    }



    const [showDivsCandyTypes, setShowDivsCandyTypes] = useState({

    })



    const coado_name = coado ? coado.name : ''
    const coado_price = coado ? parseFloat(coado.price.replace(',', '.')) : 0
    const coado_category = coado ? coado.category : ''


    const cappuccino_name = cappuccino ? cappuccino.name : ''
    const cappuccino_price = cappuccino ? parseFloat(cappuccino.price.replace(',', '.')) : 0
    const cappuccino_category = cappuccino ? cappuccino.category : ''

    const espresso_name = espresso ? espresso.name : ''
    const espresso_price = espresso ? parseFloat(espresso.price.replace(',', '.')) : 0
    const espresso_category = espresso ? espresso.category : ''

    const latte_name = latte ? latte.name : ''
    const latte_price = latte ? parseFloat(latte.price.replace(',', '.')) : 0
    const latte_category = latte ? latte.category : ''

    const mocha_name = mocha ? mocha.name : ''
    const mocha_price = mocha ? parseFloat(mocha.price.replace(',', '.')) : 0
    const mocha_category = mocha ? mocha.category : ''

    const pingado_name = pingado ? pingado.name : ''
    const pingado_price = pingado ? parseFloat(pingado.price.replace(',', '.')) : 0
    const pingado_category = pingado ? pingado.category : ''

    const cfGelado_name = cafeGelado ? cafeGelado.name : ''
    const cfGelado_price = cafeGelado ? parseFloat(cafeGelado.price.replace(',', '.')) : 0
    const cfGelado_category = cafeGelado ? cafeGelado.category : ''

    const coldBrew_name = coldBrew ? coldBrew.name : ''
    const coldBrew_price = coldBrew ? parseFloat(coldBrew.price.replace(',', '.')) : 0
    const coldBrew_category = coldBrew ? coldBrew.category : ''

    const expTonico_name = expTonico ? expTonico.name : ''
    const expTonico_price = expTonico ? parseFloat(expTonico.price.replace(',', '.')) : 0
    const expTonico_category = expTonico ? expTonico.category : ''

    const frappuccino_name = frappuccino ? frappuccino.name : ''
    const frappuccino_price = frappuccino ? parseFloat(frappuccino.price.replace(',', '.')) : 0
    const frappuccino_category = frappuccino ? frappuccino.category : ''

    const cocoBrig_name = cocoBrigadeiro ? cocoBrigadeiro.name : ''
    const cocoBrig_price = cocoBrigadeiro ? parseFloat(cocoBrigadeiro.price.replace(',', '.')) : 0
    const cocoBrig_category = cocoBrigadeiro ? cocoBrigadeiro.category : ''

    const mrgBrig_name = morangoBrigadeiro ? morangoBrigadeiro.name : ''
    const mrgBrig_price = morangoBrigadeiro ? parseFloat(morangoBrigadeiro.price.replace(',', '.')) : 0
    const mrBrig_category = morangoBrigadeiro ? morangoBrigadeiro.category : ''

    const lightBrig_name = lightBrigadeiro ? lightBrigadeiro.name : ''
    const lightBrig_price = lightBrigadeiro ? parseFloat(lightBrigadeiro.price.replace(',', '.')) : 0
    const lightBrig_category = lightBrigadeiro ? lightBrigadeiro.category : ''

    const cfBrownie_name = cafeBrownie ? cafeBrownie.name : ''
    const cfBrownie_price = cafeBrownie ? parseFloat(cafeBrownie.price.replace(',', '.')) : 0
    const cfBrownie_category = cafeBrownie ? cafeBrownie.category : ''

    const chCookie_name = chocolateCookie ? chocolateCookie.name : ''
    const chCookie_price = chocolateCookie ? parseFloat(chocolateCookie.price.replace(',', '.')) : 0
    const chCookie_category = chocolateCookie ? chocolateCookie.category : ''

    const chCupcake_name = chocolateCupcake ? chocolateCupcake.name : ''
    const chCupcake_price = chocolateCupcake ? parseFloat(chocolateCupcake.price.replace(',', '.')) : 0
    const chCupcake_category = chocolateCupcake ? chocolateCupcake.category : ''

    const mrgCupcake_name = morangoCupcake ? morangoCupcake.name : ''
    const mrgCupcake_price = morangoCupcake ? parseFloat(morangoCupcake.price.replace(',', '.')) : 0
    const mrgCupcake_category = morangoCupcake ? morangoCupcake.category : ''

    const nozesCupcake_name = nozesCupcake ? nozesCupcake.name : ''
    const nozesCupcake_price = nozesCupcake ? parseFloat(nozesCupcake.price.replace(',', '.')) : 0
    const nozesCupcake_category = nozesCupcake ? nozesCupcake.category : ''

    const amdMaracujaPie_name = amendoaMaracujaPie ? amendoaMaracujaPie.name : ''
    const amdMaracujaPie_price = amendoaMaracujaPie ? parseFloat(amendoaMaracujaPie.price.replace(',', '.')) : 0
    const amdMaracujaPie_category = amendoaMaracujaPie ? amendoaMaracujaPie.category : ''

    const amendoimPie_name = amendoimPie ? amendoimPie.name : ''
    const amendoimPie_price = amendoimPie ? parseFloat(amendoimPie.price.replace(',', '.')) : 0
    const amendoimPie_category = amendoimPie ? amendoimPie.category : ''

    const macaPie_name = macaPie ? macaPie.name : ''
    const macaPie_price = macaPie ? parseFloat(macaPie.price.replace(',', '.')) : 0
    const macaPie_category = macaPie ? macaPie.category : ''

    const pssgPie_name = pessegoPie ? pessegoPie.name : ''
    const pssgPie_price = pessegoPie ? parseFloat(pessegoPie.price.replace(',', '.')) : 0
    const pssgPie_category = pessegoPie ? pessegoPie.category : ''





    const [itensProperties, setItensProperties] = useState({



        inputCoado: { quant: 0, name: coado_name, price: coado_price.toFixed(2), category: coado_category },
        inputCappuccino: { quant: 0, name: cappuccino_name, price: cappuccino_price.toFixed(2), category: cappuccino_category },

        inputEspresso: { quant: 0, name: espresso_name, price: espresso_price.toFixed(2), category: espresso_category },

        inputLatte: { quant: 0, name: latte_name, price: latte_price.toFixed(2), category: latte_category },

        inputMocha: { quant: 0, name: mocha_name, price: mocha_price.toFixed(2), category: mocha_category },

        inputPingado: { quant: 0, name: pingado_name, price: pingado_price.toFixed(2), category: pingado_category },

        inputCafeGelado: { quant: 0, name: cfGelado_name, price: cfGelado_price.toFixed(2), category: cfGelado_category },

        inputColdBrew: { quant: 0, name: coldBrew_name, price: coldBrew_price.toFixed(2), category: coldBrew_category },

        inputExpTonico: { quant: 0, name: expTonico_name, price: expTonico_price.toFixed(2), category: expTonico_category },

        inputFrappuccino: { quant: 0, name: frappuccino_name, price: frappuccino_price.toFixed(2), category: frappuccino_category },

        inputCocoBrig: { quant: 0, name: cocoBrig_name, price: cocoBrig_price.toFixed(2), category: cocoBrig_category },

        inputMrgBrig: { quant: 0, name: mrgBrig_name, price: mrgBrig_price.toFixed(2), category: mrBrig_category },

        inputLightBrig: { quant: 0, name: lightBrig_name, price: lightBrig_price.toFixed(2), category: lightBrig_category },

        inputCafeBrownie: { quant: 0, name: cfBrownie_name, price: cfBrownie_price.toFixed(2), category: cfBrownie_category },

        inputChCookie: { quant: 0, name: chCookie_name, price: chCookie_price.toFixed(2), category: chCookie_category },

        inputChCupcake: { quant: 0, name: chCupcake_name, price: chCookie_price.toFixed(2), category: chCookie_category },

        inputMrgCupcake: { quant: 0, name: mrgCupcake_name, price: mrgBrig_price.toFixed(2), category: mrgCupcake_category },

        inputNozesCupcake: { quant: 0, name: nozesCupcake_name, price: nozesCupcake_price.toFixed(2), category: nozesCupcake_category },

        input_amendoaMaracujaPie: { quant: 0, name: amdMaracujaPie_name, price: amdMaracujaPie_price.toFixed(2), category: amdMaracujaPie_category },

        input_amendoimPie: { quant: 0, name: amendoimPie_name, price: amendoimPie_price.toFixed(2), category: amendoimPie_category },

        input_macaPie: { quant: 0, name: macaPie_name, price: macaPie_price.toFixed(2), category: macaPie_category },

        input_pessegoPie: { quant: 0, name: pssgPie_name, price: pssgPie_price.toFixed(2), category: pssgPie_category }

    })





    const changeValueInput = (event, key) => {
        const { value } = event.target;
        setItensProperties((prevQuantity) => ({
            ...prevQuantity, [key]: {
                ...prevQuantity[key],
                quant: value ? Number(value) : ''
            }
        }))


    }




    const addQuantity = (key) => {
        setItensProperties((prevQuantity) => ({
            ...prevQuantity, [key]: {
                ...prevQuantity[key],
                quant: prevQuantity[key].quant + 1,


            }
        }))


    }

    const subQuantity = (key) => {
        setItensProperties((prevQuantity) => ({
            ...prevQuantity, [key]: {
                ...prevQuantity[key],
                quant: prevQuantity[key].quant > 0 ? prevQuantity[key].quant - 1 : 0

            }
        }))
    }




    const renderListItemsSelected = () => {

        return Object.keys(itensProperties).map((key) => {
            if (itensProperties[key].quant > 0) {



                return <p key={key}>{itensProperties[key].quant} unidade(s) de {itensProperties[key].category} {itensProperties[key].name} no valor de R$<strong>{itensProperties[key].price.replace('.', ',')}</strong> cada</p>



            }
            return null
        })


    }



    useEffect(() => {


        const listItems = []

        Object.keys(itensProperties).forEach((key) => {
            if (itensProperties[key].quant > 0) {
                const itemList = `${itensProperties[key].quant} unidade(s) de ${itensProperties[key].category} ${itensProperties[key].name} no valor de  ${itensProperties[key].price} cada;`

                listItems.push(itemList)

            }
        })


        setStoredQuantItems(listItems)
        console.log('Teste da nova passagem de quantidade: ', listItems)




    }, [itensProperties, setStoredQuantItems])






    // const [itemsListSelected, setItemsListSelected] = useState('')





    var lista = setStoredListItemsNames




    const testeList = ''



    const renderListItemsSelected_Names = () => {

        return Object.keys(itensProperties).map((key) => {
            if (itensProperties[key].quant > 0) {

                return <p key={key}>{itensProperties[key].name},&nbsp;</p>

            }
            return null
        })


    }


    const [text, setText] = useState([])

    const selectedsRef = useRef('')

    const quantityItemsRef = useRef('')







    useEffect(() => {
        if (selectedsRef.current) {
            const paragraphs = Array.from(selectedsRef.current.querySelectorAll('p'))
            const textParagraphs = paragraphs.map((p) => p.textContent)

            setText(textParagraphs)
            setStoredListItemsNames(textParagraphs)

            console.log('lista de selecionados: ', textParagraphs)
        }

    }, [itensProperties])


    // useEffect(() => {
    //     if (quantityItemsRef.current) {
    //         const items = Array.from(quantityItemsRef.current.querySelectorAll('p'))
    //         const listItems = items.map((p) => p.textContent)



    //         console.log('Quantidades: ', listItems)

    //     }
    // }, [itensProperties])





    console.log('Teste do componenente da lista', { renderListItemsSelected })
    //   console.log('Isso é a itensProperties: ', item )





    const [total, setTotal] = useState(0)



    const totalValue = () => {
        return Object.values(itensProperties).reduce((acumulate, item) => {
            return acumulate + (item.quant * item.price)
        }, 0)
    }

    useEffect(() => {
        const total = totalValue().toFixed(2)
        setTotal(total.replace('.', ','))
        setStoredTotal(total)
        console.log('total: ', total)
    }, [itensProperties])








    console.log('valor do stored total', storedTotal)

    const box_total = useRef('')
    const p_selectedItems = useRef('')

    useEffect(() => {
        if (storedTotal >= 1) {
            box_total.current.style.display = 'block'
            p_selectedItems.current.innerText = 'Esses são os itens que você escolheu'
        } else {
            box_total.current.style.display = 'none'
            p_selectedItems.current.innerText = 'Você ainda não selecionou nenhum item.'
        }
    })






    return (

        <>




            <div className='box_titles_section' id='box_title_hotDrinks'>
                <h1 className='title_section'>Bebidas</h1>
            </div>




            <div onClick={() => displayDivsItens('divsHotDrinks')} id='hotDrinks_div_showSection' className='show_sections'>

                <div className='box_title_category'>
                    <p>Bebidas Quentes</p>
                </div>


                <div className='box_icon_category'>
                    {showDivItens.divsHotDrinks ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

            </div>

            {showDivItens.divsHotDrinks && (

                <section className='deliveryItens' id='hotDrinks_section'>


                    <div className='deliveryItem'>


                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={coado.img} alt='imagem café coado' />
                            </div>


                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{coado.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${coado.price}</p>
                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_add_coado" className='label_item_menu'>quantidade</label>


                            <div className='box_quant'>

                                <button onClick={() => addQuantity('inputCoado')}>+</button>
                                <input type='number' id='input_add_coado' value={itensProperties.inputCoado.quant} onChange={(e) => changeValueInput(e, 'inputCoado')} />
                                <button onClick={() => subQuantity('inputCoado')}>-</button>
                                {/* <button>confirmar</button> */}
                            </div>



                        </div>


                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={cappuccino.img} alt='imagem café cappuccino' />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{cappuccino.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${cappuccino.price}</p>

                            </div>

                        </div>

                        <div className='conteiner_quantityInput'>
                            <label htmlFor="input_quant_cappuccino" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputCappuccino')}>+</button>
                                <input type="number" id='input_quant_cappuccino' onChange={(e) => changeValueInput(e, 'inputCappuccino')} value={itensProperties.inputCappuccino.quant} />
                                <button onClick={() => subQuantity('inputCappuccino')}>-</button>

                            </div>

                        </div>



                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={espresso.img} alt='imagem café espresso' />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{espresso.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${espresso.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_espresso" className='label_item_menu'>quantidade</label>


                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputEspresso')}>+</button>
                                <input type="number" id='input_quant_espresso' value={itensProperties.inputEspresso.quant} onChange={(e) => changeValueInput(e, 'inputEspresso')} />
                                <button onClick={() => subQuantity('inputEspresso')}>-</button>
                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={latte.img} alt='imagem café latte' />
                            </div>



                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{latte.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${latte.price}</p>

                            </div>

                        </div>



                        <div className='conteiner_quantityInput'>


                            <label htmlFor="input_quant_latte" className='label_item_menu'>quantidade</label>


                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputLatte')}>+</button>
                                <input type="number" id='input_quant_latte' value={itensProperties.inputLatte.quant} onChange={(e) => changeValueInput(e, 'inputLatte')} />
                                <button onClick={() => subQuantity('inputLatte')}>-</button>
                            </div>
                        </div>

                    </div>



                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={mocha.img} alt='imagem café mocha' />
                            </div>



                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{mocha.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${mocha.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>
                            <label htmlFor="input_quant_mocha" className='label_item_menu'>quantidade</label>



                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputMocha')}>+</button>
                                <input type="number" id='input_quant_mocha' value={itensProperties.inputMocha.quant} onChange={(e) => changeValueInput(e, 'inputMocha')} />
                                <button onClick={() => subQuantity('inputMocha')}>-</button>

                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={pingado.img} alt="imagem café pingado" />
                            </div>



                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>
                                    {pingado.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${pingado.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_pingado" className='label_item_menu'>quantidade</label>


                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputPingado')}>+</button>
                                <input type="number" id='input_quant_pingado' value={itensProperties.inputPingado.quant} onChange={(e) => changeValueInput(e, 'inputPingado')} />
                                <button onClick={() => subQuantity('inputPingado')}>-</button>
                            </div>
                        </div>
                    </div>


                </section>

            )}


            <div onClick={() => displayDivsItens('divsColdDrinks')} className='show_sections'>
                <div className='box_title_category'>
                    <p>Cafés Gelados</p>
                </div>

                <div className='box_icon_category'>
                    {showDivItens.divsColdDrinks ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

            </div>





            {showDivItens.divsColdDrinks && (

                <section className='deliveryItens' id='coldDrinks_section'>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={cafeGelado.img} alt="imagem café gelado" />
                            </div>



                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{cafeGelado.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${cafeGelado.price}</p>

                            </div>

                        </div>

                        <div className='conteiner_quantityInput'>
                            <label htmlFor="input_quant_cfGelado"
                                className='label_item_menu'>quantidade</label>


                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputCafeGelado')}>+</button>
                                <input type="number" id='input_quant_cfGelado' value={itensProperties.inputCafeGelado.quant} onChange={(e) => changeValueInput(e, 'inputCafeGelado')} />
                                <button onClick={() => subQuantity('inputCafeGelado')}>-</button>

                            </div>
                        </div>
                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={coldBrew.img} alt="imagem de um café Cold Brew" />
                            </div>


                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{coldBrew.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${coldBrew.price}</p>
                            </div>

                        </div>



                        <div className='conteiner_quantityInput'>
                            <label htmlFor="input_quant_coldBrew" className='label_item_menu'>quantidade</label>




                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputColdBrew')}>+</button>
                                <input type="number" id='input_quant_coldBrew' value={itensProperties.inputColdBrew.quant} onChange={(e) => changeValueInput(e, 'inputColdBrew')} />
                                <button onClick={() => subQuantity('inputColdBrew')}>-</button>
                            </div>
                        </div>
                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={expTonico.img} alt="imagem de um expresso tônico" />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{expTonico.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${expTonico.price}</p>

                            </div>

                        </div>

                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_expTonico" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputExpTonico')}>+</button>
                                <input type="number" id='input_quant_expTonico' value={itensProperties.inputExpTonico.quant} onChange={(e) => changeValueInput(e, 'inputExpTonico')} />
                                <button onClick={() => subQuantity('inputExpTonico')}>-</button>
                            </div>
                        </div>
                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={frappuccino.img} alt="imagem de um frappuccino" />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{frappuccino.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${frappuccino.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>



                            <label htmlFor="input_quant_frappuccino" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputFrappuccino')}>+</button>
                                <input type="number" id='input_quant_frappuccino' value={itensProperties.inputFrappuccino.quant} onChange={(e) => changeValueInput(e, 'inputFrappuccino')} />
                                <button onClick={() => subQuantity('inputFrappuccino')}>-</button>


                            </div>
                        </div>
                    </div>


                </section>
            )}



            <div className='box_titles_section' id='box_title_candies'>
                <h1 className='title_section'>Doces</h1>
            </div>


            <div className='show_sections' onClick={() => displayDivsItens('divsCandies_brigadeiros')}>
                <div className='box_title_category'>
                    <p>Brigadeiros</p>
                </div>

                <div className='box_icon_category'>

                    {showDivItens.divsCandies_brigadeiros ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

            </div>

            {showDivItens.divsCandies_brigadeiros && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={cocoBrigadeiro.img} alt='imagem de brigadeiro de coco' />
                            </div>


                            <div className='box_text_item'>


                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{cocoBrigadeiro.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${cocoBrigadeiro.price}</p>


                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_cocoBrig" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputCocoBrig')}>+</button>
                                <input type="number" id='input_quant_cocoBrig' value={itensProperties.inputCocoBrig.quant} readOnly onChange={(e) => changeValueInput(e, 'inputCocoBrig')} />
                                <button onClick={() => subQuantity('inputCocoBrig')}>-</button>
                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={morangoBrigadeiro.img} alt="imagem de brigadeiro de morango" />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{morangoBrigadeiro.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${morangoBrigadeiro.price}</p>

                            </div>

                        </div>



                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_mrgBrigadeiro" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>

                                <button onClick={() => addQuantity('inputMrgBrig')}>+</button>
                                <input type="number" id='input_quant_mrgBrigadeiro' value={itensProperties.inputMrgBrig.quant} onChange={(e) => changeValueInput(e, 'inputMrgBrig')} />
                                <button onClick={() => subQuantity('inputMrgBrig')}>-</button>

                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={lightBrigadeiro.img} alt="imagem de brigadeiro light" />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{lightBrigadeiro.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${lightBrigadeiro.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput' >
                            <label htmlFor="input_quant_lightBrig" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputLightBrig')}>+</button>
                                <input type="number" id='input_quant_lightBrig' value={itensProperties.inputLightBrig.quant} onChange={(e) => changeValueInput(e, 'inputLightBrig')} />
                                <button onClick={() => subQuantity('inputLightBrig')}>-</button>
                            </div>
                        </div>

                    </div>

                </section>

            )}



            <div className='title_section show_sections' onClick={() => displayDivsItens('divsCandies_brownies')}>
                <div className='box_title_category'>
                    <p>Brownies</p>
                </div>

                <div className='box_icon_category'>
                    {showDivItens.divsCandies_brownies ? <IoIosArrowUp /> : <IoIosArrowDown />}

                </div>
            </div>

            {showDivItens.divsCandies_brownies && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={cafeBrownie.img} alt="imagem de um brownie de café" />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{cafeBrownie.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${cafeBrownie.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_cfBrownie" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputCafeBrownie')}>+</button>
                                <input type="number" id='input_quant_cfBrownie' value={itensProperties.inputCafeBrownie.quant} onChange={(e) => changeValueInput(e, 'inputCafeBrownie')} />
                                <button onClick={() => subQuantity('inputCafeBrownie')}>-</button>
                            </div>
                        </div>

                    </div>

                </section>

            )}



            <div className='title_section show_sections' onClick={() => displayDivsItens('divsCandies_cookies')}>

                <div className='box_title_category'>
                    <p>Cookies</p>
                </div>

                <div className='box_icon_category'>
                    {showDivItens.divsCandies_cookies ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>

            {showDivItens.divsCandies_cookies && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={chocolateCookie.img} alt="imagem de um cookie de chocolate" />
                            </div>
                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{chocolateCookie.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${chocolateCookie.price}</p>

                            </div>


                        </div>

                        <div className='conteiner_quantityInput'>


                            <label htmlFor="input_quant_chCookie" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputChCookie')}>+</button>
                                <input type="number" id='input_quant_chCookie' value={itensProperties.inputChCookie.quant} onChange={(e) => changeValueInput(e, 'inputChCookie')} />
                                <button onClick={() => subQuantity('inputChCookie')}>-</button>
                            </div>
                        </div>

                    </div>

                </section>

            )}

            <div className='title_section show_sections' onClick={() => displayDivsItens('divsCandies_cupcakes')}>

                <div className='box_title_category'>
                    <p>Cupcakes</p>
                </div>

                <div className='box_icon_category'>

                    {showDivItens.divsCandies_cupcakes ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>


            {showDivItens.divsCandies_cupcakes && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={chocolateCupcake.img} alt="imagem de cupcake de chocolate" />
                            </div>
                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{chocolateCupcake.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${chocolateCupcake.price}</p>


                            </div>
                        </div>

                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_chCupcake" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputChCupcake')}>+</button>
                                <input type="number" id='input_quant_chCupcake' value={itensProperties.inputChCupcake.quant} onChange={(e) => changeValueInput(e, 'inputChCupcake')} />
                                <button onClick={() => subQuantity('inputChCupcake')}>-</button>
                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>


                        <div className='grid_img_text'>
                            <div className='img_item'>
                                <img src={morangoCupcake.img} alt="imagem de um cupcake de morango" />
                            </div>
                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{morangoCupcake.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${morangoCupcake.price}</p>

                            </div>
                        </div>


                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_mrgCupcake" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputMrgCupcake')}>+</button>
                                <input type="number" id='input_quant_mrgCupcake' value={itensProperties.inputMrgCupcake.quant} onChange={(e) => changeValueInput(e, 'inputMrgCupcake')} />
                                <button onClick={() => subQuantity('inputMrgCupcake')}>-</button>
                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={nozesCupcake.img} alt="imagem de um cupcake de morango" />
                            </div>
                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{nozesCupcake.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${nozesCupcake.price}</p>

                            </div>
                        </div>


                        <div className='conteiner_quantityInput'>

                            <label htmlFor="input_quant_nozesCupcake" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('inputNozesCupcake')}>+</button>
                                <input type="number" id='input_quant_nozesCupcake' value={itensProperties.inputNozesCupcake.quant} onChange={(e) => changeValueInput(e, 'inputNozesCupcake')} />
                                <button onClick={() => subQuantity('inputNozesCupcake')}>-</button>
                            </div>
                        </div>

                    </div>

                </section>

            )}

            <div className='title_section show_sections' onClick={() => displayDivsItens('divsCandies_pies')}>
                <div className='box_title_category'>
                    <p>Tortas</p>
                </div>

                <div className='box_icon_category'>
                    {showDivItens.divsCandies_pies ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>

            {showDivItens.divsCandies_pies && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={amendoaMaracujaPie.img} alt="imagem de uma torta de maçã" />
                            </div>

                            <div className='box_text_item'>
                                <p className='label_item_menu'>sabor</p>
                                <p className='name_item'>{amendoaMaracujaPie.name}</p>
                                <p className='label_item_menu'>preço</p>
                                <p className='price_item'>R${amendoaMaracujaPie.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>



                            <label htmlFor="input_quant_amdMrcjPie" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('input_amendoaMaracujaPie')}>+</button>
                                <input type="number" id='input_quant_amdMrcjPie' value={itensProperties.input_amendoaMaracujaPie.quant} onChange={(e) => changeValueInput(e, 'input_amendoaMaracujaPie')} />
                                <button onClick={() => subQuantity('input_amendoaMaracujaPie')}>-</button>
                            </div>
                        </div>



                    </div>

                    <div className='deliveryItem'>


                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={amendoimPie.img} alt="imagem de uma torta de amendoim" />
                            </div>
                            <div className='box_text_item'>
                            <p className='label_item_menu'>sabor</p>
                            <p className='name_item'>{amendoimPie.name}</p>
                            <p className='label_item_menu'>preço</p>
                            <p className='price_item'>R${amendoimPie.price}</p>


                            </div>

                        </div>

                        <div className='conteiner_quantityInput'>
                          
                            <label htmlFor="input_quant_amendoimPie" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('input_amendoimPie')}>+</button>
                                <input type="number" id='input_quant_amendoimPie' value={itensProperties.input_amendoimPie.quant} onChange={(e) => changeValueInput(e, 'input_amendoimPie')} />
                                <button onClick={() => subQuantity('input_amendoimPie')}>-</button>
                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={macaPie.img} alt="imagme de uma torta de amêndoa com maracujá" />
                            </div>
                            <div className='box_text_item'>
                             <p className='label_item_menu'>sabor</p>
                             <p className='name_item'>{macaPie.name}</p>
                             <p className='label_item_menu'>preço</p>
                             <p className='price_item'>R${macaPie.price}</p>

                            </div>

                        </div>


                        <div className='conteiner_quantityInput'>
                       
                            <label htmlFor="input_quant_macaPie" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('input_macaPie')}>+</button>
                                <input type="number" id='input_quant_macaPie' value={itensProperties.input_macaPie.quant} onChange={(e) => changeValueInput(e, 'input_macaPie')} />
                                <button onClick={() => subQuantity('input_macaPie')}>-</button>
                            </div>
                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <div className='grid_img_text'>

                            <div className='img_item'>
                                <img src={pessegoPie.img} alt="imagem de uma torta de pêssego" />
                            </div>

                            <div className='box_text_item'>
                            <p className='label_item_menu'>sabor</p>
                            <p className='name_item'>{pessegoPie.name}</p>
                            <p className='label_item_menu'>preço</p>
                            <p className='price_item'>R${pessegoPie.price}</p>

                            </div>
                        </div>


                        <div className='conteiner_quantityInput'>
                        
                            <label htmlFor="input_quant_pessegoPie" className='label_item_menu'>quantidade</label>

                            <div className='box_quant'>
                                <button onClick={() => addQuantity('input_pessegoPie')}>+</button>
                                <input type="number" id='input_quant_pessegoPie' value={itensProperties.input_pessegoPie.quant} onChange={(e) => changeValueInput(e, 'input_pessegoPie')} />
                                <button onClick={() => subQuantity('input_pessegoPie')}>-</button>
                            </div>
                        </div>


                    </div>

                </section>


            )}


            <div id='conteiner_selectedItems'>
                <p ref={p_selectedItems} id='phrase_yourItems'></p>
                <div id='box_quantityItems' ref={quantityItemsRef}>
                    <div id='box_output_quantityItems'>
                        {renderListItemsSelected()}
                    </div>



                </div>
                <div id='box_value' ref={box_total}>
                    <p>valor total</p>
                    <p>R${total}</p>



                </div>

            </div>



            {/* Confira o que você escolheu:  */}

            <div ref={selectedsRef} id='selected_names' >

                {renderListItemsSelected_Names()}
            </div>


            <p id='outputTeste'>valor da const Text: {text}</p>


            {/* 
                <p>Valor storedListItemsNames do Provider: {storedListItemsNames}</p> */}
















        </>



    )
}

export default MenuItems

