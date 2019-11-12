const express=require('express');
const pool=require('../pool.js');

var router=express.Router();

//注册
router.post('/v1/reg',function(req,res){
	var $uname=req.body.uname;
	var $phone=req.body.phone;
	var $pwd=req.body.pwd;

	var sql="insert into zc_user (Name,UserPhone,UserPwd) values(?,?,?)";

	pool.query(sql,[$uname,$phone,$pwd],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})

//验证手机号是否重复
router.get('/v1/reg/:phone',function(req,res){
	var $phone=req.params.phone;

	var sql="select * from zc_user where UserPhone=?";

	pool.query(sql,[$phone],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
})

module.exports=router;