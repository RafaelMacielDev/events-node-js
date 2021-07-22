const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => { //once, para um unico evento 
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Rafael")
ev.emit('saySomething', "Cooper")
ev.emit('saySomething', "Camila")