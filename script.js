const http = require('http');
const PORT = 4000;

const server = http.createServer((req,res)=>{
    console.log('My name is Akshay Raj');
    res.end('My name is Akshay Raj');
});

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
