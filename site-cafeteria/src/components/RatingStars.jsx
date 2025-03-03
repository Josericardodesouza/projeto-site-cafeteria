import '../styles/ratingStars-module.css'
import '../styles/global-css/colorsAndFonts-module.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { RatingNoteContext } from '../context/RatingNoteContext';
import { FaRegFaceFrown, FaRegFaceGrinStars, FaRegFaceKissWinkHeart, FaRegFaceMeh, FaRegFaceSmile } from 'react-icons/fa6';


function RatingStars() {

    const { setStoredNote } = useContext(RatingNoteContext)

    const boxStarsRef = useRef(null)
    const [note, setNote] = useState('')


    

   


    //  const emoji = useRef('')


    //  useEffect(() => {

    //     if (note === 1) {
    //         emoji.current.appendChild('<IoHome />')
    // } else {
       
       
   
    // }   




    //  })


 

   
 

    useEffect(() => {
        const container = boxStarsRef.current;

        const starClick = (e) => {
            const classStar = e.target.classList

            if (!classStar.contains('active')) {
                // remove a classe active de todas as estrelas

                const ratingStars = container.querySelectorAll('.starIcon')
                ratingStars.forEach((star) => {
                    star.classList.remove('active')
                })

              

                classStar.add('active')

        

                const evaluationValue = e.target.getAttribute('data-evaluation')
                setNote(evaluationValue)
                //console.log('valor selecionado: ', evaluationValue)


            }

        }

  
        container.addEventListener('click', starClick)


     
        return () => {
            container.removeEventListener('click', starClick)
        }


    }, [])

    const confirmaValor = () => {
        //console.log('Valor confirmado: ', note)
        setStoredNote(note)
    }



    const emoji = useRef(null)


    
        const displayEmoji = () => {
    
    
            switch(note) {
    
              
                    case '1':
                
                      return <FaRegFaceFrown />
                      
    
              
                    case '2':
                 
                      return  <FaRegFaceMeh />
              
              
                    case '3':
                  
                      return <FaRegFaceSmile />
              
              
                    case '4':
                  
                      return <FaRegFaceKissWinkHeart />
              
                    case '5':
                
                    
              
                      return <FaRegFaceGrinStars />
    
    
            
    
    
            }
    
         
    
    
    
    
    
            
        }


        

    useEffect(() => {


        if (note === '1') {

            emoji.current.className = 'emoji_note_1'
          

            // console.log('adicionou classe 1')

        } else if (note === '2') {

            emoji.current.className ='emoji_note_2'

            // console.log('adicionou classe 2')

        } else if (note === '3') {

            emoji.current.className = 'emoji_note_3'

            // console.log('adicionou classe 3')

        } else if (note === '4') {

            emoji.current.className = 'emoji_note_4'

            // console.log('adicionou classe 4')

        } else if (note === '5') {
            emoji.current.className = 'emoji_note_5'

            // console.log('adicionou classe 5')

        }



  

   

           



    })







    return (

        <>
            {/* <h1>Componente das estrelas</h1> */}
            <div id='-stars_evaluation_box' ref={boxStarsRef}>

                <ul className="ratingStars">
                    
                    <li className="starIcon" data-evaluation='1' onClick={confirmaValor}></li>
                    <li className="starIcon" data-evaluation='2' onClick={confirmaValor}></li>
                    <li className="starIcon" data-evaluation='3' onClick={confirmaValor}></li>
                    <li className="starIcon" data-evaluation='4' onClick={confirmaValor}></li>
                    <li className="starIcon" data-evaluation='5' onClick={confirmaValor}></li>


                </ul>

                {/* <button onClick={confirmaValor}>Confirmar avaliação</button> */}
                {/* <p>{note}</p> */}

                <div>

                </div>




            </div>

          
  
            <span id='emoji_sendPage' ref={emoji}>{displayEmoji()}</span>

          



        </>
    )
}

export default RatingStars