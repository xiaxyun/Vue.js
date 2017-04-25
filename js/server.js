/**
 * New node file
 * 搭建简单的node服务器
 * 返回200状态码则成功
 */
var port = 8880;
var i = 0,j = 0;
var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('OK!');
	j++;
	console.log('-'+j+'-ok!!');
	response.end('Hello World\n');
	i++;
	console.log('ok!!'+i);
}).listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');