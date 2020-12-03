import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Footer from './components/Footer'
import noteService from './services/notes'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import Button from '@material-ui/core/Button'

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
    paperLeftAlign: theme.paperLeftAlign,
    paragraph: {
        fontSize: '70%',
        fontFamily: 'Serif',
    },
    starFull: {
      color: 'white',
      fontSize: '170%',
      font: 'white',
      verticalAlign: 'middle',
    },
    starBorder: {
      color: 'white',
      fontSize: '170%',
      font: 'white',
      verticalAlign: 'middle',
    },
    sideBySide: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      verticalAlign: 'middle',
    },
    favoriteText: {
      fontSize: '80%',
      verticalAlign: 'middle',
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
            <h1 className={classes.paperLeftAlign}>
                <h1 className={classes.text_center}>Keskustelufoorumi</h1>
                <p className={classes.paragraph}>
                    {user === null ?
                        <p>Kirjaudu sisään kommentoidaksesi</p> :
                        <div>
                        <p>Hei {user.name}!</p>
                            {noteForm()}
                        </div>
                    }
                    <div className={classes.sideBySide}>
                    <h1 className={classes.sideBySide}>Kommentit</h1>
                    <div>
                        <Button onClick={() => setShowAll(!showAll)}>
                        {showAll ? <h1 className={classes.starBorder}><StarBorderIcon className={classes.starBorder} /><p className={classes.favoriteText}>&nbsp;&nbsp;&nbsp;näytä suosikit</p></h1> : <h1 className={classes.starFull}><StarIcon className={classes.starFull}/><p className={classes.favoriteText}>&nbsp;&nbsp;&nbsp;näytä kaikki</p></h1> }
                        </Button>
                    </div>
                    </div>
                    <ul>
                        {notes && 
                        notesToShow.map((note, i) =>
                        <Note
                            key={i}
                            note={note}
                            toggleImportance={() => toggleImportanceOf(note.id)}
                        />
                        )}
                        {notes.length < 1 &&
                          <p>ladataan...</p>
                        }
                    </ul>

                    <Footer />
                </p>
            </h1>
        </div>
    )
}
