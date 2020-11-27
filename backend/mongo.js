const { TrendingUp } = require('@material-ui/icons')
const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as an argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.blvny.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'HTML is easy',
    date: new Date(),
    important: true,
})

const note2 = new Note({
    content: 'Java is quite difficult!',
    date: new Date(),
    important: false,
})

/*const note3 = new Note({
    content: 'React is fun!',
    date: new Date(),
    important: true,
})

note.save().then(reponse => {
    console.log('note saved!')
})

note2.save().then(response => {
    console.log('note 2 saved!')
})

note3.save().then(response => {
    console.log('note 3 saved!')
    mongoose.connection.close()
})*/

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

