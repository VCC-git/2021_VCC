const express = require('express');
const http = require("http");
const socketIo = require('socket.io');
const getConnection = require('./models');
const logger = require('morgan');

const port = 8080;

const app = express();

app.use(logger('dev'));

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

    get_auto(socket);

    socket.on("putauto", () => {
        put_auto();
    })

    setInterval(() => {
        get_auto(socket);
    }, 500);

});

const get_auto = (socket) => {
    getConnection((connection) => {
        connection.query(`select status from think where name='auto';`, function(err, rows) {
            if(err) {
                console.log({message: 'auto get failed'});
            } else {
                socket.emit("manualdata", rows[0]);
            }
        })

        connection.release();
    })
}

const put_auto = () => {
    getConnection((connection) => {
        connection.query(`update think set status=if(status=0, 1, 0) where name='auto';`, function(err, rows) {
            if(err) {
                console.log({message: 'auto change failed'});
            } else {
                console.log({message: 'auto change success', rows});
            }
        })

        connection.release();
    })
}

server.listen(port, () => console.log(`Listening on port ${port}`));