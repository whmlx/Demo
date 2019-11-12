const express=require('express');
const pool=require('../pool');
var router=express.Router();


router.get('/v1/dingdan/:n',function(req,res){
    var $n=req.params.n;
	var sql="select * from zc_order where User_id=?";

	pool.query(sql,[$n],function(err,result){
		if(err) throw err;
		res.send(result);
	})
})




module.exports=router;