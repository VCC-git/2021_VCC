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
    
    setInterval(() => {
        get_auto((err, getAuto) => {
            if (err) console.log("auto get failed");
            else socket.emit("getAuto", getAuto);
        });
    
        get_option((err, getOption) => {
            if (err) console.log("option get failed");
            else socket.emit("getOption", getOption);
        });
    
        get_temppower((err, getTempPower) => {
            if (err) console.log("temperature power get failed");
            else socket.emit("getTempPower", getTempPower);
        });
    }, 1000);

    socket.on("putAuto", () => {
        put_auto();
    })

    socket.on("putOption", (title) => {
        put_option(title);
    })

    socket.on("putTempPower", () => {
        put_temppower();
    })
   
});

let getAuto = 0;
let getOption = [];
let getTempPower = 0;

const get_auto = (callback) => {
    getConnection((connection) => {
        connection.query(`select status from think where name="auto";`, (err, rows) => {
            if(err) {
                console.log({message: 'auto get failed'});
                return callback(err);
            } else {
                getAuto = rows[0].status;
            }
            callback(null, getAuto);
        })
        connection.release();
    })
}

const get_option = (callback) => {
    getConnection((connection) => {
        connection.query(`select name, status from think order by length(name), name;`, (err, rows) => {
            if(err) {
                console.log({message: 'option get failed'});
                return callback(err);
            } else {
                getOption = [];
                for(let i=0;i<4;i++) {
                    getOption.push(rows[i+1])
                }
            }
            callback(null, getOption);
        })
        connection.release();
    })
}

const get_temppower = (callback) => {
    getConnection((connection) => {
        connection.query(`select status from think where name="temperature"`, (err, rows) => {
            if(err) {
                console.log({message: 'temperature power get failed'});
                return callback(err);
            } else {
                getTempPower = rows[0].status
            }
            callback(null, getTempPower);
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
                console.log({message: 'auto change success'});
            }
        })
        connection.release();
    })
}

const put_option = (title) => {
    getConnection((connection) => {
        connection.query(`update think set status=if(status=0, 1, 0) where name='${title}'`, function(err, rows) {
            if(err) {
                console.log({message: 'option change failed'});
            } else {
                console.log({message: 'option change success'});
            }
        })
    })
}

const put_temppower = () => {
    getConnection((connection) => {
        connection.query(`update think set status=if(status=0, 1, 0) where name='temperature';`, function(err, rows) {
            if(err) {
                console.log({message: 'temp power change failed'});
            } else {
                console.log({message: 'temp power change success'});
            }
        })

        connection.release();
    })
}

server.listen(port, () => console.log(`Listening on port ${port}`));