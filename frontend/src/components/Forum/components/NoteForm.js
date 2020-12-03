import React, { useState } from 'react'

const NoteForm = ({ createNote }) => {
    const [newNote, setNewNote] = useState('')
    const [newHeading, setNewHeading] = useState('')

    const handleChange = event => {
        setNewNote(event.target.value)
    }

    const handleHeadingChange = event => {
        setNewHeading(event.target.value)
    }

    const addNote = event => {
        event.preventDefault()
        createNote({
            heading: newHeading,
            content: newNote,
            important: false,
        })

        setNewHeading('')
        setNewNote('')
    }

    return (
        <div className="formDiv">
            <h2>Kirjoita uusi kommentti</h2>

            <form onSubmit={addNote}>
                <p>
                    otsikko: <input value={newHeading} onChange={handleHeadingChange} />
                </p>
                <p>
                    sisältö: <input value={newNote} onChange={handleChange} />
                </p>
                <button type="submit">tallenna</button>
            </form>
        </div>
    )
}

export default NoteForm
