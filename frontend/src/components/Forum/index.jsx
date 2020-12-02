import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Footer from './components/Footer'
import noteService from './services/notes'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    text_center: {
        color: 'white',
        textAlign: 'center',
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
    },
    rootElement: theme.rootElement,
    backgroundImage: theme.backgroundImage,
    paper: theme.paper,
    paragraph: {
        fontSize: '70%',
        fontFamily: 'Serif',
    },
}))

export default function Forum() {
    const classes = useStyles()

    const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [user, setUser] = useState(null)

  const noteFormRef = React.createRef()

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = (noteObject) => {
    noteFormRef.current.toggleVisibility()
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  }
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(() => {
        console.log(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          console.log(null)
        }, 5000)
      })
  }

  const noteForm = () => (
    <Togglable buttonLabel='uusi kommentti' ref={noteFormRef}>
      <NoteForm createNote={addNote} />
    </Togglable>
  )


    return (
        <div className={classes.rootElement}>
            <h1 className={classes.paper}>
                <h1 className={classes.text_center}>Keskustelufoorumi</h1>
                <p className={classes.paragraph}>
                    {user === null ?
                        <p>Kirjaudu sisään kommentoidaksesi</p> :
                        <div>
                        <p>Hei {user.name}!</p>
                            {noteForm()}
                        </div>
                    }
                    <h1>Kommentit</h1>
                    <div>
                        <button onClick={() => setShowAll(!showAll)}>
                        näytä {showAll ? 'suosikit' : 'kaikki' }
                        </button>
                    </div>
                    <ul>
                        {notesToShow.map((note, i) =>
                        <Note
                            key={i}
                            note={note}
                            toggleImportance={() => toggleImportanceOf(note.id)}
                        />
                        )}
                    </ul>

                    <Footer />
                </p>
            </h1>
        </div>
    )
}
