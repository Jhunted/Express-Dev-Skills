const express = require('express');
const skillsRouter = require('./routes/skills');
const logger = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use('/', skillsRouter);

app.listen(port, function() 
{
    console.log(`Express is listening on port: ${port}`);
});