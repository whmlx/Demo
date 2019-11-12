const express=require('express');
const pool=require('../pool');
var router=express.Router();


router.get('/v1/goodslist/:zhonglei',function(req,res){
	var $zhonglei=req.params.zhonglei;
	var sql="select Iid from zc_items where Iname=?";
	var $zhongleiId=0;

	pool.query(sql,[$zhonglei],function(err,result){
		if(err) throw err;
		//res.send(result);
		//console.log(result);

		$zhongleiId=result[0].Iid;
		//console.log($zhongleiId);

		var sql1="select * from zc_goods where Items_Id=?";
		pool.query(sql1,[$zhongleiId],function(err,result){
			if(err) throw err;
			res.send(result);
		})
	})
})




module.exports=router;