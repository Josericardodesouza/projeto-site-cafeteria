import { useEffect } from "react";
import { useState } from "react";
import ConstEvaluationContext from "./ConstEvaluationContext";

function ConstEvaluationProvider( {children} ) {

    // const [storedEvaluation, setStoredEvaluation] = useState(() => {
    //     return localStorage.getItem('userEvaluation') || ''
    // })

    // useEffect(() => {
    //     localStorage.setItem('userEvaluation', storedEvaluation)
    // })


    return (
        <>

        {/* <ConstEvaluationContext.Provider value={{storedEvaluation, setStoredEvaluation}}>
            {children}

        </ConstEvaluationContext.Provider> */}
        
        
        </>
    )




}

export default ConstEvaluationProvider