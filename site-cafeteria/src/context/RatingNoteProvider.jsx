import { useEffect, useState } from "react"
import { RatingNoteContext } from "./RatingNoteContext"

function RatingNoteProvider({ children }) {

    const [storedNote, setStoredNote] = useState(() => {
        const savedNote = localStorage.getItem('note')
        return savedNote !== null ? savedNote : ''

    })

    useEffect(() => {
        localStorage.setItem('note', storedNote)
    }, [storedNote])

    return (
        <RatingNoteContext.Provider value={{ storedNote, setStoredNote }}>
            {children}

        </RatingNoteContext.Provider>
    )
}

export default RatingNoteProvider