

import { coffeeList } from "./MenuCoffee"

function DeliveryPage() {
  return (
    <main>


       
        <table>
        {coffeeList.map(cafes => (
          <tr key={cafes.id}>
            <td><img src= {cafes.img} /></td>
            <td>{cafes.name}</td>
            <td>{cafes.price}</td>
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