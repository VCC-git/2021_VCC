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
    socket.on("homestart", (name) => {
        socket.join(name);
    });

    socket.on("putauto", () => {
        put_auto();
    })

    socket.on("option", (title) => {
        option_change(socket, title);
    })

    get_menual(socket);

    setInterval(() => {
        get_menual(socket);
    }, 1000);
});

const get_menual = (socket) => {
    getConnection((connection) => {
        connection.query(`select name, status from think order by length(name), name;`, function(err, rows) {
            if(err) {
                console.log({message: 'auto get failed'});
            } else {
                socket.emit("auto", rows[0]);
                socket.emit("temppower", rows[5]);
                socket.emit("menual", rows.slice(1, 5));
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
            }
        })

        connection.release();
    })
}

const option_change = (socket, title) => {
    getConnection((connection) => {
        connection.query(`update think set status=if(status=0, 1, 0) where name='${title}'`, function(err, rows) {
            if(err) {
                console.log({message: 'option change failed'});
            } else {
                get_menual(socket);
            }
        })
    })
}

server.listen(port, () => console.log(`Listening on port ${port}`));