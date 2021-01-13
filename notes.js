//console.log('notes.js')
const chalk = require('chalk')
const { Console } = require('console')
const fs = require('fs')


const addNotes = (title, body) => {
    const notes = loadNotes()

    const dupNote = notes.find((note) => note.title === title)

    debugger

    // const dupNotes = notes.filter(function (note) {
    //     if(note.title === title)
    //         return true
    // })
    
    if(!dupNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!'))
    } else {
        console.log(chalk.red.inverse('Note already exits with same title!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    if(notes.length > newNotes.length) {
        console.log(chalk.green.inverse('Note Removed!!'))
        saveNotes(newNotes)
    } else {
        console.log(chalk.red.inverse('No Note Removed!!'))
    }
    
}

const listNote = () => {
    console.log('Your Notes')
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const reqNote = notes.find((note) => note.title === title)

    if(reqNote) {
        console.log('Title ' + chalk.green(reqNote.title))
        console.log('Body ' + chalk.blue(reqNote.body))
    } else {
        console.log(chalk.red('No Note found!!'))
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(err) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
