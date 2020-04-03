
const express = require ('express');
const mongoose =  require ('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect('mongodb+srv://goweek_05:1234@goweek-05-backend-inzx8.mongodb.net/test', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

app.use((request, response, next) => {
    request.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000, () => {
    console.log('Servidor porta 3000');
    
} );