const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(fileUpload());
app.use(cookieParser());
app.use( '/images', express.static('./server/images'));

app.use(require('./controllers'));

const port = 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}`));