const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter{}

//Init objct
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', ()=>console.log('Event Fired'));

//Init event
myEmitter.emit('event');