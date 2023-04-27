// const http = require('http');
// const { getCharById } = require('./controllers/getCharById')
// // const data = require('./utils/data');--->dejar comentado

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1); // <--- Me da lo ultimo de la url que es el id

//         getCharById(res, +id);
//     }

//     // if(req.url.includes('/rickandmorty/character')){
//     //     const id = req.url.split('/').at(-1)
//     //     const characterFound = data.find((character) => {    --->dejar comentado
//     //         return character.id === +id
//     //     })

//     //     return res
//     //     .writeHead(200, {"Content-type": "application/json"}) --->dejar comentado
//     //     .end(JSON.stringify(characterFound))
//     // }

// }).listen(3001, 'localhost')

// const express = require('express');
// const server = express();
// const router = require('./routes/index');
// const morgan = require('morgan');
const server = require('./app');
const PORT = 3001;

// server.use(express.json());
// server.use(morgan('dev'));

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });

// server.use('/rickandmorty', router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});