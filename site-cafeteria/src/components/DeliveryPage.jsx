import '../styles/deliveryPage-modules.css'
import '../styles/colorsAndFonts-module.css'

import { hotDrinks, coldDrinks } from './ConstantsItens'

function DeliveryPage() {
  return (
    <main>


       
        <table>
        {hotDrinks.map(cafes => (
          <tr key={cafes.id}>
            <td className = 'dp_img'><img src= {cafes.img} /></td>
            <td className = 'dp_item'>{cafes.name}</td>
            <td className = 'dp_price'>{cafes.price}</td>
          </tr>
          ))}

        </table>

        <table>
          {candyList.map(doces => (
            <tr key={doces.id}>
              <td className='dp_img'><img src={doces.img}/></td>
              <td className='dp_item'>{doces.name}</td>
              <td className='dp_price'>{doces.price}</td>

            </tr>
          ))}
        </table>
         
      
        
       
        


      
      

      <div>
        <img /> 
        <ul>
          <li></li>
        </ul>


      </div>
    
    
    
    
    
    </main>
  )
}

export default DeliveryPage