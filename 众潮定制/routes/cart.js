const express=require('express');
const pool=require('../pool');
var router=express.Router();


router.get('/v1/cartlist/:n',function(req,res){
    var $n=req.params.n;
    console.log($n);
	var sql="select Uid from zc_user where Name=?";
	
	pool.query(sql,[$n],function(err,result){
		if(err) throw err;
		//res.send(result);
		console.log(result);

		var $user_id=result[0].Uid;
		console.log($user_id);

		var sql1="select * from zc_cart where user_id=?";
		pool.query(sql1,[$user_id],function(err,result){
		if(err) throw err;
		res.send(result);
		console.log(result);
		})
	})
})

module.exports=router;