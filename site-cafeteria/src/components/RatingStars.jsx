import '../styles/ratingStars-module.css'
import '../styles/colorsAndFonts-module.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { RatingNoteContext } from '../context/RatingNoteContext';


function RatingStars() {

    const { setStoredNote } = useContext(RatingNoteContext)

    const boxStarsRef = useRef(null)
    const [note, setNote] = useState('') 

 

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
                console.log('valor selecionado: ', evaluationValue)


            }

        }

  
        container.addEventListener('click', starClick)


     
        return () => {
            container.removeEventListener('click', starClick)
        }


    }, [])

    const confirmaValor = () => {
        console.log('Valor confirmado: ', note)
        setStoredNote(note)
    }


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
                <p>{note}</p>




            </div>

        </>
    )
}

export default RatingStars