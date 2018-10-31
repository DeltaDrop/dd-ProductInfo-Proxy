var express = require('express');
var morgan = require('morgan');
var path = require('path');

let app = express();
let port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
})