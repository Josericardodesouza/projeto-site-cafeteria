import { hotDrinks, coldDrinks } from './ConstantsItens'
import { typesBrigadeiro, typesBrownies, typesCookies, typesCupcakes, typesPie } from './ConstantsItens'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { MenuItemsContext } from '../context/MenuItemsContext'
import { Children } from 'react'
import { useRef } from 'react'




const coado = hotDrinks.find(coffee => coffee.name === 'coado')
const cappuccino = hotDrinks.find(coffee => coffee.name === 'Cappuccino')
const espresso = hotDrinks.find(coffee => coffee.name === 'Espresso')
const latte = hotDrinks.find(coffee => coffee.name === 'Latte')
const mocha = hotDrinks.find(coffee => coffee.name === 'Mocha')
const pingado = hotDrinks.find(coffee => coffee.name === 'Pingado')


const cafeGelado = coldDrinks.find(coldDrink => coldDrink.name === 'café gelado')
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

    const cappuccino_name = cappuccino ? cappuccino.name : ''
    const cappuccino_price = cappuccino ? parseFloat(cappuccino.price.replace(',', '.')) : 0

    const espresso_name = espresso ? espresso.name : ''
    const espresso_price = espresso ? parseFloat(espresso.price.replace(',', '.')) : 0

    const latte_name = latte ? latte.name : ''
    const latte_price = latte ? parseFloat(latte.price.replace(',', '.')) : 0

    const mocha_name = mocha ? mocha.name : ''
    const mocha_price = mocha ? parseFloat(mocha.price.replace(',', '.')) : 0

    const pingado_name = pingado ? pingado.name : ''
    const pingado_price = pingado ? parseFloat(pingado.price.replace(',', '.')) : 0

    const cfGelado_name = cafeGelado ? cafeGelado.name : ''
    const cfGelado_price = cafeGelado ? parseFloat(cafeGelado.price.replace(',', '.')) : 0

    const coldBrew_name = coldBrew ? coldBrew.name : ''
    const coldBrew_price = coldBrew ? parseFloat(coldBrew.price.replace(',', '.')) : 0

    const expTonico_name = expTonico ? expTonico.name : ''
    const expTonico_price = expTonico ? parseFloat(expTonico.price.replace(',', '.')) : 0

    const frappuccino_name = frappuccino ? frappuccino.name : ''
    const frappuccino_price = frappuccino ? parseFloat(frappuccino.price.replace(',', '.')) : 0

    const cocoBrig_name = cocoBrigadeiro ? cocoBrigadeiro.name : ''
    const cocoBrig_price = cocoBrigadeiro ? parseFloat(cocoBrigadeiro.price.replace(',', '.')) : 0

    const mrgBrig_name = morangoBrigadeiro ? morangoBrigadeiro.name : ''
    const mrgBrig_price = morangoBrigadeiro ? parseFloat(morangoBrigadeiro.price.replace(',', '.')) : 0

    const lightBrig_name = lightBrigadeiro ? lightBrigadeiro.name : ''
    const lightBrig_price = lightBrigadeiro ? parseFloat(lightBrigadeiro.price.replace(',', '.')) : 0

    const cfBrownie_name = cafeBrownie ? cafeBrownie.name : ''
    const cfBrownie_price = cafeBrownie ? parseFloat(cafeBrownie.price.replace(',', '.')) : 0

    const chCookie_name = chocolateCookie ? chocolateCookie.name : ''
    const chCookie_price = chocolateCookie ? parseFloat(chocolateCookie.price.replace(',', '.')) : 0

    const chCupcake_name = chocolateCupcake ? chocolateCupcake.name : ''
    const chCupcake_price = chocolateCupcake ? parseFloat(chocolateCupcake.price.replace(',', '.')) : 0

    const mrgCupcake_name = morangoCupcake ? morangoCupcake.name : ''
    const mrgCupcake_price = morangoCupcake ? parseFloat(morangoCupcake.price.replace(',', '.')) : 0

    const nozesCupcake_name = nozesCupcake ? nozesCupcake.name : ''
    const nozesCupcake_price = nozesCupcake ? parseFloat(nozesCupcake.price.replace(',', '.')) : 0

    const amdMaracujaPie_name = amendoaMaracujaPie ? amendoaMaracujaPie.name : ''
    const amdMaracujaPie_price = amendoaMaracujaPie ? parseFloat(amendoaMaracujaPie.price.replace(',', '.')) : 0

    const amendoimPie_name = amendoimPie ? amendoimPie.name : ''
    const amendoimPie_price = amendoimPie ? parseFloat(amendoimPie.price.replace(',', '.')) : 0

    const macaPie_name = macaPie ? macaPie.name : ''
    const macaPie_price = macaPie ? parseFloat(macaPie.price.replace(',', '.')) : 0

    const pssgPie_name = pessegoPie ? pessegoPie.name : ''
    const pssgPie_price = pessegoPie ? parseFloat(pessegoPie.price.replace(',', '.')) : 0





    const [itensProperties, setItensProperties] = useState({



        inputCoado: { quant: 0, name: coado_name, price: coado_price },
        inputCappuccino: { quant: 0, name: cappuccino_name, price: cappuccino_price },

        inputEspresso: { quant: 0, name: espresso_name, price: espresso_price },

        inputLatte: { quant: 0, name: latte_name, price: latte_price },

        inputMocha: { quant: 0, name: mocha_name, price: mocha_price },

        inputPingado: { quant: 0, name: pingado_name, price: pingado_price },

        inputCafeGelado: { quant: 0, name: cfGelado_name, price: cfGelado_price },

        inputColdBrew: { quant: 0, name: coldBrew_name, price: coldBrew_price },

        inputExpTonico: { quant: 0, name: expTonico_name, price: expTonico_price },

        inputFrappuccino: { quant: 0, name: frappuccino_name, price: frappuccino_price },

        inputCocoBrig: { quant: 0, name: cocoBrig_name, price: cocoBrig_price },

        inputMrgBrig: { quant: 0, name: mrgBrig_name, price: mrgBrig_price },

        inputLightBrig: { quant: 0, name: lightBrig_name, price: lightBrig_price },

        inputCafeBrownie: { quant: 0, name: cfBrownie_name, price: cfBrownie_price },

        inputChCookie: { quant: 0, name: chCookie_name, price: chCookie_price },

        inputChCupcake: { quant: 0, name: chCupcake_name, price: chCookie_price },

        inputMrgCupcake: { quant: 0, name: mrgCupcake_name, price: mrgBrig_price },

        inputNozesCupcake: { quant: 0, name: nozesCupcake_name, price: nozesCupcake_price },

        input_amendoaMaracujaPie: { quant: 0, name: amdMaracujaPie_name, price: amdMaracujaPie_price },

        input_amendoimPie: { quant: 0, name: amendoimPie_name, price: amendoimPie_price },

        input_macaPie: { quant: 0, name: macaPie_name, price: macaPie_price },

        input_pessegoPie: { quant: 0, name: pssgPie_name, price: pssgPie_price }

    })




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


    
    const [itemsListSelected, setItemsListSelected] = useState('')
  



    const renderListItemsSelected = () => {
        return Object.keys(itensProperties).map((key) => {
            if (itensProperties[key].quant > 0) {
                return <p key={key}>Você selecionou {itensProperties[key].quant} unidades de {itensProperties[key].name} no valor de {itensProperties[key].price}</p>
            }
            return null
        })


    }

    console.log('Teste do componenente da lista', { renderListItemsSelected })
    //   console.log('Isso é a itensProperties: ', item )





    const [total, setTotal] = useState(0)


    const totalValue = () => {
        return Object.values(itensProperties).reduce((acumulate, item) => {
            return acumulate + (item.quant * item.price)
        }, 0)
    }

    useEffect(() => {
        const total = totalValue()
        setTotal(total)
        console.log('total:', total)
    }, [itensProperties])












    return (

        <>




            <div onClick={() => displayDivsItens('divsHotDrinks')} className='show_sections'>
                <h2>Bebidas Quentes</h2>
                {showDivItens.divsHotDrinks ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showDivItens.divsHotDrinks && (

                <section className='deliveryItens' id='hotDrinks_section'>

                    <div className='deliveryItem'>

                        <img src={coado.img} alt='imagem café coado' />
                        <p>{coado.name}</p>
                        <p>{coado.price}</p>
                        <div className='quantity_input'>

                            <button onClick={() => addQuantity('inputCoado')}>+</button>
                            <input type='number' id='input_add_coado' value={itensProperties.inputCoado.quant} />
                            <button onClick={() => subQuantity('inputCoado')}>-</button>
                            {/* <button>confirmar</button> */}

                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <img src={cappuccino.img} alt='imagem café cappuccino' />
                        <p>{cappuccino.name}</p>
                        <p>{cappuccino.price}</p>
                        <div className='quantity_input'>

                            <button onClick={() => addQuantity('inputCappuccino')}>+</button>
                            <input type="number" value={itensProperties.inputCappuccino.quant} />
                            <button onClick={() => subQuantity('inputCappuccino')}>-</button>

                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <img src={espresso.img} alt='imagem café espresso' />
                        <p>{espresso.name}</p>
                        <p>{espresso.price}</p>

                        <div className='quantity_input'>

                            <button onClick={() => addQuantity('inputEspresso')}>+</button>
                            <input type="number" value={itensProperties.inputEspresso.quant} />
                            <button onClick={() => subQuantity('inputEspresso')}>-</button>

                        </div>

                    </div>

                    <div className='deliveryItem'>

                        <img src={latte.img} alt='imagem café latte' />
                        <p>{latte.name}</p>
                        <p>{latte.price}</p>

                        <div className='quantity_input'>

                            <button onClick={() => addQuantity('inputLatte')}>+</button>
                            <input type="number" value={itensProperties.inputLatte.quant} />
                            <button onClick={() => subQuantity('inputLatte')}>-</button>

                        </div>

                    </div>

                    <div className='deliveryItem'>
                        <img src={mocha.img} alt='imagem café mocha' />
                        <p>{mocha.name}</p>
                        <p>{mocha.price}</p>

                        <div className='quantity_input'>
                            <button onClick={() => addQuantity('inputMocha')}>+</button>
                            <input type="number" value={itensProperties.inputMocha.quant} />
                            <button onClick={() => subQuantity('inputMocha')}>-</button>

                        </div>

                    </div>

                    <div className='deliveryItem'>
                        <img src={pingado.img} alt="imagem café pingado" />
                        <p>{pingado.name}</p>
                        <p>{pingado.price}</p>

                        <div className='quantity_input'>
                            <button onClick={() => addQuantity('inputPingado')}>+</button>
                            <input type="number" value={itensProperties.inputPingado.quant} />
                            <button onClick={() => subQuantity('inputPingado')}>-</button>

                        </div>
                    </div>


                </section>

            )}


            <div onClick={() => displayDivsItens('divsColdDrinks')} className='show_sections'>
                <h2>Cafés Gelados</h2>
                {showDivItens.divsColdDrinks ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>





            {showDivItens.divsColdDrinks && (

                <section className='deliveryItens' id='coldDrinks_section'>

                    <div className='deliveryItem'>
                        <img src={cafeGelado.img} alt="imagem café gelado" />
                        <p>{cafeGelado.name}</p>
                        <p>{cafeGelado.price}</p>

                        <div className='quantity_input'>

                            <button onClick={() => addQuantity('inputCafeGelado')}>+</button>
                            <input type="number" value={itensProperties.inputCafeGelado.quant} />
                            <button onClick={() => subQuantity('inputCafeGelado')}>-</button>

                        </div>
                    </div>

                    <div className='deliveryItem'>
                        <img src={coldBrew.img} alt="imagem de um café Cold Brew" />
                        <p>{coldBrew.name}</p>
                        <p>{coldBrew.price}</p>

                        <div className='quantity_input'>

                            <button onClick={() => addQuantity('inputColdBrew')}>+</button>
                            <input type="number" value={itensProperties.inputColdBrew.quant} />
                            <button onClick={() => subQuantity('inputColdBrew')}>-</button>

                        </div>
                    </div>

                    <div className='deliveryItem'>
                        <img src={expTonico.img} alt="imagem de um expresso tônico" />
                        <p>{expTonico.name}</p>
                        <p>{expTonico.price}</p>

                        <div>
                            <button onClick={() => addQuantity('inputExpTonico')}>+</button>
                            <input type="number" value={itensProperties.inputExpTonico.quant} />
                            <button onClick={() => subQuantity('inputExpTonico')}>-</button>

                        </div>
                    </div>

                    <div className='deliveryItem'>
                        <img src={frappuccino.img} alt="imagem de um frappuccino" />
                        <p>{frappuccino.name}</p>
                        <p>{frappuccino.price}</p>

                        <div>
                            <button onClick={() => addQuantity('inputFrappuccino')}>+</button>
                            <input type="number" value={itensProperties.inputFrappuccino.quant} />
                            <button onClick={() => subQuantity('inputFrappuccino')}>-</button>

                        </div>
                    </div>


                </section>
            )}



            <h1>Doces</h1>
            <div className='title_section' onClick={() => displayDivsItens('divsCandies_brigadeiros')}>
                <h2>Brigadeiros</h2>
                {showDivItens.divsCandies_brigadeiros ? <IoIosArrowUp /> : <IoIosArrowDown />}

            </div>

            {showDivItens.divsCandies_brigadeiros && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>

                        <img src={cocoBrigadeiro.img} alt='imagem de brigadeiro de coco' />
                        <p>{cocoBrigadeiro.name}</p>
                        <p>{cocoBrigadeiro.price}</p>

                        <button onClick={() => addQuantity('inputCocoBrig')}>+</button>
                        <input type="number" id='inputBrig' value={itensProperties.inputCocoBrig.quant} readOnly />
                        <button onClick={() => subQuantity('inputCocoBrig')}>-</button>

                    </div>

                    <div className='deliveryItem'>

                        <img src={morangoBrigadeiro.img} alt="imagem de brigadeiro de morango" />
                        <p>{morangoBrigadeiro.name}</p>
                        <p>{morangoBrigadeiro.price}</p>

                        <button onClick={() => addQuantity('inputMrgBrig')}>+</button>
                        <input type="number" id='inputMrBrig' value={itensProperties.inputMrgBrig.quant} />
                        <button onClick={() => subQuantity('inputMrgBrig')}>-</button>

                    </div>

                    <div className='deliveryItem'>

                        <img src={lightBrigadeiro.img} alt="imagem de brigadeiro light" />
                        <p>{lightBrigadeiro.name}</p>
                        <p>{lightBrigadeiro.price}</p>

                        <button onClick={() => addQuantity('inputLightBrig')}>+</button>
                        <input type="number" id='inputLightBrig' value={itensProperties.inputLightBrig.quant} />
                        <button onClick={() => subQuantity('inputLightBrig')}>-</button>

                    </div>

                </section>

            )}



            <div className='title_section' onClick={() => displayDivsItens('divsCandies_brownies')}>
                <h2>Brownies</h2>
                {showDivItens.divsCandies_brownies ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showDivItens.divsCandies_brownies && (

                <section className='deliveryitens'>

                    <div className='deliveryItem'>

                        <img src={cafeBrownie.img} alt="imagem de um brownie de café" />
                        <p>{cafeBrownie.name}</p>
                        <p>{cafeBrownie.price}</p>

                        <button onClick={() => addQuantity('inputCafeBrownie')}>+</button>
                        <input type="number" id='inputCafeBrownie' value={itensProperties.inputCafeBrownie.quant} />
                        <button onClick={() => subQuantity('inputCafeBrownie')}>-</button>

                    </div>

                </section>

            )}



            <div className='title_section' onClick={() => displayDivsItens('divsCandies_cookies')}>
                <h2>Cookies</h2>
                {showDivItens.divsCandies_cookies ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showDivItens.divsCandies_cookies && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>
                        <img src={chocolateCookie.img} alt="imagem de um cookie de chocolate" />
                        <p>{chocolateCookie.name}</p>
                        <p>{chocolateCookie.price}</p>

                        <button onClick={() => addQuantity('inputChCookie')}>+</button>
                        <input type="number" id='inputChCookie' value={itensProperties.inputChCookie.quant} />
                        <button onClick={() => subQuantity('inputChCookie')}>-</button>

                    </div>

                </section>

            )}

            <div className='title_section' onClick={() => displayDivsItens('divsCandies_cupcakes')}>
                <h2>Cupcakes</h2>
                {showDivItens.divsCandies_cupcakes ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>


            {showDivItens.divsCandies_cupcakes && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>
                        <img src={chocolateCupcake.img} alt="imagem de cupcake de chocolate" />
                        <p>{chocolateCupcake.name}</p>
                        <p>{chocolateCupcake.price}</p>

                        <button onClick={() => addQuantity('inputChCupcake')}>+</button>
                        <input type="number" id='inputChCupcake' value={itensProperties.inputChCupcake.quant} />
                        <button onClick={() => subQuantity('inputChCupcake')}>-</button>

                    </div>

                    <div className='deliveryItem'>

                        <img src={morangoCupcake.img} alt="imagem de um cupcake de morango" />
                        <p>{morangoCupcake.name}</p>
                        <p>{morangoCupcake.price}</p>

                        <button onClick={() => addQuantity('inputMrgCupcake')}>+</button>
                        <input type="number" value={itensProperties.inputMrgCupcake.quant} />
                        <button onClick={() => subQuantity('inputMrgCupcake')}>-</button>

                    </div>

                    <div className='deliveryItem'>

                        <img src={nozesCupcake.img} alt="imagem de um cupcake de nozes" />
                        <p>{nozesCupcake.name}</p>
                        <p>{nozesCupcake.price}</p>

                        <button onClick={() => addQuantity('inputNozesCupcake')}>+</button>
                        <input type="number" value={itensProperties.inputNozesCupcake.quant} />
                        <button onClick={() => subQuantity('inputNozesCupcake')}>-</button>

                    </div>

                </section>

            )}

            <div className='title_section' onClick={() => displayDivsItens('divsCandies_pies')}>
                <h2>Tortas</h2>
                {showDivItens.divsCandies_pies ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showDivItens.divsCandies_pies && (

                <section className='deliveryItens'>

                    <div className='deliveryItem'>

                        <img src={amendoaMaracujaPie.img} alt="imagem de uma torta de maçã" />
                        <p>{amendoaMaracujaPie.name}</p>
                        <p>{amendoaMaracujaPie.price}</p>

                        <button onClick={() => addQuantity('input_amendoaMaracujaPie')}>+</button>
                        <input type="number" value={itensProperties.input_amendoaMaracujaPie.quant} />
                        <button onClick={() => subQuantity('input_amendoaMaracujaPie')}>-</button>



                    </div>

                    <div className='deliveryItem'>
                        <img src={amendoimPie.img} alt="imagem de uma torta de amendoim" />
                        <p>{amendoimPie.name}</p>
                        <p>{amendoimPie.price}</p>

                        <button onClick={() => addQuantity('input_amendoimPie')}>+</button>
                        <input type="number" value={itensProperties.input_amendoimPie.quant} />
                        <button onClick={() => subQuantity('input_amendoimPie')}>-</button>

                    </div>

                    <div className='deliveryItem'>

                        <img src={macaPie.img} alt="imagme de uma torta de amêndoa com maracujá" />
                        <p>{macaPie.name}</p>
                        <p>{macaPie.price}</p>

                        <button onClick={() => addQuantity('input_macaPie')}>+</button>
                        <input type="number" value={itensProperties.input_macaPie.quant} />
                        <button onClick={() => subQuantity('input_macaPie')}>-</button>

                    </div>

                    <div className='deliveryItem'>

                        <img src={pessegoPie.img} alt="imagem de uma torta de pêssego" />
                        <p>{pessegoPie.name}</p>
                        <p>{pessegoPie.price}</p>

                        <button onClick={() => addQuantity('input_pessegoPie')}>+</button>
                        <input type="number" value={itensProperties.input_pessegoPie.quant} />
                        <button onClick={() => subQuantity('input_pessegoPie')}>-</button>


                    </div>

                </section>








            )}


           
                
                aqui estão os itens: {renderListItemsSelected()}

        
     


        </>



    )
}

export default MenuItems

