'use strict';
 
const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
 
// register JSON parser middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
require('./routes/appRoutes')(app);

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});