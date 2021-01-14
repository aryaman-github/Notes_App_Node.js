const chalk = require('chalk');
const { describe, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'add a title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'add a body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'removes a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'reads a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.readNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'lists a new note',
    handler() {
        notes.listNote()
    }
})

//create update command
yargs.command({
    command: 'update',
    describe: 'Update a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notesUtils.updateNote(argv.title, argv.body)
    }
})

//add, remove, read, list

//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()
