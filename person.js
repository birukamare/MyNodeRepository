//Module wrapper function 
//(function(exports, require, module, __filename, __dirname){})
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    greetings(){
        console.log(`My name is ${this.name} and I am ${this.age} years of age`)
    }
}

module.exports = Person  