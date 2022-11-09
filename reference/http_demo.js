const http = require('http');

//Create server object
http.createServer((req, res) =>{
    // Write response 
    res.write('Hello There!'); //it outputs to the browser 
    res.end();
}).listen(5000, ()=> console.log('Server running...')); 