const express=require('express');
const pool=require('../pool');
var router=express.Router();

router.get('/v1/good/:goods_id',function(req,res){
	var $goods_id=req.params.goods_id;

	var sql="select * from zc_goods where Gid=? ";

	pool.query(sql,[$goods_id],function(err,result){
		if(err) throw err;
		res.send(result);
	});
});


module.exports=router;