var express = require('express')
  , app = express()
  , path = require('path')
  , db = require('./database').db;

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser()); 
app.use(express.static(__dirname + "/../site/"));

app.use(express.session({ secret: 'gangnam style'} ));


app.listen(8080, function(){
  console.log("Express server listening on port %d", '8080');
});

