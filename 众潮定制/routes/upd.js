const express=require('express');
const pool=require('../pool');
var router=express.Router();

router.put('/v1/upd',function(req,res){
	var $cart_id=req.body.cart_id;
	var $n=req.body.n;
	var sql="update zc_cart set good_count=? where cart_id=?";
	pool.query(sql,[$n,$cart_id],function(err,result){
        if(err) throw err;
        console.log(result);
	})
})

module.exports=router;