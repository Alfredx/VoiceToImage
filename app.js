var express = require('express');
var http = require('http');
var path = require('path');
var sio = require('socket.io');

var mainHandler = require(__dirname+'/routes/main_handler.js');

var app = express();

app.set('port',process.env.PORT || 8889);
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());

app.use(app.router);
app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/',mainHandler.index);

var server = http.createServer(app);
var io = sio.listen(server, {log:true});

mainHandler.initIO(io);

server.listen(app.get('port'), function(){
	console.log('server listening on port '+app.get('port'));
});