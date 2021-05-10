const express = require('express');
const http = require("http");
const socketIo = require('socket.io');
const getConnection = require('./models');

const port = 8080;

const app = express();
app.use(require('./controllers'))

var server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});


io.on("connection", (socket) => {
    console.log("New client connected");
    
    socket.on("homestart", (name) => {
        console.log(name);
        socket.join(name);
    });

    setInterval(() => {
        get_auto(socket);
    }, 1000);

    socket.emit("manualdata", require('./controllers/think/think.ctrl').get_auto)
});

const get_auto = (socket) => {
    getConnection((connection) => {
        connection.query(`select status from think where name='auto';`, function(err, rows) {
            if(err) {
                console.log({message: 'test failed'});
            } else {
                console.log({message: 'test success', rows});
                socket.emit("manualdata", rows[0]);
            }
        })

        connection.release();
    })
}


server.listen(port, () => console.log(`Listening on port ${port}`));