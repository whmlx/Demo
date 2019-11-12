var mysql=require('mysql');

var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'zc',
	connectionLimit:200
});

module.exports=pool;