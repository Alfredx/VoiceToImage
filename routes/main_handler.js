
var initSocket = function(socket){

}

exports.initIO = function(io){
	io.of('/index').on('connection', function(socket){
		initSocket(socket);
	});
}

exports.index = function(req, res){
	var context = {
		title : 'hello world'
	};
	res.render('index', context);
}