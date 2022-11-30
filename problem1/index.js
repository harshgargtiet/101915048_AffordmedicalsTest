const http = require('http');

const data={name: 'harsh',email:'harshg@gmail.com'};
http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type': 'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4000); 
 //  how i will approach to this problem 
 //  first i will fetch input url 
 //  then check whether my url is correct or not 
 //  if correct i will get request that url and will get output endpoints 