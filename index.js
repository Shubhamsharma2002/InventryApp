
const expres = require('express');


const  server = expres();

const port = 8000;
server.get('/', (req, res)=>{
    res.send('<h1>Server is fired ::)</h1>');
});

server.listen(port, (req, res)=>{
    console.log(`server is running  on port No ${port}`);
})