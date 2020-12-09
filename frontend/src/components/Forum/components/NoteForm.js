import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    content: {
        width: '100%',
        height: '10vh',
        resize: 'none',
        backgroundColor: '#f8f8f8',
        padding: '12px 20px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
    },
    heading: {
        width: '40%',
        backgroundColor: '#f8f8f8',
        padding: '7px 14px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
    },
})

const NoteForm = ({ createNote }) => {
    const [newNote, setNewNote] = useState('')
    const [newHeading, setNewHeading] = useState('')
    const classes = useStyles()

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
                    otsikko:{' '}
                    <input
                        className={classes.heading}
                        value={newHeading}
                        onChange={handleHeadingChange}
                    />
                </p>
                <p>
                    sisältö:
                    <br />
                    <textarea
                        className={classes.content}
                        value={newNote}
                        onChange={handleChange}
                    />
                </p>
                <button type="submit">tallenna</button>
            </form>
        </div>
    )
}

export default NoteForm
