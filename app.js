const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}`));


