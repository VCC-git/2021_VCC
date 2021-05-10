const express = require('express');
const logger = require('morgan');

class App {
    constructor() {
        this.app = express();
        this.setMiddleWare();
    }

    setMiddleWare() {
        this.app.use(logger('dev'));
    }
}

module.exports = new App().app;