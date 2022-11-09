const EventEmitter = require('events');
const uuid = require('uuid'); //It creates/generates Universaly Unique IDs
//console.log(uuid.v4())

class Logger extends EventEmitter{
    log(msg){
        //Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
} 

//module.exports = Logger; // we do this when we want to use the class from another file
//Then we define it like the following const Logger = require('./logger');

const logger = new Logger(); //Logger is a class so we need to instantiate it
logger.on('message', data=> console.log('Called Listener: ', data));
logger.log('Hello World'); 