const express = require('express');
const logger = require('morgan');

class App {
    constructor() {
        this.app = express();
        this.setMiddleWare();
        this.getRouting();
    }

    setMiddleWare() {
        this.app.use(logger('dev'));
    }

    getRouting (){
        this.app.use(require('./controllers'))
    }
}

module.exports = new App().app;