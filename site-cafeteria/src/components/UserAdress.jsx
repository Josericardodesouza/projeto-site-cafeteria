import { useContext } from "react"
import { UserAdressContext } from "../context/UserAdressContext"
import { useState } from "react"



function UserAdress() {

    const {setAdressUser} = useContext(UserAdressContext)
    const [cep, setCep] = useState('')

    
  const localSearch = (e) => { 
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)

    if (cep.length === 8) {




    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data =>{

     
      console.log(data)

      setAdressUser ({

        state: data.estado,
        city: data.localidade,
        neighborhood: data.bairro,
        street: data.logradouro

      })

   


    //   const state = data.estado 
    //   const city = data.localidade 
    //   const neighborhood = data.bairro 
    //   const street = data.logradouro


      // document.getElementById('output_uf').innerHTML = `Estado: ${data.state}`
      // document.getElementById('output_city').innerHTML = `Cidade: ${data.city}`
      // document.getElementById('output_neighborhood').innerHTML = `Bairro: ${data.neighborhood}`
      // document.getElementById('output_street').innerHTML = `Rua: ${data.street}`

   
        
  })

  .catch((error) => {
    alert('Erro ao buscar o endereço. Tente novamente.');
    console.error(error);
  });


}

  }




    return (

        <>

      
<div id='conteiner_inputAdress'>
  
          <label htmlFor="ent_adressUser"> Insira seu CEP</label>
          <input type='text' id='ent_adressUser' name='ent_adressUser' value={cep} onChange={(e) => setCep(e.target.value)} onBlur={localSearch} maxLength={9}></input>
</div>
         
         

          {/* <p id='output_uf'></p>
          <p id='output_city'></p>
          <p id='output_neighborhood'></p>
          <p id='output_street'></p> */}


          </>


    )
}

export default UserAdress