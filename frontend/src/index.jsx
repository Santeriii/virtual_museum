import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './root.css'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    text_center: {
        textAlign: 'center',
    },
    rootElement: {
        background:
            'url("https://upload.wikimedia.org/wikipedia/commons/6/62/Stairway_at_S%C3%B8dermalm_-_Stockholm_-_Black_and_white.JPG") no-repeat center center fixed',
        backgroundSize: 'cover',
        height: '80%',
        margin: '0',
        padding: '3%',
        position: 'relative',
        minHeight: '100vh',
    },
    paper: {
        width: '60%',
        position: 'relative',
        marginLeft: '13%',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(44, 44, 44, 0.9)',
        padding: '4rem 8rem',
        border: '3px solid #ffffff',
        borderRadius: '2% 6% 5% 4% / 1% 1% 2% 4%',
        color: '#ffffff',
        marginTop: '0%',
        boxShadow: '0 15px 10px rgba(0, 0, 0, 0.7)',
    },
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
