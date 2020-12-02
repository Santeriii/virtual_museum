import React from 'react'

const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'poista suosikeista' : 'lisää suosikkeihin'

    return (
        <li className="note">
            <span>{note.content}</span>
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note
