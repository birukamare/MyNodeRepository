//URL module
const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')//instantiating a new url object

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//Host (root domain)
console.log(myUrl.host);
//HostName does not get port
console.log(myUrl.hostname); 
//PathName
console.log(myUrl.pathname);
//Serialized query
console.log(myUrl.search);
//Params object
console.log(myUrl.searchParams);
//Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams); 
//Loop through params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`));
//myUrl.searchParams.forEach((value,key)=>console.log(`${key}: ${value}`)); it is as same as above