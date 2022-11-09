//console.log("Hello this is Node")
// const Person = require('./person'); // this is common JS module
// const person1 = new Person("Biruk", 27);
// person1.greetings()

// //Working With EventEmitter using logger class
// const Logger = require('./logger');
// const logger = new Logger(); //Logger is a class so we need to instantiate it
// logger.on('message', data=> console.log('Called Listener: ', data));
// logger.log('Hello World'); 

const http = require('http');
const path = require('path');
const fs = require('fs'); 

//Creating a server that gets a request and a response 
const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     // res.writeHead(200, {'Contnet-Type': 'text/html'}); // This will write to the headers 200 response means everything is ok
    //     // res.end('<h1 style="color:red; background-color:Black; text-align:center">Home Page</h1>');
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content); 
    //     });
    // }

    // if(req.url === '/api/users'){
    //     const users = [
    //         {name: 'Amare Yimam', age: 57},
    //         {name: 'John Biruk ', age:35}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    //Build file path
    let filePath = path.join(
        __dirname,
        'public', // it looks in the public folder
        req.url === '/' ? 'index.html' : req.url //evaluating request.url and load the file
    );
    // console.log(filePath);
    // res.end();

    //Extention of file 
    let extname = path.extname(filePath); //getting the extention of the file
    //Initial content type
    let contentType = 'text/html';

    //check ext and set content type
    switch (extname){ //evaluating the extention and set the content type based on that
        case'.js':
        contentType = 'text/javascript';
        break;
        case'.css':
        contentType = 'text/css';
        break;
        case'.js':
        contentType = 'text/javascript';
        break;
        case'.json':
        contentType = 'text/json';
        break;
        case'.jpg':
        contentType = 'text/jpg';
        break;
    }

    //Read file
    fs.readFile(filePath, (err,content)=>{
        if(err) {
            if (err.code === 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'),(err,content) =>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            } else{
                //Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.com}`);
            }
        }
        else{
            //success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8'); // sending the content of the file 
        }
    });
});
const PORT = process.env.PORT || 5000;// it will first look for the environment variable to run the page 

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




